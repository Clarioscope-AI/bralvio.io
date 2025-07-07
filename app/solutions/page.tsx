'use client';

import Header from "@/components/layout/header/header";
import Footer from "@/components/footer/Footer";

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white px-6 md:px-16 py-20 space-y-12">
        <h1 className="text-4xl md:text-6xl font-bold text-center">Healthcare Technology Solutions</h1>
        <p className="text-center text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-light">
          Explore Bralvio’s pre-built and customizable technology platforms designed to solve modern clinical and operational challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <SolutionCard title="Bralvio Clinical Assist" description="AI-powered diagnostic assistant for clinicians — supports real-time treatment suggestions and improves outcomes." />
          <SolutionCard title="Medical Device Integration Platform" description="Seamlessly connect clinical data sources and devices through Bralvio’s compliant integration framework." />
          <SolutionCard title="Remote Monitoring Suite" description="Enables patient tracking via wearables, IoT sensors, and centralized dashboards." />
        </div>
      </main>
      <Footer />
    </>
  );
}

const SolutionCard = ({ title, description }: { title: string; description: string }) => (
  <div className="border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);
