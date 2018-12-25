import React, { Fragment } from 'react'
import { ResumeHeader } from './ResumeHeader'

import './style.scss'

import { ResumeBody } from './ResumeBody'

export const Resume = props => {
  const { data } = props
  return (
    <Fragment>
      <ResumeHeader />
      <ResumeBody
        basics={data.basics}
        work={data.work}
        education={data.education}
        skills={data.skills}
      />
    </Fragment>
  )
}

export default Resume
