import React from 'react'
import  ProjectCard  from './ui/ProjectCard'
import SectionHeader from './SectionHeader'

const Projects = () => {
  return (
     <div className="w-full">
          <SectionHeader text1='Recent' text2='Projects'/>
          <ProjectCard  />
        </div>
  )
}

export default Projects