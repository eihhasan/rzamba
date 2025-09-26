import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ImpactStatsTable from "@/components/impact/impact-state-table";
import { Mission } from "@/components/site/mission";
import { Newsletter } from "@/components/site/newsletter";

export default function ImpactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative isolate">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20">
          <div className="grid items-start gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <Image
                src="/gallery3.webp"
                alt="Student receiving learning materials in Ladakh"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </Card>

            <div className="flex flex-col gap-6">
              <header>
                <p className="text-sm font-semibold uppercase tracking-wide text-purple-500">
                  Our Impact
                </p>
                <h1 className="mt-2 text-balance text-3xl font-bold leading-tight sm:text-4xl">
                  Our Impact (2022–2024)
                </h1>
                <p className="mt-3 text-pretty text-foreground/80">
                  We partner with schools, communities, and local leaders across
                  Ladakh to create equitable access to joyful, meaningful
                  learning for every child.
                </p>
              </header>

              <ImpactStatsTable />

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  asChild
                  variant="default"
                  className="bg-purple-500 text-white hover:bg-purple-600 "
                >
                  <Link href="/donate">Donate now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-500 hover:text-white bg-transparent"
                >
                  <Link href="/volunteer">Become a volunteer</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices from the field */}
      <section
        className="border-y border-border/60 bg-[radial-gradient(900px_500px_at_15%_0%,_theme(colors.purple.200)_30%,_transparent),radial-gradient(900px_500px_at_85%_100%,_theme(colors.purple.300)_30%,_transparent)]"
        aria-labelledby="voices-title"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 id="voices-title" className="text-2xl font-bold">
            Voices from the field
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <blockquote className="rounded-lg border border-border bg-card/70 p-6 shadow-sm">
              <p className="text-pretty leading-relaxed">
                “Before rZamba came to our school, learning felt like something
                we just had to finish. Now, with new library and activity-based
                learning, school has become a place we are excited to go to.”
              </p>
              <footer className="mt-4 text-sm text-foreground/70">
                — Ayan, Grade 5 Student
              </footer>
            </blockquote>
            <blockquote className="rounded-lg border border-border bg-card/70 p-6 shadow-sm">
              <p className="text-pretty leading-relaxed">
                “The project-based approach helped our teachers develop critical
                thinking and confidence. We see students owning their learning
                more than ever before.”
              </p>
              <footer className="mt-4 text-sm text-foreground/70">
                — Parent, Leh District
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-muted/40 p-6">
          <h3 className="text-lg font-semibold">
            Want to see detailed annual reports?
          </h3>
          <div className="flex gap-3">
            <Button
              asChild
              className="bg-purple-500 text-white hover:bg-purple-600 "
            >
              <Link href="/partner">Partner with us</Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="border-purple-600 text-purple-600 hover:bg-purple-500 hover:text-white bg-transparent"
            >
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            💬 Voices from the Field
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="space-y-8">
          {/* Student Testimonial */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Student Testimonial
            </h3>
            <p className="text-gray-700 italic mb-4">
              "Before rZamba Trust came to our school, learning felt like
              something we just had to do. But now, with the new library and
              exciting project-based learning, school has become fun and
              interesting. We get to explore new ideas, work on hands-on
              projects that make us think critically and creatively, and read
              books we never had before. Through these projects, I've learned to
              solve real problems, work with my classmates, and express my ideas
              better. I've learned so much and feel more confident about my
              future. Thank you, rZamba Trust!"
            </p>
            <p className="text-gray-900 font-medium">
              – Ayan, G.M.S Titichumik
            </p>
          </div>

          {/* Parent Testimonial 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Parent Testimonial
            </h3>
            <p className="text-gray-700 mb-4">
              "During our Winter Community Classes, one of the parents,
              initially, did not understand our teaching method (Project-Based
              Learning or PBL). He believed that we were only doing drawing and
              painting in the classroom and requested us to assign traditional
              homework like writing and reading. For many parents, education is
              still associated with conventional homework assignments, such as
              rote learning through writing and reading.
            </p>
            <p className="text-gray-700 mb-4">
              We took the time to have an open conversation with him to explain
              the principles of Project-Based Learning, including how it
              encourages students to engage in hands-on, real-world projects and
              creates a public product as part of the learning process. We also
              explained how this approach helps students develop critical
              thinking, creativity, and problem-solving skills.
            </p>
            <p className="text-gray-700 mb-4">
              Once he saw the progress and changes in his daughter's confidence
              and learning, he realized how effective and meaningful this method
              was. He apologized for his initial misunderstanding and expressed
              that this approach is far better than traditional methods. He even
              said that he believes all teachers in schools should adopt this
              teaching style.
            </p>
            <p className="text-gray-700 mb-4">
              This experience was a powerful reminder of how important it is to
              engage with parents and share the value of active, hands-on
              learning. It showed how students can learn deeply and meaningfully
              through doing rather than simply memorizing facts."
            </p>
            <p className="text-gray-900 font-medium">Hakima Banoo</p>
            <p className="text-gray-600 text-sm">Program Lead, rZamba Trust</p>
          </div>

          {/* Parent Testimonial 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Parent Testimonial
            </h3>
            <p className="text-gray-700 italic mb-4">
              "As a parent from Lobar Choskore, my name is Mohd Hassan, and I am
              the father of Samana Banoo, a student of Class 3 at GMS Lobar. I
              have witnessed a remarkable transformation in my child's approach
              to learning. rZamba Trust has not only provided quality education
              but has also actively involved us in the process. The regular
              meetings and home assessments have helped us realize the
              importance of our role in shaping our child's future. I am
              incredibly grateful to the rZamba team for fostering such a
              supportive environment for both parents and children."
            </p>
          </div>

          {/* Community Member Testimonial */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Community Member Testimonial
            </h3>
            <p className="text-gray-700 italic mb-4">
              "rZamba Trust has brought real change to our community. Their
              programs, especially the Winter Community Classes, have ensured
              that our children continue learning even during the harshest
              winter months. The Youth Fellowship Program has empowered local
              youth to take charge of educational transformation and contribute
              meaningfully to the community. It's inspiring to see their
              dedication to ensuring every child has the opportunity to succeed.
              rZamba's efforts have truly made a lasting impact."
            </p>
            <p className="text-gray-900 font-medium">
              – Nazeer, VEC Titichumik
            </p>
          </div>

          {/* Teacher Testimonial */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-2">
              Teacher Testimonial
            </h3>
            <p className="text-gray-700 italic mb-4">
              "Being the principal of G.M.S Ghulam Qadir Zaki Chanigound, I have
              seen first-hand the transformative impact of rZamba Trust on our
              school. The library they established has completely changed the
              way our students engage with learning. The wide range of resources
              and books has sparked curiosity among students, while the
              Project-Based Learning approach has encouraged critical thinking
              and creativity. Their teacher training programs have empowered us
              with new strategies, enabling us to teach more effectively.
              rZamba's efforts have truly been a game-changer for our school."
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
              Annual Reports – Downloadable PDFs of yearly impact
            </button>
          </div>
        </div>
      </div>

      <Mission />
      <Newsletter />
    </main>
  );
}
