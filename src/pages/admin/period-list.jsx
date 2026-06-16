import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function PeriodList() {

  const testAdd = useMutation(api.periods.testAdd);
  const periods = useQuery(api.periods.getPeriods);

  return <div>Period List

    {periods && periods.length === 0 && (
      <button className="btn" onClick={() => testAdd()}>Add Test Periods</button>
    )}
   
   <div className="grid grid-cols-5 overflow-x-auto">
    <div>
   {
    [1,2,3,4,5].map(day => (
      <PeriodTable key={day} periods={periods?.filter((p) => p.day === day && p.isOdd)} />
    ))
   }
   </div>
   </div>
  </div>;
}

function PeriodTable({ periods }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Is Odd</th>
          <th>Day</th>
          <th>Start Time</th>
          <th>End Time</th>
        </tr>
      </thead>
      <tbody>
        {periods?.map((period) => (
          <tr key={period._id}>
            <td>{period.name}</td>
            <td>{period.isOdd ? "Yes" : "No"}</td>
            <td>{period.day}</td>
            <td>{toHHMM(period.startTime)}</td>
            <td>{toHHMM(period.endTime)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function toHHMM(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  const AMPM = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${AMPM}`;
}
