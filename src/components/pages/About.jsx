import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"
import { Link } from "@mui/material"


export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <Link href="https://www.linkedin.com/in/julialauries/" style={{ textDecoration: 'none' }}>
              <button  data-aos='fade-up-right'>
                Linkedin
              </button>
            </Link>


              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
