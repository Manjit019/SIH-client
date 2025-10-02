import type { FC } from "react";

interface HowItWorksCardProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  index?: number;
}
export const HowItWorksCard: FC<HowItWorksCardProps> = ({
  title,
  subtitle,
  icon,
  index,
}) => {
  const count = index !== undefined ? index + 1 : 1;

  return (
    <div className="bg-white p-6 rounded-lg text-left border border-border hover:bg-white/50 transition relative">
      <span className="font-bold absolute right-6 top-3 text-accent/10 text-6xl md:text-8xl">
        {count}
      </span>
      <div className="mb-4 flex items-center justify-center w-12 h-12  bg-emerald-500 rounded-xl shadow-2xl shadow-emerald-200">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
      <p className="text-black/80">{subtitle}</p>
    </div>
  );
};
