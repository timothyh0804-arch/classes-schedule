import { Doc } from "../../../convex/_generated/dataModel";

type MainSchedulePeriodArgs = {
  period: Doc<"periods">;
};

export default function MainSchedulePeriod({
  period,
  color,
}: MainSchedulePeriodArgs & { color: string }) {
  const start_hr = Math.floor(period.startTime / 60);
  const start_minute = period.startTime - start_hr * 60;
  const start_margin_percent = Math.floor((start_minute / 60) * 100);

  const height_min = period.endTime - period.startTime;
  const height_percent = Math.floor((height_min / 60) * 100);

  return (
    <div
      className={`absolute p-1 ${color} z-10 w-full text-xs text-white rounded-md flex items-center justify-center`}
      style={{
        top: start_margin_percent + "%",
        height: height_percent + "%",
      }}
    >
      {period.name} {toHHMM(period.startTime)} - {toHHMM(period.endTime)}
    </div>
  );
}

function toHHMM(minutes: number) {
  const hr = Math.floor(minutes / 60);
  const minute = minutes - hr * 60;
  return `${hr}:${minute.toString().padStart(2, "0")}`;
}
