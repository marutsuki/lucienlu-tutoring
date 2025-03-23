import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type Quote = {
  from: string;
  quote: string;
};

const quotes: Quote[] = [
  {
    from: `A. Wang`,
    quote: `Lucien is excellent at explaining programming concepts and helped me break down complex tasks into simple and understandable problems.`,
  },
  {
    from: `K. Gao`,
    quote: `Lucien is a remarkable teammate and a great leader. Not only does he enforce efficient coordination across the teams he has led, but he is also technically adept enough to provide guidance and mentorship to his teammates.`,
  },
  {
    from: `A. Rudrakshawar`,
    quote: `I am thrilled to recommend Lucien as a talented software engineer. During our time working together, I was consistently impressed by Lucien’s technical skills, dedication, and problem-solving abilities.

Lucien has a strong grasp of various programming languages and frameworks, and his ability to quickly learn new technologies is truly remarkable. He approaches challenges with a positive attitude and a creative mindset, often coming up with innovative solutions that greatly enhance our projects.

Beyond his technical prowess, Lucien is an excellent team player. He communicates effectively with peers and is always willing to lend a hand or share his knowledge. His collaborative spirit fosters a positive work environment and encourages others to excel.`,
  },
];

const points: string[] = [
  "Dean's Honours List 2022 - University of Melbourne",
  "4 Years of Industry Experience",
  "3.95 GPA",
  "Subject Tutor at the University of Melbourne",
  "2 Years of Tutoring Experience",
];

const MAX_QUOTE_LEN = 250;

const AboutMe: React.FC = () => {
  const [expanded, setExpanded] = useState(quotes.map(() => false));
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-24 justify-center items-center m-16">
      <div className="flex flex-col gap-4 animate-slidein">
        <h2 className="text-lg">Testimonials</h2>
        {quotes.map((quote, index) => (
          <div key={index} className="text-sm">
            <p className="flex items-end w-80 lg:w-96">
              {expanded[index]
                ? quote.quote
                : quote.quote.slice(0, MAX_QUOTE_LEN)}
              {quote.quote.length > MAX_QUOTE_LEN && !expanded[index] && "..."}
              {quote.quote.length > MAX_QUOTE_LEN && (
                <Button
                  className="!bg-transparent !outline-none !border-none"
                  variant="link"
                  onClick={() =>
                    setExpanded((prev) => [
                      ...prev.slice(0, index),
                      !prev[index],
                      ...prev.slice(index + 1, quotes.length),
                    ])
                  }
                >
                  {expanded[index] ? "Less" : "More"}
                </Button>
              )}
            </p>
            <p className="italic">{quote.from}</p>
          </div>
        ))}
      </div>
      <div className="w-80 lg:w-96 flex flex-col gap-4 animate-slidein-right">
        <Avatar className="size-48">
          <AvatarImage className="object-cover" src="/profile.jpeg" />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
        <h2 className="text-lg">Lucien Lu</h2>
        <p>
          Experienced software engineer with over 4 years of experience in the
          IT industry. As a student, he demonstrated high academic performance
          and excelled at his studies at the University of Melbourne.
        </p>
        <ul className="flex flex-col gap-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
