import { Table, TableCell, TableRow } from "@/components/ui/table";
import { FC } from "react";

type Availability = {
  day: string;
  time: {
    start: { hour: number; period: "AM" | "PM" };
    end: { hour: number; period: "AM" | "PM" };
  }[];
};

const availabilityData: Availability[] = [
  {
    day: "Sun",
    time: [
      { start: { hour: 10, period: "AM" }, end: { hour: 1, period: "PM" } },
    ],
  },
  {
    day: "Mon",
    time: [
      { start: { hour: 7, period: "AM" }, end: { hour: 9, period: "AM" } },
      { start: { hour: 5, period: "PM" }, end: { hour: 11, period: "PM" } },
    ],
  },
  {
    day: "Tue",
    time: [
      { start: { hour: 7, period: "AM" }, end: { hour: 9, period: "AM" } },
      { start: { hour: 5, period: "PM" }, end: { hour: 11, period: "PM" } },
    ],
  },
  {
    day: "Wed",
    time: [
      { start: { hour: 7, period: "AM" }, end: { hour: 9, period: "AM" } },
    ],
  },
  {
    day: "Thu",
    time: [
      { start: { hour: 7, period: "AM" }, end: { hour: 9, period: "AM" } },
    ],
  },
  {
    day: "Fri",
    time: [
      { start: { hour: 7, period: "AM" }, end: { hour: 9, period: "AM" } },
    ],
  },
  {
    day: "Sat",
    time: [
      { start: { hour: 10, period: "AM" }, end: { hour: 1, period: "PM" } },
    ],
  },
];

const AvailabilityTable: FC = () => (
  <Table className="w-full min-w-56 text-left">
    <TableRow className="border-b">
      <TableCell className="font-bold">Day</TableCell>
      <TableCell className="font-bold text-right">Time</TableCell>
    </TableRow>
    {availabilityData.map(({ day, time }) => (
      <TableRow key={day} className="border-b">
        <TableCell>{day}</TableCell>
        <TableCell className="text-right">
          {time.map(({ start, end }, index) => (
            <div key={index}>
              {start.hour} {start.period} - {end.hour} {end.period}
            </div>
          ))}
        </TableCell>
      </TableRow>
    ))}
  </Table>
);

export default AvailabilityTable;
