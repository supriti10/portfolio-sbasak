"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Color, Group, MeshPhongMaterial } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: { lat: number; lng: number };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

interface GlobePoint {
  lat: number;
  lng: number;
  color: string;
  size: number;
  order: number;
}

interface RingData {
  lat: number;
  lng: number;
  color: string;
}

export function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<Group>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const defaultProps = useMemo(() => ({
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  }), [globeConfig]);

  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      const globe = new ThreeGlobe();
      globeRef.current = globe;
      groupRef.current.add(globe);
      setIsInitialized(true);
    }

    return () => {
      if (globeRef.current && groupRef.current) {
        groupRef.current.remove(globeRef.current);
        globeRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;

    const material = globeRef.current.globeMaterial() as MeshPhongMaterial | null;
    if (material) {
      material.color = new Color(defaultProps.globeColor);
      material.emissive = new Color(defaultProps.emissive);
      material.emissiveIntensity = defaultProps.emissiveIntensity;
      material.shininess = defaultProps.shininess;
    }
  }, [isInitialized, defaultProps]);

  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    const arcs = data;
    const points: GlobePoint[] = [];

    arcs.forEach((arc) => {
      points.push(
        {
          size: defaultProps.pointSize,
          order: arc.order,
          color: arc.color,
          lat: arc.startLat,
          lng: arc.startLng,
        },
        {
          size: defaultProps.pointSize,
          order: arc.order,
          color: arc.color,
          lat: arc.endLat,
          lng: arc.endLng,
        }
      );
    });

    const filteredPoints = points.filter(
      (v, i, a) => a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i
    );

    globeRef.current
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaultProps.showAtmosphere)
      .atmosphereColor(defaultProps.atmosphereColor)
      .atmosphereAltitude(defaultProps.atmosphereAltitude)
      .hexPolygonColor(() => defaultProps.polygonColor);

    globeRef.current
      .arcsData(arcs as any[])
      .arcStartLat((d: any) => d.startLat)
      .arcStartLng((d: any) => d.startLng)
      .arcEndLat((d: any) => d.endLat)
      .arcEndLng((d: any) => d.endLng)
      .arcColor((d: any) => d.color)
      .arcAltitude((d: any) => d.arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
      .arcDashLength(defaultProps.arcLength ?? 0.9)
      .arcDashInitialGap((d: any) => d.order)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime ?? 2000);

    globeRef.current
      .pointsData(filteredPoints as any[])
      .pointColor((d: any) => d.color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
      .ringsData([])
      .ringColor(() => defaultProps.polygonColor)
      .ringMaxRadius(defaultProps.maxRings ?? 3)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime! * defaultProps.arcLength!) / defaultProps.rings!
      );
  }, [isInitialized, data, defaultProps]);

  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    const interval = setInterval(() => {
      if (!globeRef.current) return;

      const newIndexes = genRandomNumbers(0, data.length, Math.floor(data.length * 0.8));

      const ringsData: RingData[] = newIndexes
        .map((i) => data[i])
        .filter(Boolean)
        .map((d) => ({
          lat: d.startLat,
          lng: d.startLng,
          color: d.color,
        }));

      globeRef.current.ringsData(ringsData);
    }, 2000);

    return () => clearInterval(interval);
  }, [isInitialized, data]);

  return <group ref={groupRef} />;
}

function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size]);

  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;

  return (
    <Canvas camera={{ position: [0, 0, cameraZ], fov: 50, near: 180, far: 1800 }}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight ?? "#ffffff"} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight ?? "#ffffff"}
        position={[-400, 100, 400]}
      />
      <directionalLight
        color={globeConfig.directionalTopLight ?? "#ffffff"}
        position={[-200, 500, 200]}
      />
      <pointLight
        color={globeConfig.pointLight ?? "#ffffff"}
        position={[-200, 500, 200]}
        intensity={0.8}
      />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotate
        autoRotateSpeed={globeConfig.autoRotateSpeed || 1}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

// Helpers
export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const set = new Set<number>();
  while (set.size < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    set.add(r);
  }
  return [...set];
}