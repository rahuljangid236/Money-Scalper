import { image } from "motion/react-client";
import { HoverEffect } from "./ui/card-hover-effect";

const WhyChooseSection = () => {
  return (
    <div className="container m-auto">
      WhyChooseSection
      <div className="mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default WhyChooseSection;

export const projects = [
  {
    title: "Expert Guidance",
    description:
      "Daily setups with video explanation. LIVE class every Saturday 7 PM",
    image: "/assets/expert-guidance.png",
    link: "https://stripe.com",
  },
  {
    title: "Risk-Free Practice",
    description:
      "Real market data. Unlimited mock tests. Leaderboards + prizes.",
    image: "/assets/expert-guidance.png",
    link: "https://netflix.com",
  },
  {
    title: "Expert Feedback",
    description:
      "Instant feedback on every trade. Setup quality rating. Risk audit. ",
    image: "/assets/expert-guidance.png",
    link: "https://google.com",
  },
  {
    title: "Complete Ecosystem",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    image: "/assets/expert-guidance.png",
    link: "https://meta.com",
  },
];
