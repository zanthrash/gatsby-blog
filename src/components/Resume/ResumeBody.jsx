import React from 'react'
import { ResumeContact } from './ResumeContact'
import { ResumeAbout } from './ResumeAbout'
import { ResumeProfiles } from './ResumeProfiles'
import { ResumeWork } from './ResumeWork'
import { ResumeEducation } from './ResumeEducation'
import { ResumeSkills } from './ResumeSkills'

export const ResumeBody = props => {
  return (
    <div id="content" className="resume container">
      <ResumeAbout {...props.basics} />
      <ResumeContact {...props.basics} />
      <ResumeProfiles {...props.basics} />
      <ResumeWork work={props.work} />
      <ResumeEducation education={props.education} />
      <ResumeSkills skills={props.skills} />
    </div>
  )
}

export default ResumeBody
