import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 9949327605",
      subdetails: "Mon-Sat: 9AM - 6PM",
      gradient: "from-teal-600 to-teal-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "azinternational719@gmail.com",
      // subdetails: "sales@azspices.com",
      gradient: "from-teal-500 to-teal-400",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "Ingudurpet 29/5-1 Machilipatnam Krishna District",
      subdetails: "Andhra Pradesh, India",
      gradient: "from-teal-700 to-teal-600",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Mon - Sat: 9AM - 6PM",
      subdetails: "Sunday: Closed",
      gradient: "from-teal-500 to-teal-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-teal-50 to-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-teal-300 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-teal-700 font-semibold text-sm uppercase tracking-wider bg-white px-4 py-2 rounded-full shadow-md">
              Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-teal-800 mb-6">
            Let's Start a{" "}
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-400">
              Conversation
            </span>
          </h2>

          <p className="text-xl text-teal-700 max-w-3xl mx-auto leading-relaxed">
            Have questions about our products or want to place a bulk order? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 mb-16">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-teal-200"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    {info.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-teal-900 mb-2 text-lg">
                      {info.title}
                    </h3>
                    <p className="text-teal-800 font-semibold">{info.details}</p>
                    <p className="text-teal-600 text-sm mt-1">{info.subdetails}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          {/* <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-2 border-teal-100">
              <h3 className="text-2xl font-bold text-teal-900 mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-teal-800 font-semibold mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:border-teal-500 transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-teal-800 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:border-teal-500 transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-teal-800 font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:border-teal-500 transition"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>

                  <div>
                    <label className="block text-teal-800 font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:border-teal-500 transition"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="wholesale">Wholesale Orders</option>
                      <option value="quality">Product Quality</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-teal-800 font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-teal-200 rounded-lg focus:border-teal-500 transition resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg font-semibold text-lg hover:scale-105 transition-all shadow-lg flex items-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div> */}
        </div>

        {/* Map Placeholder */}
        {/* <div className="rounded-3xl overflow-hidden shadow-2xl h-96">
          <iframe
            title="Office Location Map"
            src="https://www.google.com/maps/place/16%C2%B010'18.8%22N+81%C2%B007'31.2%22E/@16.1719001,81.1227533,17z/data=!3m1!4b1!4m4!3m3!8m2!3d16.1719001!4d81.1253282?hl=en&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div> */}

      </div>
    </section>
  );
};

export default Contact;
