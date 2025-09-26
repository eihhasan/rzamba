import type { Metadata } from "next";
import PartnerForm from "@/components/form/partner-form";
import { Mission } from "@/components/site/mission";
import { Newsletter } from "@/components/site/newsletter";

export const metadata: Metadata = {
  title: "Partner with Us | Rzamba",
  description: "Collaborate with Rzamba on initiatives across Ladakh.",
};

export default function PartnerPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">
            Partner with Us
          </h1>
          <p className="mt-3 text-muted-foreground">
            Collaboration opportunities for organizations.
          </p>
        </header>

        <div className="rounded-xl border border-border p-6 md:p-8 bg-card">
          <PartnerForm />
        </div>
      </section>
      <Mission />
      <Newsletter />
    </main>
  );
}
