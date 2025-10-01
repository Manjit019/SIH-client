import type { FC } from "react";

interface HowItWorksCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export const HowItWorksCard: FC<HowItWorksCardProps> = ({
  title,
  subtitle,
  icon,
}) => {
  return (
    <div
      className="bg-white p-6 rounded-lg text-center border border-border hover:bg-white/50 transition"
    >
      <div className="mb-4 flex items-center justify-center w-12 h-12 mx-auto bg-emerald-500 rounded-full">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
      <p className="text-black/80">{subtitle}</p>
    </div>
  );
};
