'use client';

import Header from "@/components/layout/header/header";
import Footer from "@/components/footer/Footer";

export default function FundingHelpPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white px-6 md:px-16 py-20 text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">Startup & Funding Support</h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg font-light">
          Bralvio helps healthtech innovators secure capital through technical insight, pitch support, and working MVPs.
        </p>

        <div className="max-w-4xl mx-auto text-left space-y-6">
          <ul className="list-disc list-inside text-gray-300">
            <li>Investor-ready pitch decks & visuals</li>
            <li>Grant writing and SBIR proposal support</li>
            <li>ROI estimation and pricing validation</li>
            <li>Working MVPs to demo to investors</li>
            <li>Clinical validation prep & certification strategy</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
