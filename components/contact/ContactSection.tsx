"use client";

import { useState } from "react";
import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";

const ContactSection = () => {
  const { darkMode } = useThemeContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [buttonState, setButtonState] = useState<"default" | "success">("default");

  // Handle input change and live validation
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Inline email validation
    if (name === "email") {
      const trimmed = value.trim();
      if (!trimmed) setErrors((prev) => ({ ...prev, email: "Email is required" }));
      else if (!trimmed.includes("@")) setErrors((prev) => ({ ...prev, email: "Email must contain @" }));
      else {
        const parts = trimmed.split("@");
        if (!parts[1] || !parts[1].includes(".")) {
          setErrors((prev) => ({
            ...prev,
            email: "Email must contain a valid domain (e.g., gmail.com)",
          }));
        } else setErrors((prev) => ({ ...prev, email: "" }));
      }
    } else {
      // Clear errors for other fields on typing
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Full validation before submit
  const validateAll = () => {
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) newErrors.name = "Name is required";

    const email = formData.email.trim();
    if (!email) newErrors.email = "Email is required";
    else if (!email.includes("@")) newErrors.email = "Email must contain @";
    else {
      const parts = email.split("@");
      if (!parts[1] || !parts[1].includes(".")) newErrors.email = "Email must contain a valid domain (e.g., gmail.com)";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  // Submit handler with proper typing
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateAll()) return; // Stop if errors exist

    setButtonState("success");
    setTimeout(() => {
      setButtonState("default");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section
      id="contact"
      className={`py-16 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-xl mx-auto px-6">
        <h2
          className={`text-4xl font-bold text-center mb-8 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Contact Us
        </h2>

        <div className="p-[3px] rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-800">
          <form
            onSubmit={handleSubmit}
            className={`rounded-lg p-8 space-y-6 shadow-lg transition-colors duration-500 ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            {/* Name */}
            <div>
              <label className={`block mb-2 font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border rounded-md p-3 transition-colors duration-300 ${
                  darkMode
                    ? "border-gray-400 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                    : "border-gray-500 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500"
                } ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className={`block mb-2 font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border rounded-md p-3 transition-colors duration-300 ${
                  darkMode
                    ? "border-gray-400 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                    : "border-gray-500 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500"
                } ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label className={`block mb-2 font-medium ${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full border rounded-md p-3 transition-colors duration-300 ${
                  darkMode
                    ? "border-gray-400 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                    : "border-gray-500 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500"
                } ${errors.message ? "border-red-500" : ""}`}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full font-semibold px-6 py-3 rounded-md transition-colors ${
                buttonState === "success"
                  ? "bg-green-500 text-white cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-800 hover:cursor-pointer"
              }`}
              disabled={buttonState === "success"}
            >
              {buttonState === "success" ? "Message Sent Successfully" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;