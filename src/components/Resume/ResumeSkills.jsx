import React from 'react'

export const ResumeSkills = props => {
  const { skills } = props
  return (
    <section id="skills" className="row">
      <aside className="col-sm-3">
        <h3>Skills</h3>
      </aside>
      <div className="details">
        <div className="wrapped-row">
          {skills.map(skill => (
            <div key={skill.name} id="skill-section">
              <div className="name">
                <h4>{skill.name}</h4>
              </div>

              <ul className="keywords">
                {skill.keywords.map(keyword => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResumeSkills
