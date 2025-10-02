import { Hero } from "@/components/home/Hero";
import { HowItWorksCard } from "@/components/home/HowItWorksCard";
import {
  BoxIcon,
  CheckCircle,
  ClipboardCheck,
  SparklesIcon,
  Syringe,
  UserPlus2Icon,
} from "lucide-react";

const HomePage = () => {
  const howItWorks = [
    {
      title: "Register Yourself",
      description:
        "Create your health profile by registering independently or through a certified hospital",
      icon: <UserPlus2Icon size={24} className="text-white" />,
    },
    {
      title: "Get Vaccinated",
      description:
        "Receive vaccinations and health check-ups to ensure your well-being.",
      icon: <Syringe size={24} className="text-white" />,
    },
    {
      title: "Work Safely",
      description:
        "Access verified health records to work safely and confidently.",
      icon: <ClipboardCheck size={24} className="text-white" />,
    },
  ];

  const benifits = [
    { title: "Prevent disease transmission" },
    { title: "Support Sustainable Development Goals (SDGs)" },
    { title: "Ensure fair healthcare access" },
    { title: "Enable safe employment opportunities" },
  ];

  return (
    <>
      <Hero />

      <div className="relative z-10 mt-8 w-full ">
        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center gap-1">
          How It Works <SparklesIcon />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-6xl mx-auto">
          {howItWorks.map((item, index) => (
            <HowItWorksCard
              key={index}
              title={item.title}
              subtitle={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary mb-4 mt-8 flex items-center ml-4 gap-1">
        <BoxIcon /> Benifits
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 justify-center items-center bg-white rounded-2xl mx-4">
        <div className="">
          {benifits.map((benifit, idx) => (
            <div
              key={idx}
              className="w-full rounded-2xl p-2 bg-white/60 border border-black/20 flex items-center gap-2 mb-2"
            >
              <CheckCircle className="text-accent mr-2" />{" "}
              <h3>{benifit.title}</h3>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center bg-secondary h-fit rounded-2xl object-contain max-w-full overflow-hidden max-h-56">
          <img src="/assets/images/working-team.jpg" alt="Team Working" className="h-full w-full aspect-square object-contain rounded-2xl" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
