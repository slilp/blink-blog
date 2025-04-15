import Image from "next/image";

interface ExperienceCardProps {
  logo: string;
  title: string;
  company: string;
  desc: string[];
  from: string;
  to: string;
  height?: number;
  width?: number;
}

function ExperienceCard({
  logo,
  title,
  company,
  desc,
  from,
  to,
  height = 80,
  width = 80,
}: ExperienceCardProps) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-5">
      <div className="flex gap-7 min-w-80">
        <div className="w-20 flex items-center justify-center">
          <Image
            alt={company}
            src={logo}
            height={height}
            width={width}
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <p className="text-sm">{company}</p>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-gray-500 text-sm">
            {from} -{" "}
            {to === "Present" ? (
              <span className="font-semibold text-green-700 dark:text-green-500">
                Present
              </span>
            ) : (
              to
            )}
          </p>
        </div>
      </div>

      <div className="w-full">
        <ul className="list-disc list-inside text-sm">
          {desc.map((item, index) => (
            <li key={`exp-content-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
