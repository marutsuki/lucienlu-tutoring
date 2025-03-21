import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  difficultyDescriptions,
  TutoringService,
} from "@/config/tutoring.config";
import { FC, ReactNode } from "react";
import { FaTerminal } from "react-icons/fa";

type TutoringServicePageProps = {} & TutoringService;

const MockBrowser: FC<{
  title?: string;
  children: ReactNode | ReactNode[];
}> = ({ title, children }) => {
  return (
    <section className="rounded-md border p-2 shadow-md max-w-96">
      <div className="flex space-x-1 mb-2 items-center">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        {title && <span className="flex-1 ml-0.5 text-sm">{title}</span>}
      </div>
      <div className="bg-background p-2 rounded-md">{children}</div>
    </section>
  );
};
const TutoringServicePage: FC<TutoringServicePageProps> = ({
  name,
  description,
  techs,
  points,
  recommendedFor,
  difficulty,
}) => {
  return (
    <div className="6">
      <div className="mb-4">
        <h1 className="text-xl">{name}</h1>
        <h2>Tutoring Service</h2>
      </div>
      <div className="flex flex-col gap-4 flex-wrap h-[36rem] max-h-[36rem] content-start">
        <MockBrowser title="Summary">
          <code className="text-sm">
            {description || "No description available"}
          </code>
        </MockBrowser>
        <Alert className="w-96">
          <FaTerminal className="h-4 w-4 size-6" />
          <AlertTitle>
            Difficulty: <u>{difficulty || "Unknown"}</u>
          </AlertTitle>
          <AlertDescription>
            {difficulty && difficultyDescriptions[difficulty]}
          </AlertDescription>
        </Alert>
        <MockBrowser title="Recommended For">
          <div className="text-sm">
            <ul className="flex flex-col">
              {recommendedFor?.map((target, index) => (
                <li key={index}>
                  <div className="flex">
                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-sky-500" />
                    <code className="ml-2 w-80">{target}</code>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </MockBrowser>
        <MockBrowser title="What to expect">
          <div className="text-sm">
            <ul className="flex flex-col gap-4">
              {points?.map((point, index) => (
                <li key={index}>
                  <code className="underline">{point.title}</code>
                  <div className="flex">
                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-sky-500" />
                    <code className="ml-2 w-80">{point.description}</code>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </MockBrowser>
        <MockBrowser title="Technologies">
          <code className="text-sm">
            <ul>
              {techs?.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </code>
        </MockBrowser>
      </div>
    </div>
  );
};

export default TutoringServicePage;
