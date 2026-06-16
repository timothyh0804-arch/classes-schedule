import { useState } from "react";
import { CLASSES } from "../utils/constats";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { NavLink } from "react-router";

export default function ClassesList() {
  let [searchStr, setSearchStr] = useState("");
  const classes = useQuery(api.classes.getClasses);
  const addClass = useMutation(api.classes.createClasses);
  const deleteClass = useMutation(api.classes.deleteClasses);

  function handleClassClick(i) {
    console.log(i, classes);
    if (selectedClassIds.includes(i)) {
      let c = classes.find((v) => v.subjectID === i);
      if (c) deleteClass({ classesID: c._id });
    } else addClass({ subjectID: i });
  }

  let selectedClassIds = classes?.map((v) => v.subjectID);

  if (typeof classes === "undefined") return <div>Loading</div>;

  return (
    <div className=" w-full border-4 border-red-500">
      <div className="flex flex-col items-center">
        <div className="mx-6 mt-6 text-5xl text-medium">List of Classes</div>
        <div className="mb-4">( Click the Classes that you are taking )</div>
        <input
          className="mx-6 mb-2 w-9/10 border rounded-md pl-3"
          value={searchStr}
          onChange={(ev) => setSearchStr(ev.target.value)}
        ></input>
      </div>
      <hr className="mt-2 mb-4" />
      <div className="mx-11 mb-4 border rounded-md p-3">
        {selectedClassIds.length == 0
          ? "No chosen classes. Chosen Classes will be shown here"
          : selectedClassIds.map((i) => (
              <div>- {CLASSES.find((v) => v.id === i)?.subject}</div>
            ))}
      </div>
      <hr className="mt-2 mb-4" />
      <div className="mx-11 border rounded-md p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 overflow-y-auto h-[400px]">
        {CLASSES.filter(
          (v) => v.subject.toLowerCase().indexOf(searchStr.toLowerCase()) != -1,
        ).map((v) => (
          <button
            key={v.id}
            className={`h-25 border border-black ${selectedClassIds.includes(v.id) ? "bg-green-200" : ""}`}
            onClick={() => handleClassClick(v.id)}
          >
            {v.subject}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center mt-20">
        <NavLink to="/mainSchedule">
          <button className="border rounded-md p-2 bg-gray-200">
            Press this when you are ready to move on
          </button>
        </NavLink>
      </div>
    </div>
  );
}
