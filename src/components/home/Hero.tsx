import { Button } from "../ui/button";
import { ArrowRightCircle, UserPlus2Icon } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative p-4 min-h-[70vh] mx-auto flex flex-col items-center justify-center gap-4 pt-24">
      <div className="absolute inset-0 bg-[url('/assets/images/virus-bg.jpeg')] bg-cover bg-center blur-[3px]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent to-black/70 backdrop-blur-3xl opacity-70" />
      <div className="relative z-10 text-center md:max-w-[60%]">
        <h1 className="text-3xl font-bold text-white ">
          Ensuring <span className="text-emerald-500">Health & Safety</span> for
          Migrant Workers in Kerala
        </h1>
        <p className="text-white/80 mt-4">
          Register, Vaccinate, and Work Safely with Verified Health Records
        </p>

        <div className="flex items-center gap-4 justify-center mt-6">
          <Button variant="outline" className="text-white hover:scale-x-[103%]">
            Register at Hospital <ArrowRightCircle size={16} />
          </Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600">
            Self Register <UserPlus2Icon size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};
