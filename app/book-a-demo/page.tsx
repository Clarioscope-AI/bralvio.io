'use client';

import Header from "@/components/layout/header/header";
import Footer from "@/components/footer/Footer";

export default function BookADemoPage() {
  return (
    <>
      <Header />

      <main className="bg-black text-white px-6 md:px-16 py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Book a Demo</h1>
        <p className="text-center text-gray-300 mb-10 font-light text-lg">
          Fill out the form below and our team will get in touch to schedule your personalized Bralvio demo.
        </p>

        <form className="space-y-6">
          <Input label="Full Name" />
          <Input label="Email Address" type="email" />
          <Input label="Preferred Date" type="date" />
          <Input label="Preferred Time" type="time" />
          <Textarea label="Tell us about your use case" />
          <button
            type="submit"
            className="bg-secondary text-black font-semibold py-3 px-6 rounded-lg w-full hover:bg-secondary/90 transition"
          >
            Schedule Demo
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}

const Input = ({ label, type = "text" }: { label: string; type?: string }) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm text-gray-400">{label}</label>
    <input
      type={type}
      className="bg-white/10 text-white p-3 rounded-lg border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
      placeholder={label}
      required
    />
  </div>
);

const Textarea = ({ label }: { label: string }) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm text-gray-400">{label}</label>
    <textarea
      className="bg-white/10 text-white p-3 rounded-lg border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary h-32"
      placeholder={label}
      required
    />
  </div>
);
