import React from 'react'

export const ResumeContact = props => {
  const { email, phone } = props
  return (
    <section id="contact" className="row">
      <aside>
        <h3>Contact</h3>
      </aside>
      <div className="details">
        <div className="row">
          <div className="block">
            <strong>Email</strong>
            <div className="email">{email}</div>
          </div>
          <div className="block">
            <strong>Phone</strong>
            <div className="phone">{phone}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ResumeContact
