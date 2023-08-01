import React from 'react'; // Don't forget to import React
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc';

 const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12
            min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>は日本語で</p>
        <h2 className={styles.sectionHeadText}>Intro</h2>
      </motion.div>
      <motion.p variant={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Développeur Fullstack avec experiences en TypeScript et Python, et utilisant
        les frameworks React, Node et Django. <br />
        Etant un &quot;quick-learner&quot; et collaborant en étant proche des clients pour créer
        des solutions efficaces, scalables et user-friendly pour résoudre des problèmes réels.
        Travaillons ensemble pour concrétiser vos projets !

      </motion.p>
      <div
        className='mt-20 flex flex-wrap gap-10'
      >
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title} 
            index={index} 
            {...service}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")