import PrimaryButton from "@/components/ui/button/PrimaryButton";


export default function Home() {
  return (
    <div className="bg-black py-20">
      <div className="flex justify-center items-center gap-4">
        <PrimaryButton
          label="Book a Demo"
          arrow={true}
          classNames="bg-secondary text-primary rounded-lg"
        />
      </div>
    </div>
  );
}
