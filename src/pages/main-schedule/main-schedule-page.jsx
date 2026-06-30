import { Fragment, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import MainSchedulePeriod from "./main-schedule-period";

const COLORS = [
  "bg-rose-500",
  "bg-orange-500",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-indigo-500",
  "bg-violet-500",
  "bg-pink-500",
];

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const HOURS = Array.from({ length: 10 }, (_, i) => i + 7);

export default function MainSchedulePage() {
  const [isOdd, setIsOdd] = useState(true);
  const periods = useQuery(api.periods.getPeriods);
  const chosenPeriods = periods?.filter((p) => p.isOdd === isOdd);

  const todayDow = new Date().getDay(); // 0=Sun, 1=Mon, …, 5=Fri, 6=Sat

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Class Schedule
          </h1>
          <p className="text-sm text-slate-400 mt-0.5">{isOdd ? "Odd" : "Even"} week</p>
        </div>
        <div className="flex items-center bg-slate-100 rounded-full p-1 gap-1">
          {[true, false].map((odd) => (
            <button
              key={String(odd)}
              onClick={() => setIsOdd(odd)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                isOdd === odd
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {odd ? "Odd" : "Even"}
            </button>
          ))}
        </div>
      </div>

      {/* Calendar grid */}
      <div className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div
            className="grid"
            style={{
              gridTemplateColumns: "52px repeat(5, 1fr)",
              gridTemplateRows: "44px",
              gridAutoRows: "96px",
            }}
          >
            {/* Top-left corner */}
            <div className="border-b border-slate-200 bg-slate-50" />

            {/* Day headers */}
            {DAYS.map((day, i) => {
              const isToday = todayDow === i + 1;
              return (
                <div
                  key={day}
                  className={`border-b border-l border-slate-200 flex items-center justify-center ${
                    isToday ? "bg-indigo-50" : "bg-slate-50"
                  }`}
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest ${
                      isToday ? "text-indigo-500" : "text-slate-400"
                    }`}
                  >
                    {day}
                  </span>
                </div>
              );
            })}

            {/* Hour rows */}
            {HOURS.map((hr) => (
              <Fragment key={hr}>
                {/* Time gutter */}
                <div className="border-b border-slate-100 flex items-start justify-end pr-2 pt-1 bg-slate-50">
                  <span className="text-[10px] font-medium text-slate-400 leading-none">
                    {hr <= 12 ? hr : hr - 12}
                    <span className="text-slate-300">
                      {hr >= 12 ? "p" : "a"}
                    </span>
                  </span>
                </div>

                {/* Day cells */}
                {[1, 2, 3, 4, 5].map((day) => {
                  const isToday = todayDow === day;
                  return (
                    <div
                      key={day}
                      className={`border-b border-l border-slate-100 relative ${
                        isToday ? "bg-indigo-50/40" : ""
                      }`}
                    >
                      {/* Half-hour tick */}
                      <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-slate-100 pointer-events-none" />

                      {chosenPeriods
                        ?.filter(
                          (p) =>
                            p.day === day &&
                            Math.floor(p.startTime / 60) === hr,
                        )
                        .map((p) => (
                          <MainSchedulePeriod
                            key={p._id}
                            period={p}
                            color={
                              COLORS[
                                chosenPeriods.indexOf(p) % COLORS.length
                              ]
                            }
                          />
                        ))}
                    </div>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
