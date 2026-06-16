import { useMutation, useQuery, usePaginatedQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Link, NavLink } from "react-router";

export default function HomePage() {
  return (
    <div className="h-screen w-full">
      <div className="flex flex-col items-center p-5">
        <div className="text-5xl font-medium">
          Intro to the Student Planning App:
        </div>
        <p className="mt-5">Hello!! Welcome to the Student Planning App!</p>
        <p className="mb-6">
          *** FIX THIS LATER *** This small comprehensive guide will help you
          understand how to use this app to maximum efficiency for scheduling
          your busy day!!
        </p>
      </div>
      <div className="flex">
        <div className="w-1/3 ml-8 mr-3">
          <div className="text-xl mb-5">
            1. How to choose your classes ( *** FIX THIS LATER *** )
          </div>
          <ol>
            <li>
              - use the search bar to find the classes that you are taking
            </li>
            <li>
              - submit the button to finish choosing your classes and move onto
              the next page
            </li>
          </ol>
        </div>
        <div className="w-1/3 mx-3">
          <div className="text-xl mb-5">
            2. How to navigate the main schedule page ( *** FIX THIS LATER *** )
          </div>
          <ol>
            <li>
              - The main page will be a horizontal table that has a box
              representing everything that you have on that day
            </li>
            <li>
              - Each of the boxes will be editable by simply clicking on the box
            </li>
            <li>
              - You are able to schedule more things onto the app when you press
              on the "+" icon on the right of each day
            </li>
          </ol>
        </div>
        <div className="w-1/3 ml-3 mr-8">
          <div className="text-xl mb-5">
            3. How to add/edit a schedule ( *** FIX THIS LATER *** )
          </div>
          <ol>
            <li>
              - when you first enter the editing page for a schedule, you will
              be able to see the subject related to the event, details, and the
              due date + time.
            </li>
            <li>
              - The details will allow you to choose the type of schedule you
              have whether that is an assessment you have coming up, a homework
              that you have to finish, or anything else that is class-related.
            </li>
            <li>
              - you also have the option to type in a textbox about any further
              details that you want to remind yourself with at any moment.
            </li>
          </ol>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20">
        <div className="text-5xl mb-10">Thank You!!</div>
        <NavLink to="/classesList">
          <button className="border rounded-md p-2 bg-gray-200">
            Press this when you are ready to move on
          </button>
        </NavLink>
      </div>
    </div>
  );
}
