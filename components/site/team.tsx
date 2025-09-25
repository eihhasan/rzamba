import { SectionReveal } from "./section-reveal";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Saldon Stanzin",
    role: "Founder",
    image: "/saldonfounder.webp",
    bio: "Driving humanitarian and educational initiatives in Ladakh, improving livelihoods and healthcare access in local communities.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    name: "Syed Murtaza Agha",
    role: "Co-Founder",
    image: "/cofounder-murtaza.webp",
    bio: "Passionate about sustainable development and social welfare projects, leading multiple programs in remote regions.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Fayaz Ali",
    role: "Co-Founder",
    image: "cofounderfayaz.webp",
    bio: "Co-founder dedicated to community development in Ladakh, focusing on education and youth empowerment initiatives.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Marzia Bano",
    role: "Co-Founder",
    image: "/maria-cofounder.webp",
    bio: "Focused on women empowerment and community engagement programs, creating long-lasting impact across Ladakh villages.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Ali Asgar",
    role: "Co-Founder",
    image: "/cofounder-aliasgar.webp",
    bio: "Focused on women empowerment and community engagement programs, creating long-lasting impact across Ladakh villages.",
    gradient: "from-purple-500 to-pink-500",
  },
];

export function Team() {
  return (
    <SectionReveal
      id="team"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/5 to-lime-500/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of professionals brings together diverse
            expertise, passion, and commitment to drive meaningful change across
            the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative overflow-hidden animate-fade-in-up 
        `} // 👈 Center the 4th item
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background gradient effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Profile Image */}
              <div className="relative mb-6">
                <div
                  className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.gradient} p-1 group-hover:scale-105 transition-transform duration-300`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Decorative ring */}
                <div
                  className={`absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500`}
                ></div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4 relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                  {member.name}
                </h3>
                <div
                  className={`inline-block bg-gradient-to-r ${member.gradient} text-white px-4 py-1 rounded-full text-sm font-medium`}
                >
                  {member.role}
                </div>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer`}
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer`}
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </div>
                  <div
                    className={`w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer`}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Corner decoration */}
              <div
                className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-full opacity-10 group-hover:opacity-30 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-4">Join Our Team</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our
              vision of creating positive change in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-black/65 hover:text-white transition-all duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
