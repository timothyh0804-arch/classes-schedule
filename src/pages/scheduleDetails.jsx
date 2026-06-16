import { useState } from "react";

export default function scheduleDetails() {
  let [event, setEvents] = useState([]);

  let timeline = [
    "8:00",
    "8:30",
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "1:00",
    "1:30",
    "2:00",
    "2:30",
    "3:00",
    "3:30",
    "4:00",
    "4:30",
    "5:00",
    "5:30",
    "6:00",
    "6:30",
    "7:00",
    "7:30",
    "8:00",
  ];

  let timelineButtons = timeline.map((v) => (
    <button className="h-8 p-2 border flex justify-center items-center">
      {v}
    </button>
  ));

  return (
    <div className="h-screen w-full">
      <div className="flex justify-between items-center">
        <div className="text-6xl my-5 pl-6">5/22</div>
        <div className="w-26 h-12 mr-6 p-3 border border-black flex justify-center items-center bg-gray-300">
          Add Event
        </div>
      </div>
      <div className="border rounded-md p-5">
        <div className="grid grid-cols-25">
          <div className="grid grid-rows-25">{timelineButtons}</div>
        </div>
      </div>
    </div>
  );
}
