'use client';

import Header from "@/components/layout/header/header";
import Footer from "@/components/footer/Footer";
import Button from "@/components/ui/button/Button";
import { useEffect, useState } from "react";

const fundingServices = [
  {
    icon: "📊",
    title: "Investor-Ready Pitch Decks",
    description: "Professional presentations that capture investor attention with compelling visuals and clear value propositions.",
    features: ["Market analysis", "Financial projections", "Competitive landscape", "Visual storytelling"]
  },
  {
    icon: "📝",
    title: "Grant Writing & SBIR Support",
    description: "Expert assistance with government grants and SBIR proposals to secure non-dilutive funding.",
    features: ["SBIR Phase I & II", "NIH/NSF grants", "State funding programs", "Compliance review"]
  },
  {
    icon: "💰",
    title: "ROI Estimation & Validation",
    description: "Data-driven financial modeling and pricing strategies that demonstrate clear return on investment.",
    features: ["Market sizing", "Revenue projections", "Cost analysis", "Pricing validation"]
  },
  {
    icon: "🚀",
    title: "Working MVPs & Demos",
    description: "Functional prototypes that showcase your technology's capabilities to potential investors.",
    features: ["Interactive demos", "Proof of concept", "Technical validation", "User testing"]
  },
  {
    icon: "🏥",
    title: "Clinical Validation Prep",
    description: "Strategic guidance for clinical trials and regulatory pathways to meet healthcare standards.",
    features: ["FDA strategy", "Clinical trial design", "Regulatory compliance", "Certification roadmap"]
  },
  {
    icon: "🤝",
    title: "Investor Connections",
    description: "Access to our network of healthcare-focused investors and venture capital firms.",
    features: ["VC introductions", "Angel networks", "Strategic partnerships", "Due diligence prep"]
  }
];

const successMetrics = [
  { value: "$1.2M+", label: "Total Funding Secured", description: "For our clients" },
  { value: "85%", label: "Success Rate", description: "Grant approval rate" },
  { value: "24", label: "Funded Startups", description: "Portfolio companies" },
  { value: "6 Months", label: "Average Timeline", description: "From pitch to funding" }
];

const fundingStages = [
  {
    stage: "Pre-Seed",
    amount: "$50K - $250K",
    focus: "MVP development, market validation",
    timeline: "3-6 months",
    description: "Perfect for proving your concept and building initial traction"
  },
  {
    stage: "Seed",
    amount: "$250K - $2M",
    focus: "Product development, team building",
    timeline: "6-12 months",
    description: "Scale your solution and prepare for market entry"
  },
  {
    stage: "Series A",
    amount: "$2M - $10M",
    focus: "Market expansion, clinical trials",
    timeline: "12-18 months",
    description: "Accelerate growth and achieve regulatory milestones"
  }
];

export default function FundingHelpPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
      
      <main className="bg-black text-white font-sans overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>
          
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#B277AB]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#5B3557]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          
          <div 
            className={`relative z-10 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center bg-[#B277AB]/20 rounded-full px-6 py-2 text-[#B277AB] text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-[#B277AB] rounded-full mr-2"></span>
              Funding Support
            </div>
            
            <h1 className="text-5xl md:text-8xl font-thin mb-8 leading-tight">
              Startup & <span className="text-[#B277AB]">Funding</span> Support
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-12">
              Bralvio helps healthtech innovators secure capital through technical insight, pitch support, and working MVPs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                label="Start Your Funding Journey"
                arrow
                classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-8 py-4 hover:bg-[#5B3557] transition-colors duration-300 font-medium"
              />
              <Button
                label="View Success Stories"
                arrow
                classNames="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-colors duration-300 backdrop-blur-sm"
              />
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {successMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#B277AB] mb-2">{metric.value}</div>
                  <div className="text-xl font-semibold mb-1">{metric.label}</div>
                  <div className="text-gray-400 text-sm">{metric.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Complete <span className="text-[#B277AB]">Funding</span> Ecosystem
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From initial pitch to successful funding round, we provide end-to-end support for healthtech startups
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fundingServices.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-white/10 hover:border-[#B277AB]/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#B277AB] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-[#B277AB] rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Funding Stages */}
        <section className="py-32 px-6 md:px-16 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Funding Stages We <span className="text-[#B277AB]">Support</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored strategies for each stage of your funding journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {fundingStages.map((stage, index) => (
                <div 
                  key={index}
                  className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-2xl border border-white/10"
                >
                  <div className="absolute top-4 right-4 text-xs bg-[#B277AB]/20 text-[#B277AB] px-3 py-1 rounded-full">
                    {stage.timeline}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{stage.stage}</h3>
                  <div className="text-3xl font-bold text-[#B277AB] mb-4">{stage.amount}</div>
                  <div className="text-lg font-semibold mb-4 text-gray-300">{stage.focus}</div>
                  <p className="text-gray-400 leading-relaxed">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-[#B277AB]">Proven</span> Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to securing funding for your healthtech innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Assessment", description: "Evaluate your technology, market opportunity, and funding readiness" },
                { step: "02", title: "Strategy", description: "Develop a tailored funding strategy and identify optimal funding sources" },
                { step: "03", title: "Preparation", description: "Create compelling pitch materials, MVPs, and due diligence packages" },
                { step: "04", title: "Execution", description: "Support through investor meetings, negotiations, and deal closure" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#B277AB] text-black font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{process.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{process.description}</p>
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
                Ready to Secure <span className="text-[#B277AB]">Funding</span> for Your HealthTech?
              </h2>
              <p className="text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
                Join the 24+ startups that have successfully raised capital with Bralvio&apos;s expert guidance
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button
                  label="Schedule Consultation"
                  arrow
                  classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-8 py-4 hover:bg-[#5B3557] transition-colors duration-300 font-semibold"
                />
                <Button
                  label="Download Funding Guide"
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