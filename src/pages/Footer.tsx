import React from "react";
import { Mail, Phone, MapPin,  Clock } from "lucide-react";

const Contact: React.FC = () => {


 

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


        </div>


      </div>
    </section>
  );
};

export default Contact;
