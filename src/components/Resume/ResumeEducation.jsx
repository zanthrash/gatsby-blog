import React from 'react'

export const ResumeEducation = props => {
  const { education } = props
  return (
    <section id="education" className="row">
      <aside>
        <h3>Education</h3>
      </aside>
      <div className="details">
        <div className="column">
          {education.map(school => (
            <div key={school.institution}>
              <h4 className="strike-through">
                <span>{school.institution}</span>
                <span className="date">
                  {school.startDate} — {school.endDate}
                </span>
              </h4>
              <div className="area">{school.area}</div>
              <div className="studyType">{school.studyType}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResumeEducation
