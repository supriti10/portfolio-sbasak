import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='relative pb-10 pt-24 bg-purple-950'>
        <Spotlight className='-top-10 -right-80 h-[80vh] w-[50vw]' fill='white'/>
        <Spotlight className='top-12 left-full h-[80vh] w-[50vw]' fill='white'/>
        <Spotlight className='top-55 left-20 h-[80vh] w-[50vw]' fill='white'/>

        <div className='relative w-full overflow-hidden py-10 md:py-16'>
            <div 
                className={cn(
                    'absolute inset-0 z-0 opacity-10 pointer-events-none',
                    '[background-size: 40px_40px]',
                    '[background_position: 20px_20px]',
                    '[background-image: linear-gradient (to_right, #c08497_1px, transparent_1px), linear-gradient (to_bottom, #c08497_1px, transparent_1px)]'
                )}
                
            />

            <div className='relative z-10 flex flex-col items-center justify-start h-full pt-8 md:pt-4 text-center px-4'>
                <div className='text-center z-10 max-w-5xl'>
                    <h1 className='text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-4'>
                        Building sleek designs and <br />
                        <span className='text-purple-200 font-bold text-5xl animate-pulse'>
                            creating smart solutions
                        </span>
                        <img 
                            src='/grid.svg'
                            alt='grid'
                            className='absolute inset-0 w-full h-full opacity-100 -z-10 contrast-200'
                        />
                    </h1>

                    <TextGenerateEffect 
                        className='text-white my-8 md:tracking-wider font-semibold animate-bounce text-xl md:text-lg'
                        words="Hi, I'm Supriti Basak, a web developer and UI/UX designer."
                    />

                    <a href='#about'>
                        <MagicButton 
                            title='Show my work!'
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero