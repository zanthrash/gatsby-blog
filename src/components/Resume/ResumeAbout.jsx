import React from 'react'

export const ResumeAbout = props => {
  const { summary } = props
  return (
    <section id="about" className="row">
      <aside>
        <h3>About</h3>
      </aside>
      <div className="details">
        <div className="row">
          <div>{summary}</div>
        </div>
      </div>
    </section>
  )
}

export default ResumeAbout
