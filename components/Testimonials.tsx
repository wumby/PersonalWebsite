import React from 'react'
import SectionHeader from './SectionHeader'
import { MovingTestomonials } from './ui/MovingTestimonials';

const Testimonials = () => {

  const testimonialsRight = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Syam Alakula",
      title: "Backend Engineer at USFWS",
      image: '/next.svg'
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Samuel Valencia",
      title: "Full-Stack Engineer at Cognizant",
      image: '/next.svg'
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Marcus Longwell",
      title: "Tech Lead at USFWS",
      image: '/next.svg'
    },
  ];
  const testimonialsLeft = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Mike Korth",
      title: "Front-End Engineer at USFWS",
      image: '/next.svg'
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Todd Gindlesperger",
      title: "Project Manager at Mindbank",
      image: '/next.svg'
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Stephen Seaton",
      title: "Front-End Engineer at Cognizant",
      image: '/next.svg'
    },
  ];
  return (
    <div className='w-full'>
      <SectionHeader text1='Team' text2='Testimonials' />
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
  )
}

export default Testimonials