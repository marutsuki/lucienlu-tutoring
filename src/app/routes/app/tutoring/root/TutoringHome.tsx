import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { tutoringServices } from "@/config/tutoring.config";
import clsx from "clsx";
import { FC } from "react";
import { useNavigate } from "react-router";

const TutoringHome: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative h-[80vh] overflow-y-auto">
      {tutoringServices.map((group) => (
        <div>
          <h2 className="text-xl">{group.name}</h2>
          <Separator className="my-4" />
          <div className="flex gap-4 p-4">
            {group.services.map((service, index) => (
              <Card
                key={service.name}
                className={clsx("w-64 h-96 relative p-0 cursor-pointer", {
                  "animate-slidein": index === 0,
                  "animate-slidein-right": index > 0,
                })}
                onClick={() => navigate("/tutoring" + service.url)}
              >
                <CardContent className="p-0">
                  <img
                    className="rounded-lg w-64 h-96 object-cover"
                    src={service.imageUrl}
                    alt={service.name}
                  />
                  <div className="absolute bottom-0 left-0 bg-[rgba(0,0,0,0.5)] text-white p-4 rounded-lg">
                    <h2 className="text-lg">{service.name}</h2>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TutoringHome;
