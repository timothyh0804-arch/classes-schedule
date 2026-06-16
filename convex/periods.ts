// CRUD for periods

import { mutation, query } from "./_generated/server";

const testData = [
  {
    name: "Test Period",
    isOdd: true,
    day: 1,
    hour: 1,
  },
  {
    name: "Test Period 2",
    isOdd: false,
    day: 2,
    hour: 2,
  },
];


export const testAdd = mutation({
  args: {},
  handler: async (ctx) => {
    for (const period of testData) {
      await ctx.db.insert("periods", period);
    }
  },
});
