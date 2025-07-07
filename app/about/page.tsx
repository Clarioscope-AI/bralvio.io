'use client';

import Header from "@/components/layout/header/header";
import Footer from "@/components/footer/Footer";
import Image, { StaticImageData } from "next/image";
import officeImage from "@/assets/about/office.png";
import { partners } from "@/data/partnerData";
import Button from "@/components/ui/button/Button";

// ✅ Define the partner type
type Partner = {
  image: StaticImageData;
  name: string;
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="bg-black text-white font-sans">
        {/* Hero Section */}
        <section className="min-h-[60vh] rounded-xl flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-black to-gray-900">
          <h1 className="text-5xl md:text-[160px] font-thin mb-6">
            <span className="relative z-10">About</span>{" "}
            <span className="relative z-10 text-purple-400">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Our mission is to engineer intelligence into life through AI, MedTech, and clinical-grade innovation.
          </p>
        </section>

        {/* Company Overview */}
        <section className="py-20 px-6 md:px-16 text-center space-y-6">
          <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl font-light leading-8">
            Bralvio empowers visionary entrepreneurs, healthcare providers, and medtech companies to build smarter clinical solutions.
            We integrate artificial intelligence, IoT, and medical hardware with a clinical-first mindset to bring healthcare breakthroughs to life.
          </p>
        </section>

        {/* Office & Stats */}
        <section className="py-20 px-6 md:px-16 space-y-16">
          <div className="rounded-xl overflow-hidden border border-white/10">
            <Image
              src={officeImage}
              alt="Bralvio Office"
              width={1600}
              height={900}
              className="w-full object-cover h-[400px]"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <h3 className="text-4xl font-bold">2018</h3>
              <p className="text-gray-400 mt-2">Founded</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">12+</h3>
              <p className="text-gray-400 mt-2">Clinical Partners</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold">$1.2M</h3>
              <p className="text-gray-400 mt-2">Secured for Clients</p>
            </div>
          </div>
        </section>

        {/* Global Impact */}
        <section className="px-6 md:px-16 py-20 bg-white/5 rounded-2xl mx-4 md:mx-16 text-center space-y-6 border border-white/10">
          <h2 className="text-3xl font-semibold">A Global MedTech Force</h2>
          <p className="text-gray-300 max-w-2xl mx-auto font-light text-lg">
            Bralvio operates globally with teams and partners across the U.S., Africa, Asia, and Europe, helping innovators bring regulatory-ready healthtech to life.
          </p>
        </section>

        {/* Collaborators Logos */}
        <section className="py-20 px-6 md:px-16">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Trusted Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
            {partners.map((partner: Partner, i: number) => (
              <div
                key={i}
                className="flex items-center justify-center bg-white/5 p-4 rounded-xl border border-white/10 h-24"
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  className="object-contain"
                  width={160}
                  height={48}
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 md:px-16 text-center bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 rounded-2xl mx-4 md:mx-16 text-white space-y-6">
          <h2 className="text-4xl font-bold">The future of healthtech starts with Bralvio</h2>
          <p className="text-lg text-white/90 font-light">
            Ready to take your idea from prototype to product?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Button
              label="Submit a Project"
              arrow
              classNames="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-lg"
            />
            <Button
              label="Contact Us"
              arrow
              classNames="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
