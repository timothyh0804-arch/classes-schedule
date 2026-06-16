import { getDaysInMonth, isMonday, isTuesday, setDate } from "date-fns";
import { DAYSINWEEK } from "../utils/constats";
import { NavLink } from "react-router";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";

const FAKE_DATA = [
  {
    day: 0,
    hr: 8,
    name: "Period 0",
    durationHr: 1,
  },
  {
    day: 0,
    hr: 10,
    name: "Period 1",
    durationHr: 2.5 /*hour*/,
  },
];

export default function MainSchedule() {
  let d = new Date();
  //   d.setMonth(month);
  //   d.setFullYear(year);
  let firstDay = setDate(d, 1);

  const [events, setEvents] = useState(FAKE_DATA);

  return (
    <div className="h-screen w-full">
      <div className="flex justify-center">
        <div className="mx-6 mb-6 text-5xl text-medium">Main Schedule</div>
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
              .map((hr) => (
                <Fragment key={hr}>
                  <div
                    className="pr-3 flex justify-end items-center  left-2 border-r"
                    style={{
                      top: "calc(50% - 3px)",
                    }}
                  >
                    {hr % 12 === 0 ? 12 : hr % 12}
                    {hr > 11 ? " PM" : " AM"}
                  </div>
                  {new Array(5).fill(0).map((__, day) => (
                    <div className="border-b border-r flex items-start relative">
                      {events
                        .filter((v) => v.day === day && v.hr === hr)
                        .map((v) => (
                          <div
                            className="border ml-1 p-1 absolute bg-gray-500 left-1 z-2"
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
