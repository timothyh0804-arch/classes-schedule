import { getDaysInMonth, isMonday, isTuesday, setDate } from "date-fns";
import { DAYSINWEEK } from "../../utils/constats";
import { NavLink } from "react-router";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import MainSchedulePeriod from "./main-schedule-period";

const COLORS = [
  "bg-red-300",
  "bg-orange-300",
  "bg-yellow-300",
  "bg-green-300",
  "bg-blue-300",
  "bg-indigo-300",
  "bg-purple-300",
  "bg-pink-300",
];

export default function MainSchedulePage() {
  const periods = useQuery(api.periods.getPeriods);

  const chosenPeriods = periods?.filter((p) => p.isOdd);

  let d = new Date();
  //   d.setMonth(month);
  //   d.setFullYear(year);
  let firstDay = setDate(d, 1);

  return (
    <div className="h-screen w-full">
      <div className="flex justify-center">
        <div className="mx-6 mb-6 text-5xl text-medium">
          Main Schedule {periods?.length}
        </div>
      </div>
      <div className="sm:flex">
        <div className="bg-gray-100 w-full">
          <div
            className="grid"
            style={{
              gridTemplateColumns: "auto 1fr 1fr 1fr 1fr 1fr",
              gridAutoRows: 200,
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
              .map((_, i) => i + 7)
              .map((hr, i) => (
                <Fragment key={i}>
                  <div
                    className="pr-3 flex justify-end items-center  left-2 border-r"
                    style={{
                      top: "calc(50% - 3px)",
                    }}
                  >
                    {hr <= 12 ? hr : hr - 12} {hr >= 12 ? "PM" : "AM"}
                  </div>
                  {[1, 2, 3, 4, 5].map((day) => (
                    <div
                      key={day}
                      className="border-b border-r flex items-start relative"
                    >
                      {chosenPeriods &&
                        chosenPeriods
                          .filter(
                            (p) =>
                              p.day === day &&
                              Math.floor(p.startTime / 60) === hr,
                          )
                          .map((p) => (
                            <MainSchedulePeriod
                              period={p}
                              key={p._id}
                              color={
                                COLORS[chosenPeriods.indexOf(p) % COLORS.length]
                              }
                            />
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
