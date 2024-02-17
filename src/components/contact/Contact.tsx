import React from 'react'

const Contact = () => {
  return (
    <div >
    <div className="flex flex-col items-center space-y-1.5">
      <div className="mx-0">Contact Us</div>
      <div className="mx-0">Get in touch with our team</div>
    </div>
    <div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="first-name">First name</label>
            <input id="first-name" placeholder="First name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="last-name">Last name</label>
            <input id="last-name" placeholder="Last name" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Email" type="email" />
        </div>
        <div className="space-y-2">
          <label htmlFor="message">Message</label>
          <textarea className="min-h-[100px]" id="message" placeholder="Your message" />
        </div>
      </div>
    </div>
    <div>
      <button>Send message</button>
    </div>
  </div>
  )
}

export default Contact