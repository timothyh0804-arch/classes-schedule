import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  ...authTables,
  periods: defineTable({
    name: v.string(),
    isOdd: v.boolean(),
    day: v.number(), // 0 = Monday, 5 = Friday
    startTime: v.number(), // minutes from midnight
    endTime: v.number(), // minutes from midnight
    courseId: v.optional(v.id("courses")),
  }),
  courses: defineTable({
    name: v.string(),
  }),
  enrollments: defineTable({
    studentId: v.id("users"),
    courseId: v.id("courses"),
  }),

  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    // additional fields
    isAdmin: v.optional(v.boolean()),
  })
    .index("email", ["email"])
    .index("phone", ["phone"]),

  // deprecated
  classes: defineTable({
    studentID: v.id("users"),
    subjectID: v.number(),
  }),
});

