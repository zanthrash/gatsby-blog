import React from 'react'

export const ResumeProfiles = props => {
  const { profiles } = props
  return (
    <section id="profiles" className="row">
      <aside>
        <h3>Profiles</h3>
      </aside>
      <div className="details">
        <div className="row">
          {profiles.map(profile => (
            <div className="block" key={profile.network}>
              <strong className="network">{profile.network}</strong>
              <div className="username">
                <div className="url">
                  <a href={profile.url}>{profile.username}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ResumeProfiles
