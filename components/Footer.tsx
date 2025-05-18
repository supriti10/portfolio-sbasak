import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[50px] md:mb-5' id='contact'>
        <div className='w-full absolute left-0 -bottom-2'>
            <img 
                src='/footer-grid.svg'
                alt='grid'
                className='w-full h-full opacity-50'
            />
        </div>

        <div className='flex flex-col items-center relative z-10'>
            <p className='text-white md:mt-10 my-5 text-center'>
                Reach out to me today so we can collaborate and build something interesting!
            </p>
            <a href='mailto:network.sbasak@gmail.com'>
                <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow/>}
                    position='right'
                />
            </a>

            <div className='flex items-center mt-5 md:gap-3 gap-6'>
                {socialMedia.map((info) =>(
                    <a
                        key={info.id}
                        href={info.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter
                        backdrop-blur-lg saturate-180 bg-opacity-75 bg-black rounded-lg border border-black
                        transition-transform duration-300 hover:scale-110 hover:shadow-md' 
                        title={info.link}
                    >
                        <img src={info.img} alt='icon' width={20} height={20} />
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer