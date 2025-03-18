import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { FaDollarSign } from "react-icons/fa";

type CardProps = {
  className?: string;
  name: string;
  description: string;
  price: number;
  notes: { title: string; description: string }[];
} & React.ComponentProps<typeof Card>;

const PricingCard: FC<CardProps> = ({
  className,
  name,
  description,
  price,
  notes,
  ...props
}) => {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="h-10">{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <FaDollarSign />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "AUD",
              })}
            </p>
            <p className="text-sm text-muted-foreground">Per hour</p>
          </div>
        </div>
        <div>
          {notes.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>{/* Lesson scheduling feature */}</CardFooter>
    </Card>
  );
};

export default PricingCard;
