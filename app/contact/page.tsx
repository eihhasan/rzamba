import type { Metadata } from "next";
import ContactForm from "@/components/form/contact-form";
import { Mission } from "@/components/site/mission";
import { Newsletter } from "@/components/site/newsletter";

export const metadata: Metadata = {
  title: "Contact Us | Rzamba",
  description:
    "Get in touch with Rzamba — Let's talk about Ladakh-focused initiatives, partnerships, and support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <section className="relative z-10 px-6 md:px-8 lg:px-12 py-16 md:py-20 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's start a conversation about Ladakh, partnerships, and
            supporting mountain communities. We're here to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {[
            {
              icon: "✉️",
              title: "Email",
              content: "gm.kargil@gmail.com",
              link: "gm.kargil@gmail.com",
              description: "Send us an email anytime",
            },
            {
              icon: "📞",
              title: "Phone",
              content: "+91 84920 96097",
              link: "+91 84920 96097",
              description: "Mon-Fri, 9AM-6PM",
            },
            {
              icon: "📍",
              title: "Address",
              content:
                "Batalik Road Near TV Station Kargil / Ut Ladakh/ 194103/",
              link: null,
            },
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-700 font-medium">{item.content}</p>
                )}
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Send us a message
            </h2>
            <p className="text-gray-600">
              Share your thoughts and we'll get back to you within 24 hours
            </p>
          </div>

          <ContactForm />
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Typically replies within 2 hours</span>
          </div>
        </div>
      </section>
      <Mission />
      <Newsletter />
    </main>
  );
}
