type SectionTitleProps = {
  title: string;
  className?: string;
};

export default function SectionTitle({ title, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl md:text-4xl font-serif text-center text-primary mb-8 ${className}`}>
      {title}
    </h2>
  );
}
