import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FC } from "react";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import AvailabilityTable from "./AvailabilityTable";

const Contact: FC = () => {
  return (
    <section className="h-full grid grid-cols-2 place-items-center p-12">
      <div className="max-w-96 m-24 animate-slidein">
        <h2 className="text-lg font-bold">Cancellation Policy</h2>
        <p>
          Please notify me of lesson cancellation 24 hours before the scheduled
          time. Otherwise, a cancellation fee will be charged.
        </p>
        <Separator className="m-4" />
        <h2 className="text-lg font-bold">Lesson Bookings</h2>
        <p>
          Please attempt to make bookings at least 24 hours before the desired
          date/time. Any last minute bookings will be assessed on a case by case
          basis.
        </p>
        <Separator className="m-4" />
        <h2 className="text-lg font-bold">Online / Offline</h2>
        <p>
          <div className="flex gap-2">
            <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-sky-500" />
            <p className="w-11/12">
              Online lessons are recommended for non-elementary students as
              there is little difference between the interactions in a
              face-to-face lesson vs. collaborating via a shared coding
              environment.
            </p>
          </div>
          <div className="flex gap-2">
            <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-sky-500" />
            <p className="w-11/12">
              For offline lessons however, I am located within Melbourne,
              Victoria, AU and will require the student to be within driving
              range.
            </p>
          </div>
        </p>
      </div>
      <div className="flex gap-8 animate-slidein-right">
        <Card className="max-w-96 shadow-lg">
          <CardContent className="flex flex-col gap-2">
            <img
              src="/profile-2.jfif"
              className="rounded-lg object-cover w-48 place-self-center"
            />
            <small className="font-heading">Contact</small>
            <div className="flex items-center gap-2">
              <MdMail size="24" />
              lucienlu2000@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <FaPhone size="20" />
              +61 468 435 818
            </div>
          </CardContent>
        </Card>
        <div>
          <h2 className="text-lg font-bold text-right">Availability</h2>
          <AvailabilityTable />
        </div>
      </div>
    </section>
  );
};

export default Contact;
