import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function PeriodList() {

    const testAdd = useMutation(api.periods.testAdd);

  return <div>Period List
    <button onClick={() => testAdd()}>Add Test Periods</button>
  </div>;
}