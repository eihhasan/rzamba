import { SectionReveal } from "./section-reveal";

const values = [
  {
    title: "Community First",
    desc: "Every initiative begins with listening to and prioritizing local communities.",
    img: "/community.jpg",
  },
  {
    title: "Sustainability",
    desc: "Our projects are designed to create long-term impact while respecting the environment.",
    img: "/sust.jpg",
  },
  {
    title: "Transparency",
    desc: "We ensure honesty and accountability in every step of our work.",
    img: "/transpareny.jpg",
  },
  {
    title: "Collaboration",
    desc: "We believe lasting change is built through strong partnerships and collective action.",
    img: "/collab.jpg",
  },
];

export function Values() {
  return (
    <SectionReveal className="py-20 md:py-14  ">
      <div id="values" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            Our Core Values
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 ">
            What Drives Us Forward
          </h2>
          <p className="text-lg md:text-xl  max-w-2xl mx-auto leading-relaxed text-gray-100 ">
            These fundamental principles shape every decision we make and guide
            our mission to create lasting positive impact.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, index) => (
            <article
              key={v.title}
              className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Card number indicator */}
              <div className="absolute top-4 left-4 z-10 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center text-primary font-bold text-sm">
                {index + 1}
              </div>

              {/* Image container with enhanced styling */}
              <div className="relative overflow-hidden h-56 md:h-64">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
                <img
                  src={v.img || "/placeholder.svg"}
                  alt={v.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Floating icon overlay */}
                <div className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content section */}
              <div className="p-6 md:p-8">
                <h3 className="font-bold text-x md:text-2xl  mb-3 text-black group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {v.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4">
                  {v.desc}
                </p>

                {/* Subtle action indicator */}
                {/* <div className="flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div> */}
              </div>

              {/* Decorative border animation */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 animate-pulse" />
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-black/40 backdrop-blur-md border border-primary/20">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-primary/70 border-2 border-black"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-white">
              Join our community of changemakers
            </span>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
