import React, { useState, useEffect } from 'react'
import { motion, transform } from 'framer-motion'
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
import ig from '../img/ig.png'
import me2 from '../img/me.jpg'
import opam from '../img/opam.jpeg'
import loc from '../img/loc.png'
import phone from '../img/phone.png'
import gmail from '../img/gmail.png'
import linkedin from '../img/linkedin.png'

export default function Main() {
  
  useEffect(() => {
    Aos.init({duration: 700})
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
          y: mousePos.y - 7
        },
        text: {
          height: 50,
          width: 50,
          x: mousePos.x - 25,
          y: mousePos.y - 25,
          backgroundColor: 'white'
        }
      }

      const variant = {
        default: {
          x: mousePos.x - 2,
          y: mousePos.y - 2
        },
        text: {
          height: 0,
          width: 0,
          x: mousePos.x,
          y: mousePos.y,
          backgroundColor: 'white',
        }
      }
    
      const textEnter = () => setCursorVar('text')
      const textLeave = () => setCursorVar('default')

  return (
    <>
        <div className='h-auto lg:h-screen
                        flex flex-col stack__card
                        bg-neutral-800 text-white font-extralight font-custom'>
            <div data-aos='fade-in' className='flex justify-between 
                            mt-3 md:mt-2 lg:mt-5
                            p-3 md:p-4 xl:p-9
                            text-sm lg:text-base'>
              <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://sickopam.github.io/fin/' className='pl-3 lg:pl-4 btn full-name'></a>
              <h1 className='pr-3 lg:pr-4'>© 2022</h1>
            </div>
            <div className='mt-24 md:mt-32  xl:mt-44
                            w-5/6 sm:w-1/2 md:w-1/3 xl:w-1/3
                            pl-24 lg:pl-36 xl:pl-52'>
              <h1 data-aos='fade-in' className='text-xl md:text-2xl'>A computer science undergraduate {/*, cyclist, */}and minimalist; that's it </h1>
              <div className='md:text-base xl:text-tiny
                              mt-4 md:mt-6'>
                <p data-aos='fade-in' className=''>Hello, I'm Opam, a second year university student at Universitas Gadjah Mada.</p>
                <p data-aos='fade-in' className='mt-4 md:mt-6'>Amongst the broad field of computer science, front–end engineering and web development are my main focus.</p>
              </div>
            </div>
            <div data-aos='fade-in' className='flex justify-between
                            text-xs md:text-sm 
                            h-1/2
                            p-3 md:p-6 lg:p-9
                            mt-64 md:mt-48 lg:mt-12 xl:mt-24
                            mb-3 lg:mb-2
                            '>
              <div className='grid content-end w-1/3'>
                <h1 className='md:w-11/12 pl-3 lg:pl-4 mr-42 xl:mr-96'>Sieg Heil</h1>
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
                        hidden md:block rounded-t-3xl
                        flex flex-col stack__card
                        bg-white text-black font-extralight font-custom'>
          <div className='p-3 md:p-6 lg:p-9
                          text-base'>
              <div data-aos='fade-in' className='lg:inline-flex mt-3 md:mt-4 lg:mt-5
                                                  pl-3 lg:pl-4 pr-3 lg:pr-4'>
                  <div className='inline-flex'>
                    <h1 className='md:text-xxs xl:text-base wbg'>About</h1>
                    {/* w-2/3 for me2 */}
                    <div className='text-sm md:text-base lg:text-xl xl:text-2xl
                                    w-2/3 md:w-3/4 lg:w-3/5
                                    grid place-items-start
                                    text-justify
                                    ml-12 md:ml-16 lg:ml-24'>
                      {/* no mr for me2 */}
                      <p className='mr-36 wbg'>My first semester as a computer science student can be summed up in a few words: lack of self-learning. During my second semester, though, I have given myself a slap in the face and began learning the basics of web design and development, mainly using the well known framework Reactjs.</p>
                      {/* <p data-aos='fade-in' className='mt-5 wbg'>Though it took me some time to explore and find what truly intrigues me about computer science, I have finally decided to devote my time deep diving into the world of web design and development, as well as front-end engineering.</p> */}
                    </div>
                    <div className='grid justify-items-end w-2/3 md:w-3/4 lg:w-2/5 '>
                      {/* lg:w-1/2, width on div below, no pl & mr-24, no scale for me2 */}
                      <div className='mr-20 pl-9 scale-95'>
                        <motion.div onMouseEnter={textEnter} onMouseLeave={textLeave}  whileHover={{scale:1.05}} whileTap={{scale:0.95}}>
                          <img
                          data-aos='fade-in' 
                          className='rounded-xl drop-shadow-xl' src={opam}></img>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='md:inline-flex lg:inline-block
                            p-3 md:p-6 lg:p-0
                            '>
              <div data-aos='fade-in' className='lg:inline-flex
                              pt-0 lg:pt-16 xl:pt-8
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
                              px-0 lg:px-32 xl:px-36
                              lg:mt-5
                              hidden md:block'>
                  <div data-aos='fade-in' className='lg:inline-flex gap-16 text-base lg:mt-4 h-fit md:text-sm xl:text-base'>
                    <p className='mb-24 w-3/4 xl:w-11/12 wbg'>Personally, simplicity has always been a priority to my designs. Not only is it easier for a beginner like me to implement simple designs in my projects, but it also gives a satisfying aesthetic that cannot be simply described.</p>
                    <p className='mb-24 w-3/4 xl:w-11/12 wbg'>My preferred style took a huge inspiration from <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://www.apple.com/' target='_blank' className='wbg underlink2 afterul'>Apple™</a> and <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://www.off---white.com/' target='_blank' className='wbg underlink2 afterul'>Off-White™</a>, who are well known for their simple aesthetic. The overall design and UI/UX were heavily influenced by an outstanding personal portfolio by <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://www.martinbriceno.com/' target='_blank' className='wbg underlink2 afterul'>Martin Briceño™</a>.</p>
                    <p className='w-3/4 xl:w-11/12 wbg'>What I aspire to do in college is to obtain and hone my programming skills. As a person considerably new to computer science, I ought to practice at least twice harder than those who has familiarized themselves in this field.</p>
                  </div>
              </div>
            </div>
        </div>
        <div className='h-auto md:h-screen
                        hidden md:block rounded-t-3xl
                        flex flex-col stack__card
                        bg-neutral-800 text-white font-extralight font-custom'>
            <div className='p-3 md:p-6 lg:p-9'>
              <div className='pt-3 md:pt-4 lg:pt-5'>
                <div data-aos='fade-in' className='inline-flex pl-3 lg:pl-4'>
                  <div className=''>
                    <h1 className='mr-16 lg:mr-48 xl:mr-24'>Projects</h1>
                    <p data-aos='fade-in' className='w-80 lg:w-96 pt-20 text-lg xl:text-xl'>I haven't done alot of projects as of now, but I am surely gonna start piling my schedule with them. The first ever project I created was a BMI calculator for an open recruitment in my campus.</p>
                  </div>
                  <div className='md:ml-28 lg:ml-24 xl:ml-40'>
                    <h1 className=''>Tools</h1>
                    <p data-aos='fade-in' className='w-80 lg:w-96 pt-20 text-lg xl:text-xl'>I have experimented with alot of tools and frameworks and came across both simple and complex ones, safe to say that these are the ones that I'm mostly going to utilize in my future works.</p>
                  </div>
                </div>
              </div>
            <div data-aos='fade-in' className='inline-flex pt-20 pl-4 lg:pl-4'>
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
                <div data-aos='fade-in' onMouseEnter={textEnter} onMouseLeave={textLeave} className='box grid place-items-center'>
                  <img src={Tw}></img>
                </div>
              </Tilt>
              <Tilt scale={1.05} perspective={500}>
                <div data-aos='fade-in' onMouseEnter={textEnter} onMouseLeave={textLeave} className='box grid place-items-center'>
                  <img className='h-2/3 w-2/3' src={h5}></img>
                </div>
              </Tilt>
              <Tilt scale={1.05} perspective={500}>
                <div data-aos='fade-in' onMouseEnter={textEnter} onMouseLeave={textLeave} className='box grid place-items-center'>
                  <img className='h-5/6 w-5/6' src={c3}></img>
                </div>
              </Tilt>
            </div>
            </div>
            <div data-aos='fade-in' className='pl-4 w-96 flex justify-center pt-4'>
              <h1>Stepping stone project</h1>
            </div>
          </div>
        </div>
        <div className='h-auto md:h-screen stack__card rounded-t-3xl
                        bg-white hidden md:block
                        text-black font-custom font-extralight'>
          <div className='p-3 md:p-6 lg:p-9'>
            <div className='pt-3 pl-3 lg:pl-4 pr-3 lg:pr-4'>
              <div className='inline-flex text-2xl xl:text-3xl'>
                <h1 data-aos='fade-in' className='wbg'>
                  brief résumé –– 
                </h1>
                <a data-aos='fade-in' onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://www.linkedin.com/in/naufal-abiyyu-66a882217/' target='_blank' className='wbg btn2 fn2'></a>
              </div>
              <div className='flex justify-between pt-12'>
                <div data-aos='fade-in' className='loval center text-sm'>
                  <h1 className='wbg'>education</h1>
                </div>
                <div className='w-1/5 text-base lg:text-lg ml-12 xl:ml-48'>
                  <div className='h-8 grid items-center'>
                    <h1 data-aos='fade-in' className='wbg'>2018 –– 2020</h1>
                  </div>
                  <div data-aos='fade-in' className='mt-3 pr-5'>
                    <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://sisruwais.sabis.net' target='_blank' className='underlink2 wbg'>sabis<a className='text-xs'>®</a> international school – abu dhabi, uae</a>
                    <p data-aos='fade-in' className='mt-3 wbg'>final grade: 95/100</p>
                  </div>
                </div>
                <div className='w-1/5 text-base lg:text-lg'>
                  <div className='h-8 grid items-center'>
                    <h1 data-aos='fade-in' className='wbg'>2021 –– present</h1>
                  </div>
                  <div data-aos='fade-in' className='mt-3'>
                    <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://www.ugm.ac.id' target='_blank' className='underlink2 wbg'>gadjah mada university – yogyakarta, indonesia</a>
                    <p data-aos='fade-in' className='mt-3 wbg'>current grade: 3.59/4.00</p>
                  </div>
                </div>
                  <div></div>
              </div>
              <div className='line mt-8 xl:mt-12'></div>
              <div className='flex justify-between pt-8 xl:pt-12'>
                <div data-aos='fade-in' className='loval center text-sm'>
                  <h1 className='wbg'>experience</h1>
                </div>
                <div className='w-1/5 text-base lg:text-lg ml-12 xl:ml-48'>
                  <div className='h-8 grid items-center'>
                    <h1 data-aos='fade-in' className='wbg'>2021 –– present</h1>
                  </div>
                  <div data-aos='fade-in' className='mt-3'>
                    <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://cs.ugm.ac.id' target='_blank' className='wbg underlink2'>computer science student association [himakom]</a>
                    <p data-aos='fade-in' className='mt-3 wbg'>talent & interest division</p>
                  </div>
                </div>
                <div className='w-1/5 text-base lg:text-lg'>
                  <div className='h-8 grid items-center'>
                    <h1 data-aos='fade-in' className='wbg'>2022 –– present</h1>
                  </div>
                  <div data-aos='fade-in' className='mt-3'>
                    <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://idx.co.id' target='_blank' className='wbg underlink2'>intern at indonesian stock exchange company [idx]</a>
                    <p data-aos='fade-in' className='mt-3 wbg'>information technology developer</p>
                  </div>
                </div>
                  <div></div>
              </div>
              <div className='line mt-8 xl:mt-12'></div>
              <div className='flex justify-between pt-8 xl:pt-12'>
                <div data-aos='fade-in' className='loval center text-sm'>
                  <h1 className='wbg'>skills</h1>
                </div>
                <div className='w-1/5 text-base lg:text-lg ml-12 xl:ml-48'>
                  <div className='h-8 grid items-center'>
                    <h1 data-aos='fade-in' className='wbg'>programming ––</h1>
                  </div>
                  <div data-aos='fade-in' className='mt-3 text-justify'>
                    <h1 className='wbg'>c++, java, javascript, html, css, react.js, framer–motion, algorithm and data structure, digital systems</h1>
                  </div>
                </div>
                <div className='w-1/5 text-base lg:text-lg'>
                  <div className='h-8 grid items-center'>
                    <h1 data-aos='fade-in' className='wbg'>logical ––</h1>
                  </div>
                  <div data-aos='fade-in' className='mt-3'>
                    <h1 className='wbg'>problem–solving, linear algebra, discrete mathematics, statistics, calculus</h1>
                  </div>
                </div>
                  <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden md:block rounded-t-3xl
                        flex flex-col card
                        bg-neutral-800 text-lg
                        text-white font-extralight font-custom'>
          <div className='p-3 md:p-6 lg:p-9'>
            <div className='pt-3 pl-3 lg:pl-4 pr-3 lg:pr-4'>
              <h1 data-aos='fade-in-out' className='text-5xl'>inbox</h1>
              <div className='mt-12'>
                <div data-aos='fade-in' className='inline-flex'>
                  <div className='w-72 inline-flex h-12'>
                    <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                      <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://www.instagram.com/naufol/' target='_blank'>
                        <img className='w-12' src={ig}></img>
                      </a>
                    </motion.div>
                    <a onMouseEnter={textEnter} onMouseLeave={textLeave} className='grid items-center ml-12' href='https://www.instagram.com/naufol/' target='_blank'>
                      <h1 className='underlink'>@naufol</h1>
                    </a>
                  </div>
                  <div className='ml-64'>
                    <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                      <img className='w-12 h-12' src={loc}></img>
                    </motion.div>
                  </div>
                  <div className='grid items-center pl-12'>
                    {/* <h1>S 7°45'28.58</h1>
                    <h1>E 110°22'29.63</h1> */}
                    <h1>S 7°45'XX.XX</h1>
                    <h1>E 110°22'XX.XX</h1>
                  </div>
                </div>
              </div>
              <div className='mt-8'>
                <div data-aos='fade-in' className='inline-flex h-12'>
                  <div className='inline-flex w-72 h-12'>
                    <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                      <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://www.linkedin.com/in/naufal-abiyyu-66a882217/' target='_blank'>
                        <img className='w-12' src={linkedin}></img>
                      </a>
                    </motion.div>
                    <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='https://www.linkedin.com/in/naufal-abiyyu-66a882217/' target='_blank'
                    className='grid items-center ml-12'>
                      <h1 className='underlink'>naufal abiyyu</h1>
                    </a>
                  </div>
                  <div className='ml-64'>
                    <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                        <img className='w-12 scale-90' src={phone}></img>
                    </motion.div>
                  </div>
                  <h1 className='grid items-center pl-12'>821 2787 XXXX</h1>
                </div>
              </div>
              <div data-aos='fade-in' className='inline-flex w-72 mt-8'>
                <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                  <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='mailto:naubiyyu@gmail.com' target='_blank'>
                    <img className='w-12 scale-125' src={gmail}></img>
                  </a>
                </motion.div>
                <a onMouseEnter={textEnter} onMouseLeave={textLeave} href='mailto:naubiyyu@gmail.com' target='_blank'
                className='ml-12 grid place-items-center'>
                  <h1 className='underlink'>naubiyyu@gmail.com</h1>
                </a>
              </div>
              {/* <Tilt scale={1.1} tiltEnable={false}>
                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='lovalw center text-xl'>
                  <h1 className='btn3 fn3'></h1>
                </div>
              </Tilt> */}
            </div>
          </div>
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
