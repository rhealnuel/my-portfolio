import Image from "next/image";

interface ExperienceCardProps {
  logo: string;
  company: string;
  role: string;
  date: string;
  bullets: string[];
}

export default function ExperienceCard({
  logo,
  company,
  role,
  date,
  bullets,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-col sm:flex-row bg-white rounded-xl shadow-sm p-6 gap-4 sm:gap-6 w-full max-w-3xl">
      {/* Logo */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-start">
        <Image
          src={logo}
          alt={`${company} logo`}
          width={60}
          height={60}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
          <h3 className="font-semibold text-lg text-gray-900">{role}</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <ul className="mt-2 space-y-2 text-sm text-gray-700 list-disc list-inside">
          {bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
