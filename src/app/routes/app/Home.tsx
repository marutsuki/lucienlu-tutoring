import { Separator } from "@/components/ui/separator";
import { FC, ReactNode } from "react";
import { FaBookOpen, FaCheck } from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";
import { MdOutlineSentimentSatisfied } from "react-icons/md";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

type Component = {
  label: string;
  points: string[];
  icon: ReactNode;
  bulletIcon: ReactNode;
};

const threeRs: Component[] & { length: 3 } = [
  {
    label: "Reliable",
    points: [
      "Open communication with students + parents/guardians",
      "Priority of and dedication into tutorial prep work",
      "Enrollment limits set to focus on existing students",
    ],
    icon: <MdOutlineSentimentSatisfied size="36" />,
    bulletIcon: <FaCheck />,
  },
  {
    label: "Resourceful",
    points: [
      "Self-crafted learning materials",
      "Externally resourced learning materials",
      "Tailored learning materials for every student",
    ],
    icon: <FaBookOpen size="36" />,
    bulletIcon: <FaCheck />,
  },
  {
    label: "Responsive",
    points: [
      "Out of teaching hours contact and support",
      "Emergency classes available (addressed case by case)",
      "Early notice of scheduling changes and conflicts",
    ],
    icon: <RiFeedbackFill size="36" />,
    bulletIcon: <FaCheck />,
  },
];
const Home: FC = () => {
  return (
    <div className="grid grid-cols-2 m-16 w-[80vw] left-0 top-0 place-self-center place-items-center">
      <section>
        <h1 className="text-2xl text-right">Tutoring Services</h1>
        <h2 className="text-lg text-right">Software Development and Coding</h2>
        <Separator className="my-8" />
        <div className="flex h-5 items-center justify-center w-full gap-8 text-lg">
          {threeRs.map((item, index) => (
            <>
              <HoverCard key={item.label}>
                <HoverCardTrigger className="cursor-pointer">
                  <Button
                    className="!bg-transparent !outline-none"
                    variant="link"
                  >
                    {item.label}
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit flex gap-4">
                  {item.icon}
                  <div>
                    <h3>Why?</h3>
                    <ul className="text-sm">
                      {item.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-center gap-2"
                        >
                          {item.bulletIcon}
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </HoverCardContent>
              </HoverCard>
              {index < threeRs.length - 1 && (
                <Separator orientation="vertical" />
              )}
            </>
          ))}
        </div>
      </section>
      <section className="group">
        <div className="h-72 w-96 bg-[url('home-image-1.jpg')] bg-cover translate-y-1/4 rounded-xl duration-300 hover:opacity-100! group-hover:opacity-25" />

        <div className="h-72 w-96 bg-[url('home-image-0.jpg')] bg-cover translate-x-1/4 -translate-y-1/4 rounded-xl duration-300 hover:opacity-100! group-hover:opacity-25" />
      </section>
    </div>
  );
};

export default Home;
