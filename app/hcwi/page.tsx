import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mission } from "@/components/site/mission";
import { Newsletter } from "@/components/site/newsletter";

export default function HCWIPage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden">
            <Image
              src="/gallery4.webp"
              alt="Children’s drawings displayed on a board"
              width={1200}
              height={500}
              className="h-full w-full object-cover"
              priority
            />
          </Card>

          <div className="flex flex-col">
            <Badge className="w-fit bg-purple-300 text-primary-foreground">
              Foundational Learning
            </Badge>
            <h1 className="mt-3 text-balance text-3xl font-bold leading-tight sm:text-4xl">
              Holistic Child Wellbeing Initiative (HCWI)
            </h1>
            <p className="mt-3 text-pretty text-foreground/80">
              Focus Area: Foundational Learning Years (Nursery to Grade 3) HCWI
              is rZamba’s response to the foundational education crisis in
              Ladakh. We work alongside teachers, local youth, parents, school
              administrators, village education committees (VECs), and the
              education department to co-create solutions for better learning.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="rounded-lg border border-border bg-card/70 p-4">
                <h3 className="font-semibold">Key Strategies</h3>
                <ul className="mt-3 grid list-disc gap-2 pl-5">
                  <li>
                    <strong>Child-Centered Pedagogy</strong> through
                    Project-Based Learning (PBL){" "}
                  </li>
                  <li>
                    <strong>Community Leadership</strong> through parent and
                    village engagement
                  </li>
                  <li>
                    <strong>Strengthened School Systems</strong> through
                    improved planning, communication, and teacher
                    capacity-building
                  </li>
                </ul>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-border bg-muted/30 p-4">
                  <p className="text-2xl font-bold tabular-nums">45</p>
                  <p className="text-sm text-foreground/70">Schools engaged</p>
                </div>
                <div className="rounded-xl border border-border bg-muted/30 p-4">
                  <p className="text-2xl font-bold tabular-nums">200</p>
                  <p className="text-sm text-foreground/70">Teachers trained</p>
                </div>
                <div className="rounded-xl border border-border bg-muted/30 p-4">
                  <p className="text-2xl font-bold tabular-nums">6.2k</p>
                  <p className="text-sm text-foreground/70">
                    Learners impacted
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-purple-500 text-white hover:bg-purple-600"
              >
                <Link href="/donate">Make Donation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white bg-transparent"
              >
                <Link href="/contact">Contact us</Link>
              </Button>
              <Button asChild variant="ghost" className="hover:bg-muted">
                <Link href="/impact">See Impact</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program highlights */}
      <section className="border-y border-border/60 bg-[radial-gradient(900px_500px_at_15%_0%,_theme(colors.purple.200)_30%,_transparent),radial-gradient(900px_500px_at_85%_100%,_theme(colors.purple.300)_30%,_transparent)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <h2 className="text-2xl font-bold">Program Highlights</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Joyful Libraries",
                text: "Child-friendly libraries with read-alouds, story circles, and exploration.",
              },
              {
                title: "Teacher Mentoring",
                text: "On-site coaching and PBL lesson design with reflective practice.",
              },
              {
                title: "Community Circles",
                text: "Parents and VECs co-design activities for early literacy and numeracy.",
              },
              {
                title: "Learning Showcases",
                text: "Student exhibitions celebrate curiosity, craft, and collaboration.",
              },
              {
                title: "Local Context",
                text: "Culturally rooted materials reflecting Ladakh’s language and landscape.",
              },
              {
                title: "Wellbeing Focus",
                text: "Routines that nurture safety, belonging, and growth mindset.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card/70 p-5 shadow-sm"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-2 text-foreground/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Education Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming education in Ladakh through community-driven
            initiatives and sustainable learning solutions
          </p>
        </div>

        {/* Program 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl p-8 text-white">
              <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-semibold mb-4">
                Program 1
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Improving Learning Experiences
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      rISE Educator's Fellowships
                    </h4>
                    <p className="text-white/90 text-sm">
                      We support local youth to create engaging, inquiry-based
                      classroom experiences and develop as exemplary educators
                      for their villages. They also develop local school
                      libraries as community learning hubs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl h-64 md:h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-gray-500 text-lg">
                [Image: Educator's Fellowship]
              </span>
            </div>
          </div>
        </div>

        {/* Program 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl h-64 md:h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-gray-500 text-lg">
                [Image: Community Engagement]
              </span>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white">
              <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-semibold mb-4">
                Program 2
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Community & Parent Engagement
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Village Education Committees
                    </h4>
                    <p className="text-white/90 text-sm">
                      Strengthening community participation in school
                      development and educational outcomes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Mothers' Wellbeing Pilot
                    </h4>
                    <p className="text-white/90 text-sm">
                      Recognizing that children thrive when mothers thrive, we
                      pilot community-based solutions to address maternal
                      nutrition and overall wellbeing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program 3 */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
              <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-semibold mb-4">
                Program 3
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Khangritsa Yontan – Winter Community Classes
              </h3>
              <p className="text-white/90">
                Since 2019, these community classes have bridged learning gaps
                for rural children during Ladakh's long winter closures and
                limited internet connectivity.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl h-64 md:h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-gray-500 text-lg">
                [Image: Winter Classes]
              </span>
            </div>
          </div>
        </div>

        {/* Program 4 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl h-64 md:h-80 flex items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-gray-500 text-lg">
                [Image: School Leadership]
              </span>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-8 text-white">
              <span className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-semibold mb-4">
                Program 4
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Strengthening School Processes
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      School Head Leadership
                    </h4>
                    <p className="text-white/90 text-sm">
                      We support headmasters and headmistresses in developing
                      stronger school cultures, teacher mentoring systems, and
                      data-driven decision-making.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Parent-Teacher Meetings
                    </h4>
                    <p className="text-white/90 text-sm">
                      By regularizing and strengthening PTMs, we create space
                      for trust-building, feedback, and shared responsibility
                      for children's learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Education Initiatives
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Learning at Doorstep, Winter Learning Spaces, School Program
          </p>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Description */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Winter Community Class 2024
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In 2024, Rzamba organized the Winter Community Class (Learning at
              doorstep) to provide students with meaningful educational
              experiences during the harsh winter months. This initiative was
              spread across multiple communities in Kargil, ensuring that
              children remained engaged in both academic learning. Our efforts
              aimed to create an inclusive and enriching learning environment
              despite the challenges posed by extreme weather conditions.
            </p>
          </div>

          {/* Statistics Card */}
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Program Impact
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold mb-1">9</div>
                <div className="text-sm opacity-90">Communities</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">369</div>
                <div className="text-sm opacity-90">Total Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-1">2024</div>
                <div className="text-sm opacity-90">Year</div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800">
              Student Participation by Community
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-700">
                    Community
                  </th>
                  <th className="text-right py-4 px-6 font-semibold text-gray-700">
                    Number of Students
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { community: "Styankung", students: 49 },
                  { community: "Tambis", students: 35 },
                  { community: "Kukshow", students: 49 },
                  { community: "Shellkchey", students: 29 },
                  { community: "Apati", students: 37 },
                  { community: "Tumail", students: 24 },
                  { community: "Sharbat Gound", students: 58 },
                  { community: "Chulichan", students: 39 },
                  { community: "Mundiq", students: 49 },
                ].map((row, index) => (
                  <tr
                    key={row.community}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <td className="py-4 px-6 font-medium text-gray-800">
                      {row.community}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className="inline-flex items-center justify-center bg-purple-100 text-purple-800 font-semibold px-3 py-1 rounded-full text-sm">
                        {row.students} students
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <td className="py-4 px-6 font-bold text-gray-800">Total</td>
                  <td className="py-4 px-6 text-right">
                    <span className="inline-flex items-center justify-center bg-purple-600 text-white font-bold px-4 py-2 rounded-full">
                      369 students
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            * Winter Community Classes conducted across Kargil region during
            harsh winter months
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 md:p-12 space-y-8 border border-gray-200 dark:border-gray-700">
        {/* Fellowship Program Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Fellowship Program – rZamba Fellowship details, alumni impact.
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The Rzamba Fellowship Program is a remarkable initiative that
            empowers local youth in Kargil by equipping them with the skills and
            knowledge needed for teaching. Organized annually, this fellowship
            serves as a platform for aspiring educators to receive hands-on
            training, mentorship, and exposure to innovative teaching
            methodologies. By recruiting passionate individuals from the
            community, the program not only enhances their professional growth
            but also strengthens the education system in the region. Through
            this initiative, Rzamba aims to foster a new generation of dedicated
            educators who can bring meaningful change to classrooms and inspire
            young learners.
          </p>
        </div>

        {/* Alumni Impact Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Alumni Impact of the Rzamba Fellowship Through Project-Based
            Learning
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Rzamba Fellowship Program
            </span>{" "}
            has been instrumental in transforming education in Kargil through{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">
              Project-Based Learning (PBL)
            </span>
            . Alumni like{" "}
            <span className="font-medium">
              Riyaz, Ghulam, Zaheer, Kaneez Fatima, and others
            </span>{" "}
            have actively implemented PBL in schools, making learning more
            engaging, relevant, and student-centered.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            During their two-year fellowship, these educators designed projects
            that connected classroom concepts with real-life experiences.
            Whether exploring{" "}
            <span className="font-semibold">local water sources</span>,{" "}
            <span className="font-semibold">
              documenting traditional stories
            </span>
            , <span className="font-semibold">studying plant diversity</span>,
            or <span className="font-semibold">mapping historical sites</span>,
            they encouraged students to{" "}
            <span className="font-semibold text-green-600 dark:text-green-400">
              ask questions, investigate, and present their findings
            </span>{" "}
            creatively.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Through this hands-on approach, students developed{" "}
            <span className="font-semibold">
              critical thinking, problem-solving, and collaboration skills
            </span>
            , making education more meaningful. The fellows witnessed remarkable
            growth—not just in the students, but also in their own ability to
            design impactful learning experiences.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Today, as Rzamba alumni, they continue to advocate for{" "}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              experiential and community-based learning
            </span>
            , ensuring that education in Kargil is not limited to textbooks but
            extends to the real world. Their journey stands as a testament to
            how{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Project-Based Learning can empower both educators and students to
              become active learners and changemakers
            </span>
            .
          </p>
        </div>
      </div>

      <Mission />
      <Newsletter />
    </main>
  );
}
