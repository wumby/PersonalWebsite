import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import ProjectCard from '@/components/ProjectCard'

const Projects = () => {
  return (
     <div className="w-full">
          <SectionHeader text1='Recent' text2='Projects'/>
          <ProjectCard  />
        </div>
  )
}

export default Projects