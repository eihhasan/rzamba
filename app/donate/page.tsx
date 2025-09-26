import type { Metadata } from "next";
import DonateForm from "@/components/form/donate-form";
import { Mission } from "@/components/site/mission";
import { Newsletter } from "@/components/site/newsletter";

export const metadata: Metadata = {
  title: "Donate | Rzamba",
  description:
    "Support Rzamba’s work in Ladakh with a one-time or monthly donation.",
};

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 md:px-8 lg:px-12 py-12 md:py-16 max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">
            Donate
          </h1>
          <p className="mt-3 text-muted-foreground">
            Different ways to support (monthly, one-time, corporate
            partnerships).
          </p>
        </header>

        <div className="rounded-xl border border-border p-6 md:p-8 bg-card">
          <DonateForm />
        </div>
      </section>
      <Mission />
      <Newsletter />
    </main>
  );
}
