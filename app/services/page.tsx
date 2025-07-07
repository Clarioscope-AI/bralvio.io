'use client';

import Header from "@/components/layout/header/header";
import Footer from "@/components/footer/Footer";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white px-6 md:px-16 py-20 space-y-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center">Our Services</h1>
        <p className="text-center text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light">
          From R&D to regulatory clearance, Bralvio builds cutting-edge medical devices, software, and AI tools to bring your vision to market.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <ServiceItem title="Custom Product Development" description="We design and build medical devices and diagnostics with rapid iterations, usability-focused design, and full compliance." />
          <ServiceItem title="AI & Software Engineering" description="Diagnostic decision support systems, predictive analytics tools, and intelligent SaaS platforms tailored for clinical use." />
          <ServiceItem title="IoT & Embedded Systems" description="Remote monitoring, wearables, connected infrastructure — we build the firmware, sensors, and interfaces." />
          <ServiceItem title="Manufacturing & Prototyping" description="CAD design, PCB assembly, pilot production, and DFM engineering for cost-effective scaling." />
        </div>
      </main>
      <Footer />
    </>
  );
}

const ServiceItem = ({ title, description }: { title: string; description: string }) => (
  <div className="border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);
