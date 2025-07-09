'use client';

import Header from "@/components/layout/header/header";
import Footer from "@/components/footer/Footer";
import Button from "@/components/ui/button/Button";
import { useEffect, useState } from "react";

const services = [
  {
    icon: "🔬",
    category: "Product Development",
    title: "Custom Product Development",
    description: "We design and build medical devices and diagnostics with rapid iterations, usability-focused design, and full compliance.",
    features: [
      "Rapid prototyping & iteration",
      "User-centered design approach",
      "Clinical workflow integration",
      "Regulatory compliance (FDA, CE)",
      "Risk management & testing",
      "Design controls implementation"
    ],
    deliverables: ["Product specifications", "Design documentation", "Prototypes", "Testing reports"],
    timeline: "3-12 months",
    industries: ["Medical Devices", "Diagnostics", "Therapeutics"]
  },
  {
    icon: "🤖",
    category: "AI & Software",
    title: "AI & Software Engineering",
    description: "Diagnostic decision support systems, predictive analytics tools, and intelligent SaaS platforms tailored for clinical use.",
    features: [
      "Machine learning model development",
      "Clinical decision support systems",
      "Predictive analytics platforms",
      "Natural language processing",
      "Computer vision for medical imaging",
      "Cloud-native architecture"
    ],
    deliverables: ["AI models", "Software platforms", "APIs", "Documentation"],
    timeline: "2-8 months",
    industries: ["Healthcare AI", "Digital Health", "Clinical Analytics"]
  },
  {
    icon: "📡",
    category: "IoT & Hardware",
    title: "IoT & Embedded Systems",
    description: "Remote monitoring, wearables, connected infrastructure — we build the firmware, sensors, and interfaces.",
    features: [
      "Embedded firmware development",
      "Sensor integration & calibration",
      "Wireless connectivity solutions",
      "Real-time data processing",
      "Power optimization",
      "Security implementation"
    ],
    deliverables: ["Hardware prototypes", "Firmware", "Mobile apps", "Cloud backend"],
    timeline: "4-10 months",
    industries: ["Wearables", "Remote Monitoring", "Smart Medical Devices"]
  },
  {
    icon: "🏭",
    category: "Manufacturing",
    title: "Manufacturing & Prototyping",
    description: "CAD design, PCB assembly, pilot production, and DFM engineering for cost-effective scaling.",
    features: [
      "Design for Manufacturing (DFM)",
      "Rapid prototyping (3D printing)",
      "PCB design & assembly",
      "Pilot production runs",
      "Quality assurance testing",
      "Supply chain optimization"
    ],
    deliverables: ["CAD models", "Production prototypes", "Manufacturing specs", "Quality plans"],
    timeline: "2-6 months",
    industries: ["Medical Devices", "Electronics", "Hardware Manufacturing"]
  },
  {
    icon: "📋",
    category: "Regulatory",
    title: "Regulatory Affairs & Compliance",
    description: "Navigate complex regulatory pathways with expert guidance for FDA, CE marking, and other global approvals.",
    features: [
      "FDA 510(k) submissions",
      "CE marking documentation",
      "ISO 13485 implementation",
      "Clinical trial design",
      "Risk management (ISO 14971)",
      "Post-market surveillance"
    ],
    deliverables: ["Regulatory submissions", "Quality systems", "Clinical protocols", "Compliance reports"],
    timeline: "6-18 months",
    industries: ["Medical Devices", "Pharmaceuticals", "Digital Therapeutics"]
  },
  {
    icon: "🔒",
    category: "Security & Privacy",
    title: "Cybersecurity & Data Protection",
    description: "Comprehensive security solutions designed specifically for healthcare environments and sensitive medical data.",
    features: [
      "HIPAA compliance implementation",
      "Penetration testing",
      "Security architecture design",
      "Data encryption & privacy",
      "Incident response planning",
      "Security training programs"
    ],
    deliverables: ["Security assessments", "Compliance documentation", "Security systems", "Training materials"],
    timeline: "1-4 months",
    industries: ["Healthcare IT", "Medical Devices", "Digital Health"]
  }
];

const processSteps = [
  {
    phase: "Discovery",
    title: "Requirements & Strategy",
    description: "We analyze your needs, market opportunity, and technical requirements to create a comprehensive project roadmap.",
    duration: "1-2 weeks",
    activities: ["Stakeholder interviews", "Market research", "Technical feasibility", "Project planning"]
  },
  {
    phase: "Design",
    title: "Architecture & Prototyping", 
    description: "Our team designs the system architecture and creates functional prototypes to validate concepts early.",
    duration: "2-6 weeks",
    activities: ["System design", "User experience design", "Rapid prototyping", "Proof of concept"]
  },
  {
    phase: "Development",
    title: "Build & Integration",
    description: "Full-scale development with continuous testing, integration, and quality assurance throughout the process.",
    duration: "8-24 weeks",
    activities: ["Agile development", "Continuous testing", "System integration", "Quality assurance"]
  },
  {
    phase: "Validation",
    title: "Testing & Compliance",
    description: "Comprehensive testing, regulatory compliance verification, and preparation for market launch.",
    duration: "4-12 weeks",
    activities: ["Clinical validation", "Regulatory submission", "Performance testing", "User acceptance"]
  },
  {
    phase: "Launch",
    title: "Deployment & Support",
    description: "Successful market launch with ongoing support, maintenance, and continuous improvement.",
    duration: "Ongoing",
    activities: ["Market deployment", "User training", "Technical support", "Performance monitoring"]
  }
];

