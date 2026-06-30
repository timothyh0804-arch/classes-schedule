// CRUD for periods

import { mutation, query } from "./_generated/server";

const testData = [
  // Odd Week
  // Monday
  { name: "Period 0", isOdd: true, day: 1, startTime: 450, endTime: 505 },
  { name: "Period 1", isOdd: true, day: 1, startTime: 510, endTime: 600 },
  { name: "Advisement", isOdd: true, day: 1, startTime: 615, endTime: 630 },
  { name: "Period 3", isOdd: true, day: 1, startTime: 635, endTime: 725 },
  { name: "Lunch", isOdd: true, day: 1, startTime: 725, endTime: 760 },
  { name: "Period 5", isOdd: true, day: 1, startTime: 765, endTime: 855 },
  { name: "Period 7", isOdd: true, day: 1, startTime: 870, endTime: 960 },

  // Tuesday
  { name: "Period 0", isOdd: true, day: 2, startTime: 450, endTime: 505 },
  { name: "Period 2", isOdd: true, day: 2, startTime: 510, endTime: 595 },
  { name: "Advisement", isOdd: true, day: 2, startTime: 610, endTime: 615 },
  { name: "Tutorial", isOdd: true, day: 2, startTime: 615, endTime: 650 },
  { name: "Period 4", isOdd: true, day: 2, startTime: 655, endTime: 740 },
  { name: "Lunch", isOdd: true, day: 2, startTime: 740, endTime: 775 },
  { name: "Period 6", isOdd: true, day: 2, startTime: 780, endTime: 865 },
  { name: "Period 8", isOdd: true, day: 2, startTime: 875, endTime: 960 },

  // Wednesday
  { name: "Period 0", isOdd: true, day: 3, startTime: 510, endTime: 565 },
  { name: "Period 1", isOdd: true, day: 3, startTime: 570, endTime: 650 },
  { name: "Period 3", isOdd: true, day: 3, startTime: 665, endTime: 745 },
  { name: "Lunch", isOdd: true, day: 3, startTime: 745, endTime: 780 },
  { name: "Period 5", isOdd: true, day: 3, startTime: 785, endTime: 865 },
  { name: "Period 7", isOdd: true, day: 3, startTime: 880, endTime: 960 },

  // Thursday
  { name: "Period 0", isOdd: true, day: 4, startTime: 450, endTime: 505 },
  { name: "Period 2", isOdd: true, day: 4, startTime: 510, endTime: 595 },
  { name: "Advisement", isOdd: true, day: 4, startTime: 610, endTime: 615 },
  { name: "Tutorial", isOdd: true, day: 4, startTime: 615, endTime: 650 },
  { name: "Period 4", isOdd: true, day: 4, startTime: 655, endTime: 740 },
  { name: "Lunch", isOdd: true, day: 4, startTime: 740, endTime: 775 },
  { name: "Period 6", isOdd: true, day: 4, startTime: 780, endTime: 865 },
  { name: "Period 8", isOdd: true, day: 4, startTime: 875, endTime: 960 },

  // Friday
  { name: "Period 0", isOdd: true, day: 5, startTime: 450, endTime: 505 },
  { name: "Period 1", isOdd: true, day: 5, startTime: 510, endTime: 600 },
  { name: "Advisement", isOdd: true, day: 5, startTime: 615, endTime: 630 },
  { name: "Period 3", isOdd: true, day: 5, startTime: 635, endTime: 725 },
  { name: "Lunch", isOdd: true, day: 5, startTime: 725, endTime: 760 },
  { name: "Period 5", isOdd: true, day: 5, startTime: 765, endTime: 855 },
  { name: "Period 7", isOdd: true, day: 5, startTime: 870, endTime: 960 },

  // Even Week
  // Monday
  { name: "Period 0", isOdd: false, day: 1, startTime: 450, endTime: 505 },
  { name: "Period 2", isOdd: false, day: 1, startTime: 510, endTime: 600 },
  { name: "Advisement", isOdd: false, day: 1, startTime: 615, endTime: 630 },
  { name: "Period 4", isOdd: false, day: 1, startTime: 635, endTime: 725 },
  { name: "Lunch", isOdd: false, day: 1, startTime: 725, endTime: 760 },
  { name: "Period 6", isOdd: false, day: 1, startTime: 765, endTime: 855 },
  { name: "Period 8", isOdd: false, day: 1, startTime: 870, endTime: 960 },

  // Tuesday
  { name: "Period 0", isOdd: false, day: 2, startTime: 450, endTime: 505 },
  { name: "Period 1", isOdd: false, day: 2, startTime: 510, endTime: 595 },
  { name: "Advisement", isOdd: false, day: 2, startTime: 610, endTime: 615 },
  { name: "Tutorial", isOdd: false, day: 2, startTime: 615, endTime: 650 },
  { name: "Period 3", isOdd: false, day: 2, startTime: 655, endTime: 740 },
  { name: "Lunch", isOdd: false, day: 2, startTime: 740, endTime: 775 },
  { name: "Period 5", isOdd: false, day: 2, startTime: 780, endTime: 865 },
  { name: "Period 7", isOdd: false, day: 2, startTime: 875, endTime: 960 },

  // Wednesday
  { name: "Period 0", isOdd: false, day: 3, startTime: 510, endTime: 565 },
  { name: "Period 2", isOdd: false, day: 3, startTime: 570, endTime: 650 },
  { name: "Period 4", isOdd: false, day: 3, startTime: 665, endTime: 745 },
  { name: "Lunch", isOdd: false, day: 3, startTime: 745, endTime: 780 },
  { name: "Period 6", isOdd: false, day: 3, startTime: 785, endTime: 865 },
  { name: "Period 8", isOdd: false, day: 3, startTime: 880, endTime: 960 },

  // Thursday
  { name: "Period 0", isOdd: false, day: 4, startTime: 450, endTime: 505 },
  { name: "Period 1", isOdd: false, day: 4, startTime: 510, endTime: 595 },
  { name: "Advisement", isOdd: false, day: 4, startTime: 610, endTime: 615 },
  { name: "Tutorial", isOdd: false, day: 4, startTime: 615, endTime: 650 },
  { name: "Period 3", isOdd: false, day: 4, startTime: 655, endTime: 740 },
  { name: "Lunch", isOdd: false, day: 4, startTime: 740, endTime: 775 },
  { name: "Period 5", isOdd: false, day: 4, startTime: 780, endTime: 865 },
  { name: "Period 7", isOdd: false, day: 4, startTime: 875, endTime: 960 },

  // Friday
  { name: "Period 0", isOdd: false, day: 5, startTime: 450, endTime: 505 },
  { name: "Period 2", isOdd: false, day: 5, startTime: 510, endTime: 600 },
  { name: "Advisement", isOdd: false, day: 5, startTime: 615, endTime: 630 },
  { name: "Period 4", isOdd: false, day: 5, startTime: 635, endTime: 725 },
  { name: "Lunch", isOdd: false, day: 5, startTime: 725, endTime: 760 },
  { name: "Period 6", isOdd: false, day: 5, startTime: 765, endTime: 855 },
  { name: "Period 8", isOdd: false, day: 5, startTime: 870, endTime: 960 },
];


export const testAdd = mutation({
  args: {},
  handler: async (ctx) => {
    let first = await ctx.db.query("periods").take(1);
    if (first.length > 0) return;  
    for (const period of testData) {
      await ctx.db.insert("periods", period);
    }
  },
});

export const getPeriods = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("periods").collect();
  },
});