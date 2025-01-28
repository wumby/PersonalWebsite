import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import { MovingTestomonials } from '@/components/MovingTestimonials';

const Testimonials = () => {

  const testimonialsRight = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
      name: "Syam Alakula",
      title: "Backend Engineer at USFWS",
      image: '/syam.png',
      linkedIn: 'https://www.linkedin.com/in/syam-alakula/'
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
      name: "Samuel Valencia",
      title: "Full-Stack Engineer at Cognizant",
      image: '/samuel.jpg',
      linkedIn: 'https://www.linkedin.com/in/samuel-valencia/'
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
      name: "Marcus Longwell",
      title: "Tech Lead at USFWS",
      image: '/marcus.jpg',
      linkedIn: 'https://www.linkedin.com/in/marcuslongwell/'
    },
  ];
  const testimonialsLeft = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
      name: "Mike Korth",
      title: "Front-End Engineer at USFWS",
      image: '/mike.jpg',
      linkedIn: 'https://www.linkedin.com/in/mike-korth/'
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
      name: "Todd Gindlesperger",
      title: "Program Manager at Mindbank",
      image: '/next.svg',
      linkedIn: 'https://www.linkedin.com/in/todd-gindlesperger-b38b1910/'
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project.",
      name: "Gnanam Rajamanickam",
      title: "Tech Lead at Cognizant",
      image: '/gnanam.jpg',
      linkedIn: 'https://www.linkedin.com/in/gnanam-rajamanickam-13794188/'
    },
  ];
  return (
    <div className='w-full h-fit'>
      <SectionHeader text1='Team' text2='Testimonials' />
      <div className='flex flex-col justify-evenly h-fit py-5'>
        <div className="flex flex-col items-center max-lg:mt-10 mt-10">
          <div
            className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
          >
            <MovingTestomonials
              items={testimonialsRight}
              direction="right"
              speed='normal'
            />
          </div>
        </div>
        <div className="flex flex-col items-center max-lg:mt-10">
          <div
            className="rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
          >
            <MovingTestomonials
              items={testimonialsLeft}
              direction="left"
              speed='normal'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials