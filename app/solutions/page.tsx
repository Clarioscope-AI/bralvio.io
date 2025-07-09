'use client';

import Header from "@/components/layout/header/header";
import Footer from "@/components/footer/Footer";
import Button from "@/components/ui/button/Button";
import { useEffect, useState } from "react";

const solutions = [
  {
    icon: "🧠",
    category: "AI-Powered Diagnostics",
    title: "Bralvio Clinical Assist",
    description: "AI-powered diagnostic assistant for clinicians that supports real-time treatment suggestions and improves patient outcomes.",
    features: [
      "Real-time diagnostic suggestions",
      "Evidence-based treatment recommendations",
      "Clinical decision support",
      "Integration with EMR systems",
      "Continuous learning algorithms"
    ],
    techStack: ["Machine Learning", "Natural Language Processing", "FHIR", "HL7"],
    compliance: ["HIPAA", "FDA 510(k)", "GDPR"],
    useCases: ["Emergency departments", "Primary care", "Specialty clinics"]
  },
  {
    icon: "🔗",
    category: "Integration Platform",
    title: "Medical Device Integration Platform",
    description: "Seamlessly connect clinical data sources and devices through Bralvio's compliant integration framework.",
    features: [
      "Universal device connectivity",
      "Real-time data synchronization",
      "Secure API management",
      "Compliance monitoring",
      "Custom workflow automation"
    ],
    techStack: ["RESTful APIs", "HL7 FHIR", "IoT Protocols", "Cloud Infrastructure"],
    compliance: ["HIPAA", "IEC 62304", "ISO 13485"],
    useCases: ["Hospitals", "Clinics", "Remote care", "Research facilities"]
  },
  {
    icon: "📱",
    category: "Remote Monitoring",
    title: "Remote Monitoring Suite",
    description: "Enables comprehensive patient tracking via wearables, IoT sensors, and centralized dashboards for continuous care.",
    features: [
      "Multi-device integration",
      "Real-time alerts and notifications",
      "Patient engagement tools",
      "Clinical dashboard analytics",
      "Predictive health insights"
    ],
    techStack: ["IoT Sensors", "Mobile Apps", "Cloud Analytics", "Machine Learning"],
    compliance: ["HIPAA", "FDA Class II", "CE Marking"],
    useCases: ["Chronic disease management", "Post-operative care", "Elderly monitoring"]
  },
  {
    icon: "⚡",
    category: "Workflow Optimization",
    title: "Clinical Workflow Automation",
    description: "Streamline clinical operations with intelligent automation tools that reduce administrative burden and improve efficiency.",
    features: [
      "Automated scheduling",
      "Smart resource allocation",
      "Predictive staffing",
      "Quality metrics tracking",
      "Compliance reporting"
    ],
    techStack: ["Process Automation", "Analytics Engine", "Integration APIs", "Dashboard UI"],
    compliance: ["HIPAA", "Joint Commission", "CMS Requirements"],
    useCases: ["Hospital operations", "Outpatient clinics", "Surgery centers"]
  },
  {
    icon: "🔒",
    category: "Data Security",
    title: "Healthcare Cybersecurity Suite",
    description: "Comprehensive security platform designed specifically for healthcare environments with advanced threat detection.",
    features: [
      "Advanced threat detection",
      "Zero-trust architecture",
      "Compliance monitoring",
      "Incident response automation",
      "Security awareness training"
    ],
    techStack: ["AI Security", "Blockchain", "Encryption", "Identity Management"],
    compliance: ["HIPAA", "HITECH", "SOC 2", "ISO 27001"],
    useCases: ["Healthcare networks", "Telemedicine", "Medical devices", "Cloud infrastructure"]
  },
  {
    icon: "📊",
    category: "Analytics & Insights",
    title: "Population Health Analytics",
    description: "Advanced analytics platform that transforms healthcare data into actionable insights for population health management.",
    features: [
      "Population health modeling",
      "Risk stratification",
      "Outcome prediction",
      "Cost optimization",
      "Quality measure reporting"
    ],
    techStack: ["Big Data Analytics", "Machine Learning", "Statistical Modeling", "Visualization"],
    compliance: ["HIPAA", "CMS Quality Programs", "HEDIS"],
    useCases: ["Health systems", "ACOs", "Payers", "Public health"]
  }
];

const industries = [
  { name: "Hospitals & Health Systems", icon: "🏥", count: "150+" },
  { name: "Medical Device Companies", icon: "🔬", count: "80+" },
  { name: "Pharmaceutical", icon: "💊", count: "45+" },
  { name: "Telemedicine Providers", icon: "💻", count: "60+" },
  { name: "Research Institutions", icon: "🧪", count: "30+" },
  { name: "Healthcare Startups", icon: "🚀", count: "200+" }
];

const benefits = [
  {
    title: "Faster Time to Market",
    description: "Pre-built components and proven frameworks accelerate your development timeline by 60%",
    metric: "60% faster"
  },
  {
    title: "Regulatory Compliance",
    description: "Built-in compliance features ensure your solutions meet healthcare industry standards",
    metric: "100% compliant"
  },
  {
    title: "Cost Reduction",
    description: "Reduce development costs with our reusable platform components and shared infrastructure",
    metric: "40% savings"
  },
  {
    title: "Scalable Architecture",
    description: "Cloud-native solutions that scale from pilot programs to enterprise deployments",
    metric: "Unlimited scale"
  }
];

export default function SolutionsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredSolutions = activeTab === "all" 
    ? solutions 
    : solutions.filter(solution => solution.category.toLowerCase().includes(activeTab));

  const categories = ["all", "ai-powered", "integration", "remote", "workflow", "security", "analytics"];

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
              Technology Solutions
            </div>
            
            <h1 className="text-5xl md:text-8xl font-thin mb-8 leading-tight">
              Healthcare Technology <span className="text-[#B277AB]">Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed mb-12">
              Explore Bralvio&apos;s pre-built and customizable technology platforms designed to solve modern clinical and operational challenges
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                label="Explore Solutions"
                arrow
                classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-8 py-4 hover:bg-[#5B3557] transition-colors duration-300 font-medium"
              />
              <Button
                label="Request Demo"
                arrow
                classNames="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-colors duration-300 backdrop-blur-sm"
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#B277AB] mb-2">{benefit.metric}</div>
                  <div className="text-xl font-semibold mb-3">{benefit.title}</div>
                  <div className="text-gray-400 text-sm leading-relaxed">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Filter */}
        <section className="py-10 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === category
                      ? 'bg-[#B277AB] text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {category === "all" ? "All Solutions" : category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredSolutions.map((solution, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-2xl border border-white/10 hover:border-[#B277AB]/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{solution.icon}</div>
                    <div>
                      <div className="text-sm text-[#B277AB] font-medium mb-1">{solution.category}</div>
                      <h3 className="text-2xl font-bold group-hover:text-[#B277AB] transition-colors duration-300">
                        {solution.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-[#B277AB] mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {solution.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 bg-[#B277AB] rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-[#B277AB] mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.techStack.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="text-xs bg-white/5 px-2 py-1 rounded border border-white/10">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex gap-2">
                      {solution.compliance.slice(0, 2).map((comp, idx) => (
                        <span key={idx} className="text-xs bg-[#B277AB]/20 text-[#B277AB] px-2 py-1 rounded">
                          {comp}
                        </span>
                      ))}
                    </div>
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

        {/* Industries Section */}
        <section className="py-32 px-6 md:px-16 bg-white/5">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="text-[#B277AB]">Industries</span> Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              Our solutions power innovation across the entire healthcare ecosystem
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-2xl border border-white/10">
                  <div className="text-3xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                  <div className="text-2xl font-bold text-[#B277AB]">{industry.count}</div>
                  <div className="text-sm text-gray-400">clients served</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Process */}
        <section className="py-32 px-6 md:px-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Simple <span className="text-[#B277AB]">Implementation</span> Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From consultation to deployment, we ensure smooth integration with your existing systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", description: "Understand your specific needs and technical requirements", duration: "1-2 weeks" },
                { step: "02", title: "Customization", description: "Tailor our solutions to fit your workflows and compliance needs", duration: "2-4 weeks" },
                { step: "03", title: "Integration", description: "Seamlessly integrate with your existing systems and infrastructure", duration: "2-6 weeks" },
                { step: "04", title: "Deployment", description: "Launch with full support, training, and ongoing maintenance", duration: "1-2 weeks" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#B277AB] text-black font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-6">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">{process.description}</p>
                  <div className="text-sm text-[#B277AB] font-medium">{process.duration}</div>
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
                Ready to Transform Your <span className="text-[#B277AB]">Healthcare</span> Technology?
              </h2>
              <p className="text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
                Discover how our proven solutions can accelerate your innovation and improve patient outcomes
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button
                  label="Schedule Demo"
                  arrow
                  classNames="text-primary bg-[#B277AB] hover:text-white rounded-lg px-8 py-4 hover:bg-[#5B3557] transition-colors duration-300 font-semibold"
                />
                <Button
                  label="Download Solution Guide"
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