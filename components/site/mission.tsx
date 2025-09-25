import { SectionReveal } from "./section-reveal";
import { Check } from "lucide-react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function Mission() {
  return (
    <SectionReveal className="py-20 md:py-28 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div id="mission" className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
              Our Purpose
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Our Mission in the{" "}
              <span className="bg-gradient-to-r from-[#a06cd5] to-purple-600 bg-clip-text text-transparent">
                Himalayas
              </span>
            </h2>

            {/* Description */}
            <TextGenerateEffect
              words="To uplift remote Himalayan communities through education, healthcare access, and environmental stewardship."
              className="text-lg text-muted-foreground leading-relaxed"
            />

            {/* Mission Points */}
            <ul className="space-y-4">
              {[
                "Community-led education programs",
                "Sustainable livelihoods and skill-building",
                "Conservation and climate resilience",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-blue-100/50"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Check className="size-5 text-white" />
                  </div>
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative flex gap-6 items-start">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl flex-1">
                <img
                  src="/mission1.jpg"
                  alt="Children attending a community classroom in Ladakh"
                  className="w-full h-80 md:h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Floating Stats */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-blue-600">
                        500+
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Students
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-cyan-600">15+</div>
                      <div className="text-xs text-muted-foreground">
                        Villages
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-green-600">5</div>
                      <div className="text-xs text-muted-foreground">Years</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Overlapping Image */}
              <div className="relative w-2/5 -ml-16 mt-8">
                <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                  <img
                    src="/mission2.jpg"
                    alt="Community activities in Ladakh"
                    className="w-full h-48 md:h-56 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
