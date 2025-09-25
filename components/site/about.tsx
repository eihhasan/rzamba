import { SectionReveal } from "./section-reveal";
import { Users, Heart, Mountain } from "lucide-react";

export function About() {
  return (
    <SectionReveal className="py-20 md:py-28  relative overflow-hidden">
      {/* Neon Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-900 to-purple-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-lg shadow-cyan-400/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-lg shadow-purple-400/20"></div>

      {/* Animated Neon Orbs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>

      <div id="about" className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20">
              <img
                src={"/storyabout.png"}
                alt="Rzamba Foundation team working with local community members in Ladakh"
                className="w-full h-80 md:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30">
                <div className="flex items-center gap-2 text-sm font-medium text-cyan-100">
                  <Users className="size-4 text-cyan-400" />
                  Since 2018
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-cyan-900 rounded-full opacity-40 blur-xl" />
            <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-purple-900 rounded-full opacity-40 blur-xl" />
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/50 text-cyan-300 text-sm font-medium border border-cyan-500/30">
              Our Story
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              About Rzamba
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              The word rZamba means "bridge" in Ladakhi—a symbol of our
              commitment to connecting what is with what can be. We began by
              addressing immediate needs like school sanitation, positively
              impacting over 3,100 girls and 150 teachers across 14 schools.
              During the COVID-19 crisis, we mobilized local youth to hold
              community classes for over 4,000 students, igniting a deeper
              movement for educational transformation. This laid the foundation
              for the Holistic Child Wellbeing Initiative (HCWI)—our flagship
              program launched in 2022 to tackle systemic issues in Ladakh's
              government schools, especially in Kargil.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-cyan-500/20">
                  <Heart className="size-6 text-white" />
                </div>
                <h3 className="font-semibold text-cyan-100">Community-Led</h3>
                <p className="text-sm text-slate-400 mt-1">
                  Local priorities first
                </p>
              </div>

              <div className="text-center p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-500/20">
                  <Users className="size-6 text-white" />
                </div>
                <h3 className="font-semibold text-purple-100">Collaborative</h3>
                <p className="text-sm text-slate-400 mt-1">Working together</p>
              </div>

              <div className="text-center p-4 rounded-lg bg-black/30 backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-green-500/20">
                  <Mountain className="size-6 text-white" />
                </div>
                <h3 className="font-semibold text-green-100">Sustainable</h3>
                <p className="text-sm text-slate-400 mt-1">Long-term impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
