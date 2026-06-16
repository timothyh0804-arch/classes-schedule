import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createClasses = mutation({
  args: {
    subjectID: v.number(),
  },
  handler: async (ctx, { subjectID }) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    const user = await ctx.db.get(userId);
    if (!user) {
      throw new Error("User not found");
    }

    const classes = {
        subjectID,
      studentID: userId,
    };
    await ctx.db.insert("classes", classes);
  },
});

export const deleteClasses = mutation({
    args: {
        classesID: v.id("classes"),
    },
    handler: async (ctx, { classesID }) => {
        const userId = await getAuthUserId(ctx);
        if (!userId) {
          throw new Error("Not authenticated");
        }
        const classes = await ctx.db.get(classesID);
        if (!classes) {
          throw new Error("Classes not found");
        }

        await ctx.db.delete(classesID);
    },
});

export const getClasses = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    const user = await ctx.db.get(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const classes = await ctx.db.query("classes").filter((q) => q.eq(q.field("studentID"), userId)).collect();
    return classes;
  },
});