import clsx from "clsx";
import { FC, ReactNode } from "react";
import { FaAngular, FaJsSquare, FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiJavascript, SiScratch, SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";

type Component = {
  title: string;
  icon: ReactNode;
};

const components: Component[] = [
  {
    title: "Angular",
    icon: <FaAngular size="96" color="#e36752" />,
  },
  {
    title: "React",
    icon: <FaReact size="96" color="aqua" />,
  },
  {
    title: "Java 21",
    icon: <FaJava size="96" color="orange" />,
  },
  {
    title: "Golang",
    icon: <FaGolang size="96" color="#34b7eb" />,
  },
  {
    title: "SQL (Postgres)",
    icon: <TbSql size="96" color="gray" />,
  },
  {
    title: "Python",
    icon: <FaPython size="96" color="gray" />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript size="96" color="#F0DB4F" />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript size="96" color="#4993e3" />,
  },
];
const Home: FC = () => {
  return (
    <>
      <h1 className="text-2xl">Tutoring Services</h1>
      <h2 className="text-lg">Software Development and Coding</h2>
      <div className="grid grid-cols-2 grid-auto-rows gap-4 m-4">
        {components.map((c, i) => (
          <div
            className={clsx(
              "border p-4 rounded-lg shadow-md flex items-center gap-8 justify-between",
              clsx({
                "flex-row": i % 2 === 1,
                "flex-row-reverse": i % 2 === 0,
                "animate-slidein": i % 2 === 1,
                "animate-slidein-right": i % 2 === 0,
              })
            )}
          >
            <hr />
            <h2 className="text-xl">{c.title} </h2>
            {c.icon}
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
