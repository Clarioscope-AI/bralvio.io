'use client';

import Header from "@/components/layout/header/header";
import Footer from "@/components/footer/Footer";

export default function SubmitProjectPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white px-6 md:px-16 py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Submit a Project</h1>
        <p className="text-center text-gray-300 mb-10 font-light text-lg">
          Tell us about your medtech idea — our intake system will match you with the right advisor.
        </p>

        <form className="space-y-6">
          <Input label="Your Name" />
          <Input label="Email Address" type="email" />
          <Input label="Project Title" />
          <Textarea label="Describe Your Idea" />
          <Input label="Estimated Budget ($)" />
          <Input label="Timeline (weeks/months)" />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg w-full"
          >
            Submit
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
      className="bg-white/10 text-white p-3 rounded-lg border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
      placeholder={label}
      required
    />
  </div>
);

const Textarea = ({ label }: { label: string }) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm text-gray-400">{label}</label>
    <textarea
      className="bg-white/10 text-white p-3 rounded-lg border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"
      placeholder={label}
      required
    />
  </div>
);
