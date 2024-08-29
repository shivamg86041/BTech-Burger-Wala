import React from 'react'
import {AiFillInstagram, AiFillYoutube, AiFillGithub} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>

        <div>
            <h2>B.TECH Burger Wala</h2>

            <p>We are trying to give you the best taste possible.</p>
            <br />

            <em>We give attention to genuine feedback.</em>


            <strong>All rights reserved @btechburgerwala</strong>

        </div>

        <aside>
            <h4>Follow Us</h4>
            <a href="http://youtube.com"><AiFillYoutube/></a>
            <a href="http://instagram.com"><AiFillInstagram/></a>
            <a href="http://github.com"><AiFillGithub/></a>
        </aside>

    </footer>
  )
}

export default Footer