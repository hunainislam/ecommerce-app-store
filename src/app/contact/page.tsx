import React from 'react'


export default function Contact() {
  return (
    <div id="contact">
            <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.9144015370557!2d66.99199262750855!3d24.934985796117125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb36aaca6dd2783%3A0xce2500051e585075!2sAl%20Fatah%20Colony%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727717439298!5m2!1sen!2s" 
        style={{ filter: " contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-myWhite relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
            Al-Fatah Colony Orangi Town Number 10 Karachi
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-myBlackPara leading-relaxed">hunainislam09@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">0318-2347330</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-myWhite flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-myBlackPara scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl capitalize">
        CONTACT-US
      </h2>
      <p className="leading-relaxed mb-5 text-gray-600 mt-4">
      Get in touch with us for assistance, questions, or suggestions anytime!
      </p>
      <form target="_blank" action="https://formspree.io/f/xkgwdyrq"
  method="POST">
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-myWhite rounded border border-gray-300 focus:bg-myWhite focus:ring-2 focus:ring-myBlackPara text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-myWhite rounded border border-gray-300  focus:ring-2  focus:ring-myBlackPara text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
         />
      </div>
      <div className="relative mb-4">
        <label htmlFor="subject" className="leading-7 text-sm text-gray-600">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full bg-myWhite rounded border border-gray-300  focus:ring-myOrang focus:ring-2  focus:ring-myBlackPara text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          required
         />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-myWhite rounded border border-gray-300  focus:ring-2  focus:ring-myBlackPara h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
          required
        />
      </div>
      <button className="text-myWhite bg-myBlackPara border-0 py-2 px-6 focus:outline-none hover:bg-myOrange rounded text-lg">
        Send Message
      </button>
      </form>
    </div>
  </div>
</section>

        </div>
  )
}
