import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("ENV configuration", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    // Reset modules so each test gets a fresh import with fresh env
    vi.resetModules();
    // Restore original env before each test
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe("MONGODB_URI", () => {
    it("should expose MONGODB_URI from process.env", async () => {
      process.env.MONGODB_URI = "mongodb://localhost:27017/testdb";

      const { ENV } = await import("./env-variables.js");

      expect(ENV.MONGODB_URI).toBe("mongodb://localhost:27017/testdb");
    });

    it("should be undefined when MONGODB_URI env var is not set", async () => {
      delete process.env.MONGODB_URI;

      const { ENV } = await import("./env-variables.js");

      expect(ENV.MONGODB_URI).toBeUndefined();
    });

    it("should reflect different URI values correctly", async () => {
      process.env.MONGODB_URI =
        "mongodb+srv://user:pass@cluster.mongodb.net/mydb";

      const { ENV } = await import("./env-variables.js");

      expect(ENV.MONGODB_URI).toBe(
        "mongodb+srv://user:pass@cluster.mongodb.net/mydb",
      );
    });

    it("should handle an empty string MONGODB_URI", async () => {
      process.env.MONGODB_URI = "";

      const { ENV } = await import("./env-variables.js");

      expect(ENV.MONGODB_URI).toBe("");
    });
  });

  describe("PORT", () => {
    it("should still expose PORT from process.env after MONGODB_URI was added", async () => {
      process.env.PORT = "3000";
      process.env.MONGODB_URI = "mongodb://localhost:27017/testdb";

      const { ENV } = await import("./env-variables.js");

      expect(ENV.PORT).toBe("3000");
      expect(ENV.MONGODB_URI).toBe("mongodb://localhost:27017/testdb");
    });
  });

  describe("ENV shape", () => {
    it("should export an object with both PORT and MONGODB_URI keys", async () => {
      const { ENV } = await import("./env-variables.js");

      expect(ENV).toHaveProperty("PORT");
      expect(ENV).toHaveProperty("MONGODB_URI");
    });

    it("should not expose any unexpected extra properties beyond PORT and MONGODB_URI", async () => {
      const { ENV } = await import("./env-variables.js");

      const keys = Object.keys(ENV);
      expect(keys).toContain("PORT");
      expect(keys).toContain("MONGODB_URI");
      expect(keys).toHaveLength(2);
    });
  });
});