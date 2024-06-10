import React from "react";
import { ContactLordIcons, socialMedia } from "../../constants/Contact";
import Button from "../../components/button/Button";
import { logo, logoclear } from "../../assets";

export default function ContactUsPage() {
  return (
    <div className="w-full min-h-[100vh]">
      {/* Start of contacts header section */}
      <div className="w-full min-h-[100vh] flex flex-col items-center justify-center px-5 lg:px-32">
        <p className="bg-gradient-to-r from-green to-blue-600 bg-clip-text text-transparent text-3xl lg:text-6xl font-bold text-center capitalize lg:mt-[20%] mt-[30%]">
          How you can Reach out to us.
        </p>
        <p className="text-center mt-4 text-xl fond-bold text-gray-500">
          Feel free to call us or message us incase of any clarifications you
          may need.
        </p>

        <div className="w-full flex flex-col justify-center items-center mt-3">
          <p className="text-gray-500 text-xl mt-2 mb-1">Follow us on</p>
          <div className="flex lg:items-center justify-center flex-wrap gap-4 mt-4 flex-col md:flex-row items-start">
            {socialMedia.map((media, i) => {
              return (
                <div className="flex items-center gap-4">
                  <div
                    key={i}
                    className="bg-gradient-to-r from-green to-blue-600 flex items-center justify-center w-12 h-12 rounded-full cursor-pointer shadow-xl transition duration-150 ease-out hover:ease-in hover:scale-110"
                  >
                    <img src={media.src} alt={media.alt} />
                  </div>
                  <div>
                    <p className="text-md text-slate-500">{media.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <img src={logo} alt="image of logo" className="dark:hidden"/>
          <img src={logoclear} alt="image of logo" className="hidden dark:flex"/>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-5 lg:w-[80%] lg:mx-auto lg:justify-between hero-pattern rounded-md">
        <div className="">
          <div className="flex justify-center flex-wrap gap-4 mt-6 flex-col lg:items-start">
            {ContactLordIcons.map((icon, i) => {
              return (
                <div className="flex items-center gap-4">
                  <div
                    key={i}
                    className="bg-gradient-to-r from-green to-blue-600 flex items-center justify-center w-12 h-12 rounded-full cursor-pointer shadow-xl transition duration-150 ease-out hover:ease-in hover:scale-110"
                  >
                    <img src={icon.src} alt={icon.alt} className="w-8" />
                  </div>
                  <div>
                    <p className="text-md text-slate-100 text-md">
                      {icon.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-3">
            <p className="font-semibold text-white text-center mb-3">
              Opening Hours: 8:00am -5:00pm
            </p>
            <p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.919853868676!2d36.831271774131935!3d-1.2159624355515508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d5df0378847%3A0xdb7d5c490bf805a0!2sProxy%20Auto%20Garage!5e0!3m2!1sen!2ske!4v1691576104864!5m2!1sen!2ske"
                width="100%"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded"
              ></iframe>
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="p-2 w-full">
            <form
              method="post"
              className="flex mx-auto max-w-md flex-col items-center gap-4 bg-slate-200 p-2 sm:p-4 rounded-lg"
            >
              <h1 className="text-2xl text-slate-600">
                Send us a <span className="text-green">Message Here</span>
              </h1>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-start  gap-2 flex-col">
                  <label htmlFor="name" className="text-md ">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name Here"
                    className="w-full p-2 px-2 rounded-full  outline-none"
                    required
                  />
                </div>
                <div className="flex justify-start gap-2 flex-col">
                  <label htmlFor="email" className="text-md ">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email Address"
                    className="w-full p-2 px-2 rounded-full  outline-none"
                    required
                  />
                </div>
                <div className="flex justify-start gap-2 flex-col">
                  <label htmlFor="subject" className="text-md ">
                    Subject:
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Enter the subject for your message"
                    className="w-full p-2 px-2 rounded-full  outline-none"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-md ">
                    Message:
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="3"
                    placeholder="Enter Your Message Here..."
                    className="  outline-none w-full rounded-md p-4"
                    required
                  />
                </div>
              </div>
              <Button title="Send Message" type="submit" />
            </form>
          </div>
        </div>
      </div>
      {/* End of contacts header section */}
    </div>
  );
}
