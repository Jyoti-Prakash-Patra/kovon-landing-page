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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className={`py-16 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-xl mx-auto px-6">

        {/* Heading */}
        <h2
          className={`text-4xl font-bold text-center mb-8 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Contact Us
        </h2>

        {/* Gradient Border Container */}
        <div
          className={`p-[3px] rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-800`}
        >
          <form
            onSubmit={handleSubmit}
            className={`rounded-lg p-8 space-y-6 shadow-lg transition-colors duration-500 ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <div>
              <label
                className={`block mb-2 font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full border rounded-md p-3 transition-colors duration-300 ${
                  darkMode
                    ? "border-gray-400 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                    : "border-gray-500 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500"
                }`}
              />
            </div>

            <div>
              <label
                className={`block mb-2 font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full border rounded-md p-3 transition-colors duration-300 ${
                  darkMode
                    ? "border-gray-400 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                    : "border-gray-500 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500"
                }`}
              />
            </div>

            <div>
              <label
                className={`block mb-2 font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full border rounded-md p-3 transition-colors duration-300 ${
                  darkMode
                    ? "border-gray-400 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                    : "border-gray-500 bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-500"
                }`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

























// import { useState, useEffect, useRef } from "react";
// import { TextField } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import PrimaryButton from "@/components/button/PrimaryButton";
// import { useThemeContext } from "@/components/theme-registry/ThemeRegistry";

// interface FormState { name: string; email: string; message: string; }
// interface Props { open: boolean; onClose: () => void; }

// export default function ContactSection({ open, onClose }: Props) {
//   const { darkMode } = useThemeContext();
//   const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
//   const [errors, setErrors] = useState<Partial<FormState>>({});
//   const [submitted, setSubmitted] = useState(false);
//   const modalRef = useRef<HTMLDivElement>(null);

//   const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
//   };

//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
//     if (open) window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [open, onClose]);

//   const validate = (): boolean => {
//     const newErrors: Partial<FormState> = {};
//     if (!form.name.trim()) newErrors.name = "Name is required";
//     if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email required";
//     if (form.message.length < 10) newErrors.message = "Message must be at least 10 characters";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (): void => { if (!validate()) return; setSubmitted(true); setForm({ name: "", email: "", message: "" }); };

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div onClick={handleOutsideClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
//           <motion.div ref={modalRef} initial={{ scale: 0.8, opacity: 0, y: 40 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0, y: 40 }} transition={{ duration: 0.3 }} className={`w-full max-w-lg rounded-2xl shadow-2xl p-8 transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
//             <h2 className="text-2xl font-bold mb-6 transition-colors duration-500">Contact Us</h2>
//             <div className="space-y-5">
//               <TextField label="Name" fullWidth value={form.name} error={!!errors.name} helperText={errors.name} onChange={(e) => setForm({ ...form, name: e.target.value })} InputLabelProps={{ className: darkMode ? "text-gray-300" : "text-gray-700" }} />
//               <TextField label="Email" fullWidth value={form.email} error={!!errors.email} helperText={errors.email} onChange={(e) => setForm({ ...form, email: e.target.value })} InputLabelProps={{ className: darkMode ? "text-gray-300" : "text-gray-700" }} />
//               <TextField label="Message" multiline rows={4} fullWidth value={form.message} error={!!errors.message} helperText={errors.message} onChange={(e) => setForm({ ...form, message: e.target.value })} InputLabelProps={{ className: darkMode ? "text-gray-300" : "text-gray-700" }} />
//               <PrimaryButton fullWidth onClick={handleSubmit}>Send Message</PrimaryButton>
//               {submitted && <p className={`transition-colors duration-500 ${darkMode ? "text-green-400" : "text-green-600"}`}>Message submitted successfully!</p>}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }




















// import { useState, useEffect, useRef } from "react";
// import { TextField } from "@mui/material";
// import { motion, AnimatePresence } from "framer-motion";
// import PrimaryButton from "@/components/button/PrimaryButton";

// interface FormState {
//   name: string;
//   email: string;
//   message: string;
// }

// interface Props {
//   open: boolean;
//   onClose: () => void;
// }

// export default function ContactSection({ open, onClose }: Props) {
//   const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
//   const [errors, setErrors] = useState<Partial<FormState>>({});
//   const [submitted, setSubmitted] = useState(false);

//   const modalRef = useRef<HTMLDivElement>(null);

//   // Close on outside click
//   const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (modalRef.current && !modalRef.current.contains(e.target as Node)) onClose();
//   };

//   // Close on ESC
//   useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
//     if (open) window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [open, onClose]);

//   const validate = (): boolean => {
//     const newErrors: Partial<FormState> = {};
//     if (!form.name.trim()) newErrors.name = "Name is required";
//     if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = "Valid email required";
//     if (form.message.length < 10) newErrors.message = "Message must be at least 10 characters";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = () => {
//     if (!validate()) return;
//     setSubmitted(true);
//     setForm({ name: "", email: "", message: "" });
//   };

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div
//           onClick={handleOutsideClick}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
//         >
//           <motion.div
//             ref={modalRef}
//             initial={{ scale: 0.8, opacity: 0, y: 20 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.8, opacity: 0, y: 20 }}
//             transition={{ duration: 0.3 }}
//             className="w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 transition-colors duration-500"
//           >
//             <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
//               Contact Us
//             </h2>

//             <div className="space-y-5">
//               <TextField
//                 label="Name"
//                 fullWidth
//                 value={form.name}
//                 error={!!errors.name}
//                 helperText={errors.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="bg-gray-50 dark:bg-gray-800 rounded-lg"
//               />
//               <TextField
//                 label="Email"
//                 fullWidth
//                 value={form.email}
//                 error={!!errors.email}
//                 helperText={errors.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 className="bg-gray-50 dark:bg-gray-800 rounded-lg"
//               />
//               <TextField
//                 label="Message"
//                 multiline
//                 rows={4}
//                 fullWidth
//                 value={form.message}
//                 error={!!errors.message}
//                 helperText={errors.message}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 className="bg-gray-50 dark:bg-gray-800 rounded-lg"
//               />

//               <PrimaryButton fullWidth onClick={handleSubmit}>
//                 Send Message
//               </PrimaryButton>

//               {submitted && (
//                 <p className="text-green-600 dark:text-green-400 mt-2">
//                   Message submitted successfully!
//                 </p>
//               )}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
