import Image from 'next/image';

interface LogoSectionProps {
  logos: string[];
}

export default function LogoSection({ logos }: LogoSectionProps) {
  return (
    <section className="mb-12">
      <div className="flex flex-wrap justify-center items-center space-x-6">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="Brand Logo"
            width={100}
            height={50}
            className="object-contain mx-2 my-4"
          />
        ))}
      </div>
    </section>
  );
}
