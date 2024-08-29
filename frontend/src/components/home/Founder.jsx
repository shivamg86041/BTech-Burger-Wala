import React from 'react'
import { motion } from 'framer-motion'
import me from '../../assets/founder.jpg'

const Founder = () => {
  const options = {
    initial:{
      x:"-100%",
      opacity:0,
    },
    whileInView:{
      x:0,
      opacity:1,
    }
  }
  return (
    <section className='Founder'>

        <motion.div {...options}>

          <img src={me} alt="" height={200} width={200} />

          <h3>Shivam Gupta</h3>
          <hr />
          <p>Hey Everyone! I'm Shivam Gupta, the visionary founder behind BTECH Burger Wala. <br/>
          With a passion for flavor and a drive for excellence, I embarked on a mission to redefine the burger experience. At BTECH Burger Wala, our aim is simple yet ambitious: to craft the most mouthwatering burger on the planet.
          </p>
        </motion.div>

    </section>
  )
}

export default Founder