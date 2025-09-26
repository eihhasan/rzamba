import type { Metadata } from "next";
import VolunteerForm from "../../components/form/volunteer-form";

export const metadata: Metadata = {
  title: "Volunteer | Rzamba",
  description:
    "Join Rzamba’s volunteer network and contribute to projects across Ladakh.",
};

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">
            Volunteer
          </h1>
          <p className="mt-3 text-muted-foreground">
            Opportunities for youth, professionals, and remote support.
          </p>
        </header>

        <div className="rounded-xl border border-border p-6 md:p-8 bg-card">
          <VolunteerForm />
        </div>
      </section>
    </main>
  );
}
