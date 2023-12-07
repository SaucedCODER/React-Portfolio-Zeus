import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./Toast";
const Contact = () => {
  // Some Functionalities
  const [showToast, setShowToast] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  // Function to show the toast
  const showToastMessage = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);

    // Hide the toast after a few seconds
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    setIsSending(true);
    sendEmail();
  };
  // sending email through EMailJS
  const form = useRef();

  const sendEmail = () => {
    // Access form values
    const username = form.current.user_name.value;
    const email = form.current.email.value;
    const message = form.current.message.value;
    const DELAY_DURATION = 1500;
    // Validate input
    if (!username || !email || !message) {
      console.log("Please fill in all fields before sending the email.");
      setTimeout(() => {
        setIsSending(false);
        showToastMessage(
          "Please fill in all fields before sending the email.",
          "failed"
        );
      }, DELAY_DURATION);

      return;
    }

    emailjs
      .sendForm(
        "service_gmrgyjd",
        "template_6bigrho",
        form.current,
        "7OQA-hhYHAncYGexL"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(() => {
            setIsSending(false);
            showToastMessage("Your Message successfully sent!", "success");
            document.getElementById("contactForm").reset();
          }, DELAY_DURATION);
        },
        (error) => {
          console.log(error.text);
          showToastMessage(
            "There's an system error please try again later!",
            "failed"
          );
          setIsSending(false);
        }
      );
  };

  return (
    <div
      name="contact"
      className="bg-[#0f0f0f] py-5 min-h-screen flex-column items-top justify-center sm:items-center sm:pt-0"
    >
      <div className="py-8 pt-[5rem] max-w-[1000px] mx-auto p-4">
        <p className="text-4xl font-bold inline border-b-4  text-gray-300 border-green-600">
          Contact
        </p>
      </div>
      <div className="relative mx-auto flex justify-center">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the form to start a conversation
                </p>

                {/* Contact Information */}
                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Oriental Mindoro, Pinamalayan, 5208
                  </div>
                </div>
                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +63-908-746-7382
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    zeusorilla007@gmail.com
                  </div>
                </div>
              </div>

              {/* Form */}
              <form
                className="p-6 flex flex-col justify-center"
                ref={form}
                id="contactForm"
                onSubmit={handleSendMessage}
              >
                <div className="flex flex-col">
                  <label htmlFor="name" className="hidden">
                    Full Name
                  </label>
                  <input
                    type="name"
                    name="user_name"
                    id="name"
                    placeholder="Full Name"
                    className="link w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-300 font-semibold focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="email" className="hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-300 font-semibold focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label htmlFor="message" className="hidden">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your Message"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-300 font-semibold focus:border-green-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-green-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-greeb-500 transition ease-in-out duration-300"
                  disabled={isSending}
                >
                  {isSending ? "Sending..." : "Send"}
                </button>
              </form>
              {showToast && (
                <Toast
                  message={toastMessage}
                  type={toastType}
                  onClose={() => setShowToast(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
