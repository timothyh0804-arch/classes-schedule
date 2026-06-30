import { getDaysInMonth, isMonday, isTuesday, setDate } from "date-fns";
import { DAYSINWEEK } from "../utils/constats";
import { NavLink } from "react-router";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

const FAKE_DATA = [
  {
    day: 0,
    startTime: 450,
    name: "Period 0",
    durationHr: 1,
  },
  {
    day: 0,
    startTime: 510,
    name: "Period 1",
    durationHr: 2.5 /*hour*/,
  },
];

export default function MainSchedule() {
  const periods = useQuery(api.periods.getPeriods);
  const [events, setEvents] = useState(FAKE_DATA);

  let d = new Date();
  //   d.setMonth(month);
  //   d.setFullYear(year);
  let firstDay = setDate(d, 1);

  return (
    <div className="h-screen w-full">
      <div className="flex justify-center">
        <div className="mx-6 mb-6 text-5xl text-medium">
          Main Schedule {periods.length}
        </div>
      </div>
      <div className="sm:flex">
        <div className="bg-gray-100 w-full">
          <div
            className="grid"
            style={{
              gridTemplateColumns: "auto 1fr 1fr 1fr 1fr 1fr",
              gridTemplateRows: "auto",
              gridAutoRows: 80,
            }}
          >
            <div></div>
            {"Mo,Tu,Wed,Th,Fr".split(",").map((v) => (
              <div key={v} className="flex justify-center">
                {v}
              </div>
            ))}
            {new Array(10)
              .fill(0)
              .map((v, i) => i + 7)
              .map((startTime) => (
                <Fragment key={startTime}>
                  <div
                    className="pr-3 flex justify-end items-center  left-2 border-r"
                    style={{
                      top: "calc(50% - 3px)",
                    }}
                  >
                    {Math.floor(startTime / 60) % 12 === 0
                      ? 12
                      : Math.floor(startTime / 60) % 12}
                    {Math.floor(startTime / 60) > 11 ? " PM" : " AM"}
                  </div>
                  {new Array(5).fill(0).map((__, day) => (
                    <div className="border-b border-r flex items-start relative">
                      {events
                        .filter(
                          (v) =>
                            v.day === day &&
                            Math.floor(v.startTime / 60) ===
                              Math.floor(v.startTime / 60),
                        )
                        .map((v) => (
                          <div
                            className="border ml-1 p-1 absolute bg-gray-500 -left-1 z-2 w-full flex justify-center items-center"
                            style={{
                              top: `${top}%`,
                              height: `${v.durationHr * 100}%`,
                            }}
                          >
                            {v.name}
                          </div>
                        ))}
                    </div>
                  ))}
                </Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
