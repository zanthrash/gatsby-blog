import React from 'react'

export const ResumeWork = props => {
  const { work } = props
  return (
    <section id="work" className="row">
      <aside>
        <h3>Work</h3>
      </aside>
      <div className="details">
        <div className="column">
          {work.map(job => (
            <div key={`${job.company}-${job.startDate}`}>
              <h4 className="strike-through">
                <span>{job.company}</span>
                <span className="date">
                  {job.startDate} — {job.endDate}
                </span>
              </h4>
              <div className="website pull-right">
                <a href={job.website}>{job.website}</a>
              </div>
              <div className="position">{job.position}</div>
              <div className="summary">
                <p>{job.summary}</p>
              </div>
              {job.highlights && (
                <React.Fragment>
                  <h4>Highlights</h4>
                  <ul className="highlights">
                    {job.highlights.map(highlight => (
                      <li className="bullet" key={highlight}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResumeWork
