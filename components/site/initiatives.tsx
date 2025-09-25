import { SectionReveal } from "./section-reveal";
import {
  BookOpen,
  Droplets,
  Stethoscope,
  Scaling as Seedling,
  Home,
  Users,
} from "lucide-react";
const initiatives = [
  {
    icon: BookOpen,
    title: "Education for All",
    description:
      "Building schools, training teachers, and providing educational resources to underserved communities worldwide.",
    image: "/education.jpg",
    stats: "50 Schools Built",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Droplets,
    title: "Clean Water Project",
    description:
      "Installing water purification systems and wells to provide clean, safe drinking water to remote areas.",
    image: "/waterproj.jpg",
    stats: "200 Wells Installed",
    color: "from-green-500 to-blue-600",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Access",
    description:
      "Mobile clinics, health education, and medical supply distribution to improve healthcare outcomes.",
    image: "/health.jpg",
    stats: "15,000 Patients Treated",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Seedling,
    title: "Sustainable Agriculture",
    description:
      "Teaching modern farming techniques and providing seeds and tools for food security.",
    image: "/culture.jpg",
    stats: "500 Farms Supported",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Home,
    title: "Housing Initiative",
    description:
      "Building safe, affordable homes and improving living conditions for families in need.",
    image: "/house.jpg",
    stats: "300 Homes Built",
    color: "from-green-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Women Empowerment",
    description:
      "Skills training, microfinance, and leadership programs to empower women economically.",
    image: "/womens.jpg",
    stats: "2,000 Women Trained",
    color: "from-purple-500 to-purple-600",
  },
];
export function Initiatives() {
  return (
    <SectionReveal id="initiatives" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Initiatives
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive programs designed to address the most
            pressing challenges facing communities worldwide. Each initiative is
            carefully crafted to create lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Stats Badge */}
                <div
                  className={`absolute top-4 right-4 bg-gradient-to-r ${initiative.color} text-white px-3 py-1 rounded-full text-sm font-bold`}
                >
                  {initiative.stats}
                </div>

                {/* Icon */}
                <div
                  className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br ${initiative.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <initiative.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {initiative.description}
                </p>

                {/* Action Button */}
                <button
                  className={`w-full bg-gradient-to-r ${initiative.color} text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0`}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">
            Ready to Make a Difference?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join us in our mission to create positive change worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300">
              Support Our Initiatives
            </button>
            <button className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-500 hover:text-white transition-all duration-300">
              Volunteer Today
            </button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
