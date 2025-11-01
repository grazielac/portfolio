import React, { useState } from "react";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div>
      <section id="contact" className="sm:py-20 py-70 px-4">
        <div className="bg-[#FAF1CA] max-w-2xl mx-auto px-6 rounded-2xl shadow-sm py-10 border">
          <h2 className="text-3xl font-bold text-center mb-8">Get in touch</h2>

          {!isSubmitted ? (
            <form
              action=""
              method="POST"
              className="max-w-lg mx-auto flex flex-col gap-4"
            >
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="p-2 border rounded-lg"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="p-2 border rounded-lg"
                required
              />
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                className="p-4 border rounded-lg"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-[#43302e] cursor-pointer shadow-lg text-white py-3 px-6 w-fit mx-auto rounded-full hover:bg-[#5a4240] transition-colors"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <img src="..blue.png" />
              <p className="text-lg font-medium">Message sent! Thank you</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Contact;
