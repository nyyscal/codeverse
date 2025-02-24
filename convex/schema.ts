import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users:defineTable({
    userId: v.string(), //Clerk User ID
    email: v.string(),
    name: v.string(),
    isPro: v.boolean(),
    proSince: v.optional(v.number()),
    lemonSqueezyCustomerId: v.optional(v.string()),
    lemonSqueezyOrderId: v.optional(v.string()),
  }).index("by_user_id",["userId"]),

  codeExecutions: defineTable({
    userId: v.string(),
    language: v.string(),
    code: v.string(),
    output: v.optional(v.string()),
    error: v.optional(v.string()),
  }).index("by_user_id",["userId"]),

  snippets: defineTable({
    userId: v.string(),
    title: v.string(),
    language: v.string(),
    code: v.string(),
    username: v.string(),
  }).index("by_user_id",["userId"]),

  snippetComments: defineTable({
    snippetId: v.id("snippets"),
    userId: v.string(),
    userName: v.string(),
    content: v.string(), //HTML Content
  }).index("snippet",["snippetId"]),

  stars: defineTable({
    userId: v.id("users"),
    snippetId: v.id("snippets",)
  })
  .index("by_user_id",["userId"])
  .index("snippet",["snippetId"])
  .index("by_user_id_and_snippet_id",["userId","snippetId"])
})