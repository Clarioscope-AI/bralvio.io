import PrimaryButton from "./components/ui/Button/PrimaryButton";

export default function Home() {
  return (
    <div>
      Hello from bralvio
      {/* call the button component for testing */}
      <div className="flex justify-center items-center gap-4">
        <PrimaryButton
          label="Book a Demo"
          arrow={true}
          classNames="hover:bg-purple-100"
        />
        <PrimaryButton
          label="Book a Demo"
          arrow={true}
          classNames=" bg-tertiary text-secondary border-2 border-purple-800 hover:bg-purple-600"
        />
      </div>
    </div>
  );
}
