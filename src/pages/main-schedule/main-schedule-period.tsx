import { Doc } from "../../../convex/_generated/dataModel";

type Props = {
  period: Doc<"periods">;
  color: string;
};

export default function MainSchedulePeriod({ period, color }: Props) {
  const start_hr = Math.floor(period.startTime / 60);
  const start_minute = period.startTime - start_hr * 60;
  const top_pct = (start_minute / 60) * 100;

  const duration_min = period.endTime - period.startTime;
  const height_pct = (duration_min / 60) * 100;

  return (
    <div
      className={`absolute ${color} rounded-lg shadow-sm overflow-hidden z-10 cursor-pointer
        transition-all duration-150 hover:brightness-110 hover:shadow-md`}
      style={{
        top: `${top_pct}%`,
        height: `${height_pct}%`,
        left: "3px",
        right: "3px",
      }}
    >
      <div className="h-full flex flex-col justify-center px-2.5 py-1 gap-0.5">
        <p className="text-white font-semibold text-xs leading-tight truncate drop-shadow-sm">
          {period.name}
        </p>
        <p className="text-white/70 text-[10px] leading-tight">
          {toHHMM(period.startTime)} – {toHHMM(period.endTime)}
        </p>
      </div>
    </div>
  );
}

function toHHMM(minutes: number) {
  const hr = Math.floor(minutes / 60);
  const min = minutes - hr * 60;
  const display = hr > 12 ? hr - 12 : hr === 0 ? 12 : hr;
  const suffix = hr >= 12 ? "pm" : "am";
  return `${display}:${min.toString().padStart(2, "0")}${suffix}`;
}
