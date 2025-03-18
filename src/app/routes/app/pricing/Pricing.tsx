import { FC } from "react";
import PricingCard from "./PricingCard";

type Offer = {
  name: string;
  description: string;
  price: number;
  features: { title: string; description: string }[];
};
const offers: Offer[] = [
  {
    name: "Trial",
    description: "See if I am the right tutor for you.",
    price: 25,
    features: [
      {
        title: "Initial Assessment",
        description:
          "Evaluate current skill level and identify areas for improvement.",
      },
      {
        title: "Personalized Feedback",
        description: "Receive tailored feedback on strengths and weaknesses.",
      },
      {
        title: "Goal Setting",
        description:
          "Set clear learning objectives and goals for future sessions.",
      },
    ],
  },
  {
    name: "Private 1-on-1",
    description: "Maximize learning and growth in the shortest amount of time.",
    price: 50,
    features: [
      {
        title: "Customized Lesson Plans",
        description:
          "Receive lesson plans tailored to your specific needs and goals.",
      },
      {
        title: "Personalized Materials and Resources",
        description:
          "Receive homework and materials crafted by me adjusting to your needs.",
      },
      {
        title: "Flexible Scheduling",
        description: "Schedule sessions at times that are convenient for you.",
      },
    ],
  },
  {
    name: "Group",
    description: "Learn together with friend(s) for a reduced rate.",
    price: 35,
    features: [
      {
        title: "Group-tailored Preparations",
        description:
          "Receive customized materials and resources for group learning.",
      },
      {
        title: "Collaborative Homework",
        description: "Engage in group assignments to reinforce learning.",
      },
      {
        title: "Progress Tracking",
        description:
          "Monitor your progress with regular assessments and feedback.",
      },
    ],
  },
];

const Pricing: FC = () => {
  return (
    <div className="flex flex-col gap-4 p-4 m-16">
      <section>
        <h1 className="text-2xl text-center">Pricing</h1>
        <p className="text-center text-muted-foreground">
          Choose the best option for your needs
        </p>
      </section>

      <section className="flex gap-4 justify-center items-center">
        {offers.map((offer, index) => (
          <PricingCard
            key={index}
            name={offer.name}
            description={offer.description}
            notes={offer.features}
            className="mr-4"
            price={offer.price}
          >
            {offer.name}
          </PricingCard>
        ))}
      </section>
    </div>
  );
};

export default Pricing;
