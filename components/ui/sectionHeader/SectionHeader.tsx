interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className=" text-center max-w-2xl mx-auto my-8 text-secondary">
      <h2 className="text-3xl lg:text-5xl mb-2">{title}</h2>
      <p className="">{description}</p>
    </div>
  );
};

export default SectionHeader;
