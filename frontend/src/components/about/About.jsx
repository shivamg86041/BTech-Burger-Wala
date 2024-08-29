import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from "react-icons/ri"
import me from "../../assets/founder.jpg"

const About = () => {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>

            <article>
                <h4>B.TECH Burger Wala</h4>
                <p>Our secret sauce solves all your burger algorithms.</p>

                <p>Explore the various types of food and burgers. Click Below to see the menu</p>

                <Link to={'/'}><RiFindReplaceLine/></Link>
            </article>

            <div>
                <h2>Founder</h2>
                <article>

                    <div>
                        <img src={me} alt="founder" />
                        <h3>Shivam Gupta</h3>
                    </div>

                    <p>Hey Everyone! I'm Shivam Gupta, the visionary founder behind BTECH Burger Wala. <br/>
          With a passion for flavor and a drive for excellence, I embarked on a mission to redefine the burger experience. At BTECH Burger Wala, our aim is simple yet ambitious: to craft the most mouthwatering burger on the planet.</p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About