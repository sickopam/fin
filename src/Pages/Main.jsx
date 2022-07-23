import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import Aos from 'aos';
import 'aos/dist/aos.css'


import Github from '../img/Github.png'
import Reax from '../img/Reax.png'
import Tw from '../img/Tw.png'
import Fm from '../img/Fm.png'
import Js from '../img/Js.png'
import h5 from '../img/h5.png'
import c3 from '../img/c3.png'

export default function Main() {

  useEffect(() => {
    Aos.init({duration: 500})
  }, [])

    const [mousePos, setPos] = useState({
        x: 0,
        y: 0
      });
      const [cursorVar, setCursorVar] = useState('default')
    
      useEffect(() => {
        const mouseMove = e => {
          setPos({
            x: e.clientX,
            y: e.clientY
          })
        }
    
        window.addEventListener('mousemove', mouseMove)
    
        return () => {
          window.removeEventListener('mousemove', mouseMove)
        }
      }, []);
    
      const variants = {
        default: {
          x: mousePos.x - 7,
          y: mousePos.y - 8
        },
        text: {
          height: 50,
          width: 50,
          x: mousePos.x - 25,
          y: mousePos.y - 26,
          backgroundColor: 'white'
        }
      }

      const variant = {
        default: {
          x: mousePos.x - 2,
          y: mousePos.y - 3
        },
        text: {
          height: 4,
          width: 4,
          x: mousePos.x - 2,
          y: mousePos.y - 3,
          backgroundColor: 'black'
        }
      }
    
      const textEnter = () => setCursorVar('text')
      const textLeave = () => setCursorVar('default')

  return (
    <>
        <div className='h-auto md:h-screen
                        flex flex-col 
                        bg-neutral-900 text-white font-extralight font-custom'>
            <div data-aos='fade-up' className='flex justify-between 
                            mt-3 md:mt-4 lg:mt-5
                            p-3 md:p-6 lg:p-9
                            text-base'>
              <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://sickopam.github.io/fin/' className='pl-3 lg:pl-4 btn full-name'></a>
              <h1 className='pr-3 lg:pr-4'>© 2021</h1>
            </div>
            <div className='mt-52 md:mt-28 xl:mt-44
                            w-5/6 sm:w-1/2 md:w-5/12 xl:w-1/3
                            pl-24 lg:pl-36 xl:pl-52'>
              <h1 data-aos='fade-up' className='text-2xl md:text-3xl lg:text-2xl'>A computer science undergraduate, cyclist, and minimalist; that's it </h1>
              <div className='text-lg md:text-sm 
                              mt-4 md:mt-6'>
                <p data-aos='fade-up' className=''>Hello, I'm Opam, a second year university student at Universitas Gadjah Mada.</p>
                <p data-aos='fade-up' className='mt-4 md:mt-6'>Amongst the broad field of computer science, I have chosen front-end engineering and web development as a main focus.</p>
              </div>
            </div>
            <div data-aos='fade-up' className='flex justify-between
                            text-xs md:text-sm 
                            h-1/2
                            p-3 md:p-6 lg:p-9
                            mt-64 md:mt-48 lg:mt-24
                            mb-3 lg:mb-2
                            '>
              <div className='grid content-end w-1/3'>
                <h1 className='md:w-11/12 pl-3 lg:pl-4 mr-42 xl:mr-96'>Made by</h1>
              </div>
              <div className='flex justify-between items-end
                              w-fit gap-2 md:gap-5
                              pr-3 lg:pr-4
                              '>
                  <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='mailto:naufal.abiyyu@mail.ugm.ac.id' target='_blank' className='underlink afterulw'>Email</a>
                  <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://www.linkedin.com/in/naufal-abiyyu-66a882217/' target='_blank' className='underlink afterulw'>LinkedIn</a>
                  <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://www.instagram.com/naufol/' target='_blank' className='underlink afterulw'>Instagram</a>
              </div>
            </div>
        </div>
        <div className='h-auto lg:h-screen
                        hidden md:block 
                        flex flex-col 
                        bg-white text-black font-extralight font-custom'>
          <div className='p-3 md:p-6 lg:p-9
                          text-base'>
              <div data-aos='fade-up' className='lg:inline-flex mt-3 md:mt-4 lg:mt-5'>
                  <div className='inline-flex'>
                    <h1 className='pl-3 lg:pl-4 md:text-xxs xl:text-sm wbg'>About</h1>
                    <div className='text-sm md:text-base xl:text-lg
                                    w-2/3 md:w-3/4 lg:w-2/3
                                    grid place-items-start
                                    text-justify
                                    ml-12 md:ml-16 lg:ml-24'>
                      <p className='wbg'>My first semester as a computer science student can be summed up in a few words: lack of self-learning. During my second semester, though, I have given myself a slap in the face and began learning the basics of web design and development, mainly using the well known framework Reactjs.</p>
                      <p data-aos='fade-up' className='mt-5 wbg'>Though it took me some time to explore and find what truly intrigues me about computer science, I have finally decided to devote my time deep diving into the world of web design and development, as well as front-end engineering.</p>
                    </div>
                  </div>
                  <div className='inline-flex
                                  mt-10 md:mt-16 lg:mt-0'>
                    <h1 className='pl-0 md:pl-3 lg:pl-4 md:text-xxs xl:text-sm wbg'>Experience</h1>
                    <div className='text-sm md:text-base xl:text-lg
                                    w-2/3 md:w-3/4 lg:w-4/5
                                    grid place-items-start
                                    text-justify
                                    ml-8 md:ml-8 lg:ml-24
                                    '>
                      <p className='wbg'>Prior to college, I hadn't had much of a knowledge in programming. Though I took computer science classes during high school, I wasn't that good at it. Graduated high school with a 92 for computer science; book smart, but no real experience and knowledge for coding.</p>
                      <p data-aos='fade-up' className='mt-5 wbg'>I could confidently say that I have learned more about computer science in my first month of college than my two years of learning it in high school. In my first semester, I managed to get an A in C++ programming course. Presently, I'm doing pretty well with a current GPA of 3.59.</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className='md:inline-flex lg:inline-block
                            p-3 md:p-6 lg:p-0
                            '>
              <div data-aos='fade-up' className='lg:inline-flex
                              pt-0 lg:pt-20
                              lg:justify-around
                              w-1/2 lg:w-screen
                              md:text-base xl:text-lg
                              pl-4 lg:px-44 xl:px-52'>
                <h1 className='wbg'>Design</h1>
                <h1 className='md:py-36 lg:py-0 lg:px-44 xl:px-68 wbg'>Inspiration</h1>
                <h1 className='wbg mr--3 lg:mr-3'>Goal</h1>
              </div>
              <div className='lg:inline-flex
                              text-justify
                              text-sm
                              px-0 lg:px-32 xl:px-36
                              lg:mt-5
                              hidden md:block'>
                  <div data-aos='fade-up' className='lg:inline-flex gap-16 text-base lg:mt-4 h-fit md:text-sm xl:text-base'>
                    <p className='mb-24 w-3/4 xl:w-11/12 wbg'>Personally, simplicity has always been a priority to my designs. Not only is it easier for a beginner like me to implement simple designs in my projects, but it also gives a satisfying aesthetic that cannot be simply described.</p>
                    <p className='mb-24 w-3/4 xl:w-11/12 wbg'>My preferred style took a huge inspiration from Apple™ and Off-White™, who are well known for their simple aesthetic. The overall design and UI/UX were heavily influenced by an outstanding personal portfolio by <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://www.martinbriceno.com/' target='_blank' className='wbg underlink2 afterul'>Martin Briceño™</a>.</p>
                    <p className='w-3/4 xl:w-11/12 wbg'>What I aspire to do in college is to obtain and hone my programming skills. As a person considerably new to computer science, I ought to practice at least twice harder than those who has familiarized themselves in this field.</p>
                  </div>
              </div>
            </div>
        </div>
        <div className='h-auto md:h-screen
                        hidden md:block
                        flex flex-col
                        bg-neutral-900 text-white font-extralight font-custom'>
            <div className='p-3 md:p-6 lg:p-9'>
              <div className='mt-3 md:mt-4 lg:mt-5'>
                <div data-aos='fade-up' className='inline-flex pl-3 lg:pl-4'>
                  <div className=''>
                    <h1 className='mr-16 lg:mr-48 xl:mr-24'>Projects</h1>
                    <p data-aos='fade-up' className='w-80 lg:w-96 mt-24 text-lg'>I haven't done alot of projects as of now, but I am surely gonna start piling my schedule with them. The first ever project I created was a BMI calculator for an open recruitment in my campus.</p>
                  </div>
                  <div className='md:ml-28 lg:ml-24 xl:ml-40'>
                    <h1 className=''>Tools</h1>
                    <p data-aos='fade-up' className='w-80 lg:w-96 mt-24 text-lg'>I haven't done alot of projects as of now, but I am surely gonna start piling my schedule with them. The first ever project I created was a BMI calculator for an open recruitment in my campus.</p>
                  </div>
                </div>
              </div>
            <div data-aos='fade-up' className='inline-flex pt-24 pl-4 lg:pl-4'>
              <Tilt scale={1.02} perspective={500}>
                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='border grid place-items-center'>
                  <a href='https://github.com/sickopam/calcbmi' target='_blank'>
                      <img className='h-36' src={Github}></img>
                  </a>
                </div>
              </Tilt>
              <div className='grid grid-cols-3 gap-4 md:ml-12 lg:ml-24 xl:ml-40'>
              <Tilt scale={1.05} perspective={500}>
                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='box grid place-items-center'>
                  <img className='h-5/6 w-5/6' src={Reax}></img>
                </div>
              </Tilt>
              <Tilt scale={1.05} perspective={500}>
                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='box grid place-items-center'>
                  <img className='h-3/4 w-3/4' src={Js}></img>
                </div>
              </Tilt>
              <Tilt scale={1.05} perspective={500}>
                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='box grid place-items-center'>
                  <img className='h-3/5 w-3/5' src={Fm}></img>
                </div>
              </Tilt>
              <Tilt scale={1.05} perspective={500}>
                <div data-aos='fade-up' onMouseEnter={textEnter} onMouseLeave={textLeave} className='box grid place-items-center'>
                  <img src={Tw}></img>
                </div>
              </Tilt>
              <Tilt scale={1.05} perspective={500}>
                <div data-aos='fade-up' onMouseEnter={textEnter} onMouseLeave={textLeave} className='box grid place-items-center'>
                  <img className='h-2/3 w-2/3' src={h5}></img>
                </div>
              </Tilt>
              <Tilt scale={1.05} perspective={500}>
                <div data-aos='fade-up' onMouseEnter={textEnter} onMouseLeave={textLeave} className='box grid place-items-center'>
                  <img className='h-5/6 w-5/6' src={c3}></img>
                </div>
              </Tilt>
              </div>
              </div>
              <div data-aos='fade-up' className='pl-4 w-96 flex justify-center mt-4'>
                <h1>Stepping stone project</h1>
              </div>
            </div>
        </div>
        {/* <div className='h-screen center
                        bg-white text-current 
                        flex flex-col
                        hidden md:block'>
          <Tilt glareEnable={true} glarePosition='all' glareColor='black' glareMaxOpacity={0.06} className='w-fit inline-block' scale={1.5} perspective={700}>
            <div data-aos='fade-up' className='borderw font-bc'>
                  <div className='flex justify-between text-xxs p-3 mt-2 font-light '>
                    <h1 className=''>821 02787 7676</h1>
                    <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://www.ugm.ac.id' target='_blank' className='text-center w-1/3 uppercase'>Gadjah Mada</a>
                  </div>
                  <div className='inline-flex w-full text-base flex justify-center mt-6'>
                    <h1 className='ont-light'>N</h1>
                    <h1 className='text-xxs mt-1.5'>AUFAL</h1>
                    <h1 className='ml-2 font-light'>ABIYYU</h1>
                  </div>
                  <div className='font-light flex justify-center uppercase font-light'>
                    <h1 className='text-sm'>c</h1>
                    <h2 className='text-xxs mt-1 mr-2'>omputer</h2>
                    <h1 className='text-sm'>S</h1>
                    <h2 className='text-xxs mt-1 mr-2'>cience</h2>
                    <h1 className='text-sm'>u</h1>
                    <h2 className='text-xxs mt-1'>ndergraduate</h2>
                  </div>
                  <div className='text-xxs text-center mt-12 flex justify-center uppercase font-light'>
                    <h1>Yogyakarta 55281 Fax. 0274 513339</h1>
                  </div>
              </div>
          </Tilt>
        </div> */}
        <div className='h-screen bg-white text-black'>
          
        </div>
        <motion.div
          className='cursor'
          variants={variants}
          animate={cursorVar}
        />
        <motion.div
          className='cursor2'
          variants={variant}
          animate={cursorVar} />
    </>
  )
}
