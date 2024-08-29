import React from 'react'
import { motion } from 'framer-motion'
import Burger2 from "../../assets/burger2.png";

const Contact = () => {
  return (
    <div>
    <section className='contact'>

    <motion.form 
    initial={{
        x:"-100vw",
        opacity:0,
    }}
    animate={{
        x:0,
        opacity:1,
    }}
    transition={{delay:0.3}}
    >
        <h2>Contact Us</h2>
        <input name='Name' type='text' placeholder='Name'/>
        <input name='Email' type="email" placeholder='Email' />
        <textarea placeholder='Message...' cols="30" rows="10"></textarea>

        <button type="submit">Send</button>
    </motion.form>

    <motion.div className='FormBorder' 
    initial={{
        x:"100vw",
        opacity:0,
    }}
    animate={{
        x:0,
        opacity:1,
    }}
    transition={{delay:0.3}}
    >
        <motion.div
        initial={{
            x:"50%",
            y:"-100vh",
            opacity:0,
        }}
        animate={{
            x:"50%",
            y:"-50%",
            opacity:1,
        }}
        transition={{delay:0.8}}
        >
            <img src={Burger2} alt="Burger" />
        </motion.div>
    </motion.div>

    </section>
    </div>
  )
}

export default Contact;