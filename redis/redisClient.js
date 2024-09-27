import { Redis } from "ioredis";

const redisClient = new Redis({
  host: "redis",
  port: 6379,
  maxRetriesPerRequest: null,
  enableReadyCheck: true,
});

redisClient.on("connect", () => {
  console.log("Redis client connected");
});

redisClient.on("ready", () => {
  console.log("Redis client ready");
});

redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

export default redisClient;
