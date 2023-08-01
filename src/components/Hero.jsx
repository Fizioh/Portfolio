import { motion } from 'framer-motion'

import { styles } from '../styles'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import 'tippy.js/animations/scale.css';
import { ComputersCanvas } from './canvas'

const Hero = () => {
  const japaneseText = "Bienvenue sur mon" //'おはよう';
  const translatedText = 'Bonjour'; 
  const japaneseText2 = 'だぜ'; 
  const translatedText2 = "moi c'est Yassine"; 


  return (
    <section
      className='relative w-full h-screen mx-auto'
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
        mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          <Tippy
            content={translatedText}
            animation="scale-subtle"
            arrow={false}
            theme="custom"
          >
            <span className="text-white rounded p-2">
              {japaneseText}
            </span>
          </Tippy>
            <span className='text-[#915eff]'>Portfolio</span>,
            <Tippy
            content={translatedText2}
            animation="scale-subtle"
            arrow={false}
            theme="custom"
          >
            <span className="text-white rounded p-2">
              {japaneseText2}
            </span> 
          </Tippy>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Concevoir, Connecter, Innover <br className='sm:block hidden' />
            Développeur Web Full Stack | Apps Géospatiales
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[64px] rounded-3xl border-secondary border-2
          flex justify-center items-start p-1">
            <motion.dev
              animate={{
                y: [0, 28, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero