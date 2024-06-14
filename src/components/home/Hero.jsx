import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import { Link } from "@mui/material"


export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
  {val.name}
</h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <Link href="https://www.linkedin.com/in/julialauries/" style={{ textDecoration: 'none' }}>
              <button className='primaryBtn' data-aos='fade-up-right'>
                Linkedin
              </button>
            </Link>
          </div>
        ))}
      </section>
    </>
  )
}
