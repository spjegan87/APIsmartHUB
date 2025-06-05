import { 
  users, 
  apis, 
  apiMetrics, 
  subscriptions, 
  accessControls,
  type User, 
  type InsertUser,
  type Api,
  type InsertApi,
  type ApiMetric,
  type Subscription,
  type InsertSubscription,
  type AccessControl,
  type InsertAccessControl
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, updates: Partial<User>): Promise<User | undefined>;
  deleteUser(id: number): Promise<boolean>;
  getAllUsers(): Promise<User[]>;

  // API methods
  getApi(id: number): Promise<Api | undefined>;
  createApi(api: InsertApi): Promise<Api>;
  updateApi(id: number, updates: Partial<Api>): Promise<Api | undefined>;
  deleteApi(id: number): Promise<boolean>;
  getAllApis(): Promise<Api[]>;
  getApisByUser(userId: number): Promise<Api[]>;

  // API Metrics methods
  getApiMetrics(apiId: number): Promise<ApiMetric[]>;
  createApiMetric(metric: Omit<ApiMetric, 'id'>): Promise<ApiMetric>;
  getMetricsSummary(): Promise<any>;

  // Subscription methods
  getSubscription(userId: number): Promise<Subscription | undefined>;
  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
  updateSubscription(id: number, updates: Partial<Subscription>): Promise<Subscription | undefined>;

  // Access Control methods
  getAccessControl(userId: number, apiId: number): Promise<AccessControl | undefined>;
  createAccessControl(accessControl: InsertAccessControl): Promise<AccessControl>;
  getUserAccessControls(userId: number): Promise<AccessControl[]>;
  getApiAccessControls(apiId: number): Promise<AccessControl[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private apis: Map<number, Api>;
  private apiMetrics: Map<number, ApiMetric>;
  private subscriptions: Map<number, Subscription>;
  private accessControls: Map<number, AccessControl>;
  private currentUserId: number;
  private currentApiId: number;
  private currentMetricId: number;
  private currentSubscriptionId: number;
  private currentAccessControlId: number;

  constructor() {
    this.users = new Map();
    this.apis = new Map();
    this.apiMetrics = new Map();
    this.subscriptions = new Map();
    this.accessControls = new Map();
    this.currentUserId = 1;
    this.currentApiId = 1;
    this.currentMetricId = 1;
    this.currentSubscriptionId = 1;
    this.currentAccessControlId = 1;
    
    this.seedData();
  }

  private seedData() {
    // Seed users
    const adminUser = this.createUser({
      username: "admin",
      email: "admin@company.com",
      password: "hashed_password",
      role: "admin",
      status: "active"
    });

    // Seed APIs
    this.createApi({
      name: "User Authentication API",
      endpoint: "/api/v1/auth",
      method: "POST",
      description: "Handle user authentication and authorization",
      status: "active",
      createdBy: 1
    });

    this.createApi({
      name: "Payment Processing API", 
      endpoint: "/api/v1/payments",
      method: "POST",
      description: "Process payments and transactions",
      status: "active",
      createdBy: 1
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.email === email);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { 
      ...insertUser, 
      id,
      createdAt: new Date(),
      lastActive: null
    };
    this.users.set(id, user);
    return user;
  }

  async updateUser(id: number, updates: Partial<User>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, ...updates };
    this.users.set(id, updatedUser);
    return updatedUser;
  }

  async deleteUser(id: number): Promise<boolean> {
    return this.users.delete(id);
  }

  async getAllUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  // API methods
  async getApi(id: number): Promise<Api | undefined> {
    return this.apis.get(id);
  }

  async createApi(insertApi: InsertApi): Promise<Api> {
    const id = this.currentApiId++;
    const api: Api = {
      ...insertApi,
      id,
      createdAt: new Date()
    };
    this.apis.set(id, api);
    return api;
  }

  async updateApi(id: number, updates: Partial<Api>): Promise<Api | undefined> {
    const api = this.apis.get(id);
    if (!api) return undefined;
    
    const updatedApi = { ...api, ...updates };
    this.apis.set(id, updatedApi);
    return updatedApi;
  }

  async deleteApi(id: number): Promise<boolean> {
    return this.apis.delete(id);
  }

  async getAllApis(): Promise<Api[]> {
    return Array.from(this.apis.values());
  }

  async getApisByUser(userId: number): Promise<Api[]> {
    return Array.from(this.apis.values()).filter(api => api.createdBy === userId);
  }

  // API Metrics methods
  async getApiMetrics(apiId: number): Promise<ApiMetric[]> {
    return Array.from(this.apiMetrics.values()).filter(metric => metric.apiId === apiId);
  }

  async createApiMetric(metric: Omit<ApiMetric, 'id'>): Promise<ApiMetric> {
    const id = this.currentMetricId++;
    const apiMetric: ApiMetric = { ...metric, id };
    this.apiMetrics.set(id, apiMetric);
    return apiMetric;
  }

  async getMetricsSummary(): Promise<any> {
    const totalCalls = Array.from(this.apiMetrics.values())
      .reduce((sum, metric) => sum + metric.totalCalls, 0);
    
    const errorCount = Array.from(this.apiMetrics.values())
      .reduce((sum, metric) => sum + metric.errorCount, 0);
      
    const avgResponseTime = Array.from(this.apiMetrics.values())
      .reduce((sum, metric) => sum + metric.avgResponseTime, 0) / this.apiMetrics.size;

    return {
      totalCalls,
      errorRate: totalCalls > 0 ? (errorCount / totalCalls) * 100 : 0,
      avgResponseTime: Math.round(avgResponseTime),
      activeAPIs: this.apis.size
    };
  }

  // Subscription methods
  async getSubscription(userId: number): Promise<Subscription | undefined> {
    return Array.from(this.subscriptions.values()).find(sub => sub.userId === userId);
  }

  async createSubscription(insertSubscription: InsertSubscription): Promise<Subscription> {
    const id = this.currentSubscriptionId++;
    const subscription: Subscription = { ...insertSubscription, id };
    this.subscriptions.set(id, subscription);
    return subscription;
  }

  async updateSubscription(id: number, updates: Partial<Subscription>): Promise<Subscription | undefined> {
    const subscription = this.subscriptions.get(id);
    if (!subscription) return undefined;
    
    const updatedSubscription = { ...subscription, ...updates };
    this.subscriptions.set(id, updatedSubscription);
    return updatedSubscription;
  }

  // Access Control methods
  async getAccessControl(userId: number, apiId: number): Promise<AccessControl | undefined> {
    return Array.from(this.accessControls.values())
      .find(ac => ac.userId === userId && ac.apiId === apiId);
  }

  async createAccessControl(insertAccessControl: InsertAccessControl): Promise<AccessControl> {
    const id = this.currentAccessControlId++;
    const accessControl: AccessControl = { 
      ...insertAccessControl, 
      id,
      createdAt: new Date()
    };
    this.accessControls.set(id, accessControl);
    return accessControl;
  }

  async getUserAccessControls(userId: number): Promise<AccessControl[]> {
    return Array.from(this.accessControls.values()).filter(ac => ac.userId === userId);
  }

  async getApiAccessControls(apiId: number): Promise<AccessControl[]> {
    return Array.from(this.accessControls.values()).filter(ac => ac.apiId === apiId);
  }
}

export const storage = new MemStorage();
