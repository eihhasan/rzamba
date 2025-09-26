import { Mission } from "@/components/site/mission";
import { Newsletter } from "@/components/site/newsletter";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <section className="relative z-10 px-6 md:px-8 lg:px-12 py-16 md:py-20 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            About Rzamba
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering Ladakh's communities through sustainable initiatives,
            cultural preservation, and environmental conservation since 2015.
          </p>
        </div>

        {/* Hero Section with Image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/aboutimg.webp"
                alt="About Us Image"
                className="w-full h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              A short, impactful statement about rZamba’s mission.
            </h2>
            <p className="text-gray-600 mb-4">
              rZamba is a non-profit organisation that has been operating in the
              fields of education, health, and waste management since 2017. The
              organisation aims to act as a bridge between people, resources,
              systems, and the community at large. Initially, rZamba focused on
              building toilets and promoting health and sanitation for girls in
              schools, but this effort brought to light more significant issues
              within the education system, such as low literacy, low pass rates,
              and inadequate school staff. As a result, rZamba launched the
              Holistic Child Wellbeing Program in 2019 to enhance the quality of
              education in Kargil.
            </p>
            {/* <p className="text-gray-600">
              Today, we work across 25+ villages in Ladakh, partnering with
              local communities to build resilience, promote education, and
              protect the fragile ecosystem that makes this region so special.
            </p> */}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              The Story – rZamba's journey from inception to now.
            </h1>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <p className="text-gray-700 mb-4">
              rZamba's journey from 2015 to 2019 began with addressing basic
              health and sanitation needs by building toilets and promoting
              hygiene among 3,100 girls and 150 teachers in 14 schools in
              Kargil. This work uncovered significant gaps in the government
              education system, including:
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-gray-700">
                  Low literacy and pass rates.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-gray-700">
                  Insufficient school staff and infrastructure.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-gray-700">
                  Limited operational periods due to harsh weather.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-gray-700">
                  Lack of active Village Education Committees (VECs).
                </span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span className="text-gray-700">
                  Ineffective school processes.
                </span>
              </div>
            </div>

            <p className="text-gray-700 mb-4">
              These systemic deficiencies were further exposed during the
              COVID-19 pandemic, which caused school closures and disrupted
              students' education. In response, rZamba initiated community
              classes across 40 villages, reaching 4,000 students with the help
              of 50 locally trained facilitators from 2019 to 2022. These
              efforts culminated in the launch of rZamba's Holistic Child
              Wellbeing Program in 2022.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-8 text-center">
            <div className="text-gray-500 mb-2">
              [Image: rZamba's Journey Timeline]
            </div>
            <div className="text-sm text-gray-400">
              Visual timeline showing 2015-2019 health initiatives, 2019-2022
              community classes, and 2022 program launch
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              rZamba's holistic child well-being initiative aligns with several
              Sustainable Development Goals (SDGs) in the following ways:
            </h1>
          </div>

          <div className="space-y-6">
            {/* SDG 1 */}
            <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">No Poverty</h3>
                <p className="text-gray-600 text-sm">
                  By providing quality education and comprehensive support to
                  children in Ladeth, rZamba aims to break the cycle of poverty
                  and empower them with the necessary skills and opportunities
                  to uplift their lives and communities.
                </p>
              </div>
            </div>

            {/* SDG 4 */}
            <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Quality Education +
                </h3>
              </div>
            </div>

            {/* SDG 5 */}
            <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">5</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Gender Equality +
                </h3>
              </div>
            </div>

            {/* SDG 10 */}
            <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold">10</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Reduced Inequalities +
                </h3>
              </div>
            </div>

            {/* SDG 11 */}
            <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">11</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Sustainable Cities and Communities +
                </h3>
              </div>
            </div>

            {/* SDG 17 */}
            <div className="flex items-start gap-4 p-4 bg-white border border-gray-200 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                <span className="text-cyan-600 font-bold">17</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Partnerships for Goals +
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To empower Ladakhi communities through sustainable development,
              education initiatives, and environmental conservation while
              preserving the rich cultural heritage of the Himalayas.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🔭</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h3>
            <p className="text-gray-600">
              A future where Ladakh's communities thrive in harmony with nature,
              where traditional wisdom meets modern opportunities, and where
              every child has access to quality education and a sustainable
              future.
            </p>
          </div>
        </div>

        {/* story  */}

        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 max-w-4xl mx-auto rounded-lg shadow-sm">
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Text Content */}
            <div className="flex-1 space-y-4">
              <h2 className="text-xl font-bold text-white mb-4">
                The Story – rZamba's journey from inception to now.
              </h2>

              <p className="text-sm text-gray-200 leading-relaxed mb-4">
                rZamba's journey from 2015 to 2019 began with addressing basic
                health and sanitation needs by building toilets and promoting
                hygiene among 3,100 girls and 150 teachers in 14 schools in
                Kargil. This work uncovered significant gaps in the government
                education system, including:
              </p>

              <ul className="text-sm text-gray-200 space-y-1 ml-4">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Low literacy and pass rates.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Insufficient school staff and infrastructure.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Limited operational periods due to harsh weather.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>
                    Lack of active Village Education Committees (VECs).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Ineffective school processes.</span>
                </li>
              </ul>

              <p className="text-sm text-gray-200 leading-relaxed mt-4">
                These systemic deficiencies were further exposed during the
                COVID-19 pandemic, which caused school closures and disrupted
                students' education. In response, rZamba initiated community
                classes across 40 villages reaching 4,000 students with the help
                of 50 locally trained facilitators from 2019 to 2022. These
                efforts culminated in the launch of rZamba's Holistic Child
                Wellbeing Program in 2022.
              </p>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <div className="w-64 h-48 bg-gray-100 rounded-lg overflow-hidden shadow-sm">
                <img
                  src="/gallery1.webp"
                  alt="Children from rZamba program"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        {/* What We Do */}
        <div className="py-11">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌱",
                title: "Environmental Conservation",
                description:
                  "Tree plantation drives, waste management, and promoting sustainable tourism practices in Ladakh.",
              },
              {
                icon: "🏫",
                title: "Education Support",
                description:
                  "School infrastructure, digital literacy programs, and scholarship opportunities for Ladakhi youth.",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Community Development",
                description:
                  "Women empowerment programs, skill development workshops, and healthcare initiatives.",
              },
              {
                icon: "🕌",
                title: "Cultural Preservation",
                description:
                  "Documenting oral histories, supporting traditional arts, and promoting Ladakhi heritage.",
              },
              {
                icon: "💧",
                title: "Water Conservation",
                description:
                  "Building artificial glaciers, rainwater harvesting, and traditional water management systems.",
              },
              {
                icon: "🌞",
                title: "Renewable Energy",
                description:
                  "Solar power projects for remote villages and promoting clean energy solutions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-6 text-center hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Our Impact in Ladakh
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">5,000+</div>
              <div className="text-sm opacity-90">Trees Planted</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">25+</div>
              <div className="text-sm opacity-90">Villages Reached</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">1,200+</div>
              <div className="text-sm opacity-90">Students Supported</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold mb-1">8</div>
              <div className="text-sm opacity-90">Years of Service</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Dedicated local volunteers, environmentalists, educators, and
            community leaders working together to make Ladakh a better place for
            future generations.
          </p>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-8 inline-block">
            <p className="text-gray-700 italic">
              "We believe in the strength of Ladakhi communities and their
              wisdom to create sustainable solutions for the challenges they
              face."
            </p>
            <p className="text-gray-600 mt-2">- Rzamba Team</p>
          </div>
        </div>
      </section>
      <Mission />
      <Newsletter />
    </main>
  );
}
