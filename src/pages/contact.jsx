import React from 'react';

const Contact = () => {
  return (
    <div className="bg-light min-h-screen pb-10">
      {/* Page Header */}
      <div className="my-10 px-4 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight">CONTACT US</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto my-4"></div>
        <p className="mt-4 text-gray-700 text-lg">
          We are here for you. <br />
          Our team is ready to assist with your concerns.
        </p>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Google Map and Contact Details */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <iframe
            className="w-full rounded-md mb-6 shadow-md"
            height="320"
            src={contactData.iframe}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>

          <h5 className="text-xl font-semibold text-blue-600">Address</h5>
          <a
            href={contactData.gmap}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-800 mt-2 hover:text-blue-600"
          >
            <i className="bi bi-geo-alt-fill mr-2"></i>
            {contactData.address}
          </a>

          <h5 className="text-xl font-semibold text-blue-600 mt-6">Call Us</h5>
          <a
            href={`tel:+${contactData.pn1}`}
            className="block text-gray-800 mt-2 hover:text-blue-600"
          >
            <i className="bi bi-telephone-fill mr-2"></i>
            +{contactData.pn1}
          </a>
          {contactData.pn2 && (
            <a
              href={`tel:+${contactData.pn2}`}
              className="block text-gray-800 mt-2 hover:text-blue-600"
            >
              <i className="bi bi-telephone-fill mr-2"></i>
              +{contactData.pn2}
            </a>
          )}

          <h5 className="text-xl font-semibold text-blue-600 mt-6">Email</h5>
          <a
            href={`mailto:${contactData.email}`}
            className="block text-gray-800 mt-2 hover:text-blue-600"
          >
            <i className="bi bi-envelope-fill mr-2"></i>
            {contactData.email}
          </a>

          <h5 className="text-xl font-semibold text-blue-600 mt-6">Follow Us</h5>
          <div className="flex space-x-4 mt-4">
            {contactData.tw && (
              <a
                href={contactData.tw}
                className="text-gray-800 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-twitter text-2xl"></i>
              </a>
            )}
            <a
              href={contactData.fb}
              className="text-gray-800 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook text-2xl"></i>
            </a>
            <a
              href={contactData.insta}
              className="text-gray-800 hover:text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram text-2xl"></i>
            </a>
            {contactData.x && (
              <a
                href={contactData.x}
                className="text-gray-800 hover:text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-x text-2xl"></i>
              </a>
            )}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <form method="POST">
            <h5 className="text-xl font-semibold text-blue-600">Send Message</h5>

            <div className="mt-4">
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 mt-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-4">
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 mt-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-4">
              <label className="block font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 mt-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mt-4">
              <label className="block font-medium">Message</label>
              <textarea
                name="message"
                required
                className="w-full border border-gray-300 rounded-md shadow-sm p-2 mt-2 resize-none focus:ring-2 focus:ring-blue-500"
                rows="6"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const contactData = {
  iframe: "https://www.google.com/maps/embed?pb=...",
  gmap: "https://www.google.com/maps/place/School+Location",
  address: "123 School Street, Sikkim",
  pn1: "9876543210",
  pn2: "",
  email: "contact@school.com",
  fb: "https://facebook.com/schoolpage",
  insta: "https://instagram.com/schoolpage",
  tw: "https://twitter.com/schoolpage",
  x: "https://x.com/schoolpage"
};

export default Contact;
