import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertApiSchema, insertSubscriptionSchema, insertAccessControlSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Users routes
  app.get("/api/users", async (req, res) => {
    try {
      const users = await storage.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch users" });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const user = await storage.getUser(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  app.post("/api/users", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.status(201).json(user);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid user data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create user" });
    }
  });

  app.put("/api/users/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const user = await storage.updateUser(id, updates);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Failed to update user" });
    }
  });

  app.delete("/api/users/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteUser(id);
      if (!deleted) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete user" });
    }
  });

  // APIs routes
  app.get("/api/apis", async (req, res) => {
    try {
      const apis = await storage.getAllApis();
      res.json(apis);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch APIs" });
    }
  });

  app.get("/api/apis/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const api = await storage.getApi(id);
      if (!api) {
        return res.status(404).json({ message: "API not found" });
      }
      res.json(api);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch API" });
    }
  });

  app.post("/api/apis", async (req, res) => {
    try {
      const apiData = insertApiSchema.parse(req.body);
      const api = await storage.createApi(apiData);
      res.status(201).json(api);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid API data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create API" });
    }
  });

  app.put("/api/apis/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const api = await storage.updateApi(id, updates);
      if (!api) {
        return res.status(404).json({ message: "API not found" });
      }
      res.json(api);
    } catch (error) {
      res.status(500).json({ message: "Failed to update API" });
    }
  });

  app.delete("/api/apis/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteApi(id);
      if (!deleted) {
        return res.status(404).json({ message: "API not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Failed to delete API" });
    }
  });

  // Metrics routes
  app.get("/api/metrics/summary", async (req, res) => {
    try {
      const summary = await storage.getMetricsSummary();
      res.json(summary);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch metrics summary" });
    }
  });

  app.get("/api/metrics/api/:id", async (req, res) => {
    try {
      const apiId = parseInt(req.params.id);
      const metrics = await storage.getApiMetrics(apiId);
      res.json(metrics);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch API metrics" });
    }
  });

  // Subscriptions routes
  app.get("/api/subscriptions/user/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const subscription = await storage.getSubscription(userId);
      if (!subscription) {
        return res.status(404).json({ message: "Subscription not found" });
      }
      res.json(subscription);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch subscription" });
    }
  });

  app.post("/api/subscriptions", async (req, res) => {
    try {
      const subscriptionData = insertSubscriptionSchema.parse(req.body);
      const subscription = await storage.createSubscription(subscriptionData);
      res.status(201).json(subscription);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid subscription data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create subscription" });
    }
  });

  // Access Control routes
  app.get("/api/access-control/user/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const accessControls = await storage.getUserAccessControls(userId);
      res.json(accessControls);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch access controls" });
    }
  });

  app.get("/api/access-control/api/:apiId", async (req, res) => {
    try {
      const apiId = parseInt(req.params.apiId);
      const accessControls = await storage.getApiAccessControls(apiId);
      res.json(accessControls);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch access controls" });
    }
  });

  app.post("/api/access-control", async (req, res) => {
    try {
      const accessControlData = insertAccessControlSchema.parse(req.body);
      const accessControl = await storage.createAccessControl(accessControlData);
      res.status(201).json(accessControl);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid access control data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create access control" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