const expertise = [
  { area: "Medical Device Development", years: "8+", projects: "150+" },
  { area: "AI/ML Implementation", years: "6+", projects: "80+" },
  { area: "Regulatory Submissions", years: "10+", projects: "45+" },
  { area: "IoT Integration", years: "7+", projects: "120+" },
  { area: "Clinical Validation", years: "9+", projects: "60+" },
  { area: "Manufacturing Scale-up", years: "8+", projects: "90+" }
];

const certifications = [
  { name: "ISO 13485", description: "Medical Device Quality Management" },
  { name: "ISO 14971", description: "Risk Management for Medical Devices" },
  { name: "ISO 27001", description: "Information Security Management" },
  { name: "HIPAA", description: "Healthcare Privacy & Security" },
  { name: "FDA 510(k)", description: "Medical Device Clearance" },
  { name: "CE Marking", description: "European Conformity" }
];

export default function ServicesPage() {
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
              Our Services
            </div>
            
            <h1 className="text-5xl md:text-8xl font-thin mb-8 leading-tight">
              End-to-End <span className="text-[#B277AB]">Healthcare</span> Innovation
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-12">
              From R&D to regulatory clearance, Bralvio builds cutting-edge medical devices, software, and AI tools to bring your vision to market
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                label="Explore Services"
                arrow
                classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-8 py-4 hover:bg-[#5B3557] transition-colors duration-300 font-medium"
              />
              <Button
                label="Schedule Consultation"
                arrow
                classNames="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-colors duration-300 backdrop-blur-sm"
              />
            </div>
          </div>
        </section>

        {/* Expertise Metrics */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {expertise.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[#B277AB] mb-2">{item.years}</div>
                  <div className="text-lg font-semibold mb-1">{item.area}</div>
                  <div className="text-sm text-gray-400">{item.projects} projects</div>
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
                Comprehensive <span className="text-[#B277AB]">Service</span> Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Full-spectrum healthcare technology services from concept to market
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-white/10 hover:border-[#B277AB]/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <div className="text-sm text-[#B277AB] font-medium mb-1">{service.category}</div>
                      <h3 className="text-2xl font-bold group-hover:text-[#B277AB] transition-colors duration-300">
                        {service.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Timeline</div>
                      <div className="text-sm font-medium text-[#B277AB]">{service.timeline}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-[#B277AB] mb-3">Core Capabilities</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 bg-[#B277AB] rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-[#B277AB] mb-3">Key Deliverables</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((deliverable, idx) => (
                          <span key={idx} className="text-xs bg-white/5 px-2 py-1 rounded border border-white/10">
                            {deliverable}
                          </span>
                        ))}
                      </div>
                      
                      <h4 className="text-sm font-semibold text-[#B277AB] mb-2 mt-4">Industries</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.industries.map((industry, idx) => (
                          <span key={idx} className="text-xs bg-[#B277AB]/20 text-[#B277AB] px-2 py-1 rounded">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <Button
                      label="Learn More"
                      arrow
                      classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-4 py-2 hover:bg-[#5B3557] transition-colors duration-300 text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-32 px-6 md:px-16 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Proven <span className="text-[#B277AB]">Development</span> Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach that ensures successful project delivery from concept to market
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#B277AB] to-transparent"></div>
                  )}
                  
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-2xl border border-white/10">
                    <div className="w-12 h-12 bg-[#B277AB] text-black font-bold text-lg rounded-full flex items-center justify-center mb-4">
                      {index + 1}
                    </div>
                    
                    <div className="text-sm text-[#B277AB] font-medium mb-1">{step.phase}</div>
                    <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{step.description}</p>
                    
                    <div className="text-xs text-[#B277AB] font-medium mb-2">Duration: {step.duration}</div>
                    
                    <ul className="space-y-1">
                      {step.activities.slice(0, 2).map((activity, idx) => (
                        <li key={idx} className="text-xs text-gray-500 flex items-center">
                          <span className="w-1 h-1 bg-gray-500 rounded-full mr-2"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industry <span className="text-[#B277AB]">Certifications</span> & Standards
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Ensuring compliance and quality across all healthcare technology domains
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-white/10">
                  <h3 className="text-lg font-bold text-[#B277AB] mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-400">{cert.description}</p>
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
                Ready to Transform Your <span className="text-[#B277AB]">Healthcare</span> Innovation?
              </h2>
              <p className="text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
                Let&apos;s discuss how our comprehensive services can bring your healthcare technology vision to life
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button
                  label="Start Your Project"
                  arrow
                  classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-8 py-4 hover:bg-[#5B3557] transition-colors duration-300 font-semibold"
                />
                <Button
                  label="Download Service Guide"
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