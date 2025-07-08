'use client';

import Header from "@/components/layout/header/header";
import Footer from "@/components/footer/Footer";
import Image, { StaticImageData } from "next/image";
import officeImage from "@/assets/about/office.png";
import { partners } from "@/data/partnerData";
import Button from "@/components/ui/button/Button";
import { useEffect, useState } from "react";

// ✅ Define the partner type
type Partner = {
  image: StaticImageData;
  name: string;
};

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />

      <main className="bg-black text-white font-sans overflow-hidden">
        {/* Hero Section with Parallax */}
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-20">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          
          <div 
            className={`relative z-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin mb-8 tracking-tight">
              <span className="inline-block hover:text-purple-400 transition-colors duration-300">About</span>{" "}
              <span className="inline-block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl font-light leading-relaxed mb-12">
              Engineering intelligence into life through AI, MedTech, and clinical-grade innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                label="Our Mission"
                arrow
                classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-8 py-4 hover:bg-[#5B3557] transition-colors duration-300 font-medium"
              />
              <Button
                label="Join Us"
                arrow
                classNames="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-colors duration-300 backdrop-blur-sm"
              />
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-32 px-6 md:px-16 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center bg-purple-600/20 rounded-full px-6 py-2 text-purple-300 text-sm font-medium">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Our Story
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Transforming Healthcare Through <span className="text-purple-400">Innovation</span>
                </h2>
                <p className="text-xl text-gray-300 font-light leading-relaxed">
                  Bralvio empowers visionary entrepreneurs, healthcare providers, and medtech companies to build smarter clinical solutions. We integrate artificial intelligence, IoT, and medical hardware with a clinical-first mindset to bring healthcare breakthroughs to life.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm border border-white/10">AI Integration</span>
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm border border-white/10">IoT Solutions</span>
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm border border-white/10">Medical Hardware</span>
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm border border-white/10">Clinical Research</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-white/10">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">2018</div>
                      <div className="text-gray-400">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-400 mb-2">12+</div>
                      <div className="text-gray-400">Clinical Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-400 mb-2">$1.2M</div>
                      <div className="text-gray-400">Secured for Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">4</div>
                      <div className="text-gray-400">Continents</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Image Section */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src={officeImage}
                  alt="Bralvio Office"
                  width={1600}
                  height={900}
                  className="w-full object-cover h-[500px] transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-2xl font-bold mb-2">Our Global Headquarters</h3>
                  <p className="text-gray-300">Where innovation meets execution</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Impact Section */}
        <section className="py-32 px-6 md:px-16 relative">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center bg-indigo-600/20 rounded-full px-6 py-2 text-indigo-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
              Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              A Global <span className="text-indigo-400">MedTech</span> Force
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-16">
              Bralvio operates globally with teams and partners across the U.S., Africa, Asia, and Europe, helping innovators bring regulatory-ready healthtech to life.
            </p>
            
            {/* World Map Visualization */}
            <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl p-12 border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">🇺🇸</span>
                  </div>
                  <h4 className="text-xl font-semibold">United States</h4>
                  <p className="text-gray-400">Silicon Valley Hub</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h4 className="text-xl font-semibold">Africa</h4>
                  <p className="text-gray-400">Innovation Centers</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">🌏</span>
                  </div>
                  <h4 className="text-xl font-semibold">Asia</h4>
                  <p className="text-gray-400">R&D Facilities</p>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-2xl">🇪🇺</span>
                  </div>
                  <h4 className="text-xl font-semibold">Europe</h4>
                  <p className="text-gray-400">Strategic Partners</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Trusted Partners</h2>
            <p className="text-gray-400 mb-16 text-lg">
              Collaborating with industry leaders to drive innovation forward
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {partners.map((partner: Partner, i: number) => (
                <div
                  key={i}
                  className="group relative bg-white/5 p-6 rounded-2xl border border-white/10 h-28 hover:bg-white/10 transition-all duration-300 hover:border-purple-400/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-2xl transition-all duration-300"></div>
                  <div className="relative flex items-center justify-center h-full">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                      width={120}
                      height={40}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 md:px-16 relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="absolute inset-0 bg-[#B277AB]/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-[#5B3557]/30 rounded-3xl p-16 border border-[#B277AB]/20 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                The future of healthtech starts with <span className="text-[#B277AB]">Bralvio</span>
              </h2>
              <p className="text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
                Ready to transform your innovative idea into a market-ready healthcare solution?
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button
                  label="Submit a Project"
                  arrow
                  classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-8 py-4 hover:bg-[#5B3557] transition-colors duration-300 font-semibold"
                />
                <Button
                  label="Contact Us"
                  arrow
                  classNames="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors duration-300 backdrop-blur-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Spacer */}
        <div className="h-20"></div>
      </main>

      <Footer />
    </>
  );
}