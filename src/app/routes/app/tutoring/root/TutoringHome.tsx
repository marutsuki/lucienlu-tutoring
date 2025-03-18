import { tutoringServices } from "@/app/routes";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import { useNavigate } from "react-router";

const TutoringHome: FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-xl">Services</h2>
      <Separator className="m-4" />
      <div className="flex gap-4 m-4">
        {tutoringServices.map((service) => (
          <Card
            key={service.name}
            className="w-64 h-96 relative p-0"
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
  );
};

export default TutoringHome;
