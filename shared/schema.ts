import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull().default("developer"),
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow(),
  lastActive: timestamp("last_active"),
});

export const apis = pgTable("apis", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  endpoint: text("endpoint").notNull(),
  method: text("method").notNull(),
  description: text("description"),
  schema: jsonb("schema"),
  status: text("status").notNull().default("active"),
  createdBy: integer("created_by").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
});

export const apiMetrics = pgTable("api_metrics", {
  id: serial("id").primaryKey(),
  apiId: integer("api_id").references(() => apis.id),
  date: timestamp("date").defaultNow(),
  totalCalls: integer("total_calls").notNull().default(0),
  errorCount: integer("error_count").notNull().default(0),
  avgResponseTime: integer("avg_response_time").notNull().default(0),
});

export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  plan: text("plan").notNull(),
  status: text("status").notNull().default("active"),
  currentPeriodStart: timestamp("current_period_start"),
  currentPeriodEnd: timestamp("current_period_end"),
  amount: integer("amount").notNull(),
});

export const accessControls = pgTable("access_controls", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  apiId: integer("api_id").references(() => apis.id),
  permissions: text("permissions").array(),
  rateLimit: integer("rate_limit"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  lastActive: true,
});

export const insertApiSchema = createInsertSchema(apis).omit({
  id: true,
  createdAt: true,
});

export const insertSubscriptionSchema = createInsertSchema(subscriptions).omit({
  id: true,
});

export const insertAccessControlSchema = createInsertSchema(accessControls).omit({
  id: true,
  createdAt: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Api = typeof apis.$inferSelect;
export type InsertApi = z.infer<typeof insertApiSchema>;
export type ApiMetric = typeof apiMetrics.$inferSelect;
export type Subscription = typeof subscriptions.$inferSelect;
export type InsertSubscription = z.infer<typeof insertSubscriptionSchema>;
export type AccessControl = typeof accessControls.$inferSelect;
export type InsertAccessControl = z.infer<typeof insertAccessControlSchema>;
