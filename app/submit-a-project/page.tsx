'use client';
import { useState } from "react";
import Header from "@/components/layout/header/header";
import Footer from "@/components/footer/Footer";

export default function SubmitProjectPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;

    const body = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      projectTitle: (form.elements.namedItem('projectTitle') as HTMLInputElement)?.value,
      description: (form.elements.namedItem('description') as HTMLTextAreaElement)?.value,
      budget: (form.elements.namedItem('budget') as HTMLInputElement)?.value,
      timeline: (form.elements.namedItem('timeline') as HTMLInputElement)?.value,
    };

    const res = await fetch("/api/submit-project", {
      method: "POST",
      body: JSON.stringify(body),
    });

    const result = await res.json();
    setStatus(result.success ? "Submitted successfully!" : "Failed to submit.");
    setLoading(false);
  }

  return (
    <>
      <Header />
      <main className="bg-black text-white px-6 md:px-16 py-20 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Submit a Project</h1>
        <p className="text-center text-gray-300 mb-10 font-light text-lg">
          Tell us about your medtech idea — our intake system will match you with the right advisor.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input label="Your Name" name="name" />
          <Input label="Email Address" name="email" type="email" />
          <Input label="Project Title" name="projectTitle" />
          <Textarea label="Describe Your Idea" name="description" />
          <Input label="Estimated Budget ($)" name="budget" />
          <Input label="Timeline (weeks/months)" name="timeline" />
          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg w-full"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {status && <p className="text-sm text-center text-gray-400">{status}</p>}
        </form>
      </main>
      <Footer />
    </>
  );
}

const Input = ({
  label,
  type = "text",
  name,
}: {
  label: string;
  type?: string;
  name: string;
}) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm text-gray-400">{label}</label>
    <input
      type={type}
      name={name}
      className="bg-white/10 text-white p-3 rounded-lg border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
      placeholder={label}
      required
    />
  </div>
);

const Textarea = ({ label, name }: { label: string; name: string }) => (
  <div className="flex flex-col space-y-1">
    <label className="text-sm text-gray-400">{label}</label>
    <textarea
      name={name}
      className="bg-white/10 text-white p-3 rounded-lg border border-white/10 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 h-32"
      placeholder={label}
      required
    />
  </div>
);
