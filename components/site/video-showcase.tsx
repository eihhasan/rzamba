"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";
import { SectionReveal } from "./section-reveal";

export function VideoShowcase() {
  const [open, setOpen] = useState(false);
  return (
    <SectionReveal className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-purple-600 text-sm font-medium">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
              Featured Video
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              See Our Impact in{" "}
              <span className="bg-gradient-to-r from-[#fff] to-white bg-clip-text text-transparent">
                Action
              </span>
            </h2>

            <p className="text-lg  leading-relaxed text-gray-100">
              Discover how we're making a difference across Ladakh through our
              innovative programs and community partnerships. Watch our story
              unfold.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="group px-8 py-3 bg-gradient-to-r from-[#fff] to-white hover:from-purple-100 hover:to-purple-200 text-purple-600 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                    Watch Our Story
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-transparent border-none shadow-none">
                  <div className="bg-background rounded-2xl overflow-hidden">
                    <DialogHeader className="px-6 pt-6 pb-4">
                      <DialogTitle className="text-xl">
                        Rzamba Foundation - Making a Difference
                      </DialogTitle>
                    </DialogHeader>
                    <div className="aspect-video px-6 pb-6">
                      <iframe
                        className="h-full w-full rounded-md"
                        src="https://www.youtube.com/embed/_pkW1dyXfJQ?autoplay=1"
                        title="Rzamba Foundation film"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        referrerPolicy="no-referrer"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                variant="outline"
                className="relative border-2 border-[#fff] text-[#fff] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group w-full sm:w-auto min-w-[180px] bg-transparent overflow-hidden"
              >
                <span className="relative z-10">Learn more</span>
                <div className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left text-white"></div>
              </Button>
            </div>
          </div>

          {/* Video Thumbnail Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <button
                onClick={() => setOpen(true)}
                className="block w-full group"
                aria-label="Play video"
              >
                <img
                  src="/gallery1.webp"
                  alt="Rzamba Foundation making impact in Ladakh communities"
                  className="w-full h-72 md:h-96 object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Play Button */}
                <div className="absolute inset-0 grid place-items-center">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl">
                        <Play className="size-8 text-blue-600 ml-1" />
                      </div>
                      {/* Pulsing Ring Effect */}
                      <div className="absolute inset-0 w-20 h-20 bg-white/30 rounded-full animate-ping opacity-60" />
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                  2:30 min
                </div>
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl" />
            <div className="absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-cyan-200 rounded-full opacity-30 blur-xl" />
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
