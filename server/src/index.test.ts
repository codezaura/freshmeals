import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type MockInstance,
} from "vitest";

describe("server entry point (index.ts)", () => {
  let consoleLogSpy: MockInstance;

  beforeEach(() => {
    vi.resetModules();
    consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("when connectDB resolves successfully", () => {
    it("should call connectDB on startup", async () => {
      const mockConnectDB = vi.fn().mockResolvedValue(undefined);
      const mockListen = vi.fn();

      vi.doMock("./database/index.js", () => ({ connectDB: mockConnectDB }));
      vi.doMock("./app.js", () => ({ app: { listen: mockListen } }));
      vi.doMock("./configs/env-variables.js", () => ({
        ENV: { PORT: "4000", MONGODB_URI: "mongodb://localhost:27017/testdb" },
      }));

      await import("./index.js");
      await new Promise((resolve) => setImmediate(resolve));

      expect(mockConnectDB).toHaveBeenCalledTimes(1);
    });

    it("should call app.listen after connectDB resolves", async () => {
      const mockConnectDB = vi.fn().mockResolvedValue(undefined);
      const mockListen = vi.fn();

      vi.doMock("./database/index.js", () => ({ connectDB: mockConnectDB }));
      vi.doMock("./app.js", () => ({ app: { listen: mockListen } }));
      vi.doMock("./configs/env-variables.js", () => ({
        ENV: { PORT: "4000", MONGODB_URI: "mongodb://localhost:27017/testdb" },
      }));

      await import("./index.js");
      await new Promise((resolve) => setImmediate(resolve));

      expect(mockListen).toHaveBeenCalledTimes(1);
    });

    it("should start listening on the configured PORT", async () => {
      const mockConnectDB = vi.fn().mockResolvedValue(undefined);
      const mockListen = vi.fn();

      vi.doMock("./database/index.js", () => ({ connectDB: mockConnectDB }));
      vi.doMock("./app.js", () => ({ app: { listen: mockListen } }));
      vi.doMock("./configs/env-variables.js", () => ({
        ENV: { PORT: "4000", MONGODB_URI: "mongodb://localhost:27017/testdb" },
      }));

      await import("./index.js");
      await new Promise((resolve) => setImmediate(resolve));

      expect(mockListen).toHaveBeenCalledWith("4000", expect.any(Function));
    });

    it("should log the server URL when app.listen callback fires", async () => {
      const mockConnectDB = vi.fn().mockResolvedValue(undefined);
      const mockListen = vi
        .fn()
        .mockImplementation((_port: unknown, cb: () => void) => cb());

      vi.doMock("./database/index.js", () => ({ connectDB: mockConnectDB }));
      vi.doMock("./app.js", () => ({ app: { listen: mockListen } }));
      vi.doMock("./configs/env-variables.js", () => ({
        ENV: { PORT: "4000", MONGODB_URI: "mongodb://localhost:27017/testdb" },
      }));

      await import("./index.js");
      await new Promise((resolve) => setImmediate(resolve));

      expect(consoleLogSpy).toHaveBeenCalledWith(
        "Running at https://localhost:4000",
      );
    });
  });

  describe("when connectDB rejects", () => {
    it("should log the error via .catch when connectDB fails", async () => {
      const dbError = new Error("DB unavailable");
      const mockConnectDB = vi.fn().mockRejectedValue(dbError);
      const mockListen = vi.fn();

      vi.doMock("./database/index.js", () => ({ connectDB: mockConnectDB }));
      vi.doMock("./app.js", () => ({ app: { listen: mockListen } }));
      vi.doMock("./configs/env-variables.js", () => ({
        ENV: { PORT: "4000", MONGODB_URI: "mongodb://localhost:27017/testdb" },
      }));

      await import("./index.js");
      await new Promise((resolve) => setImmediate(resolve));

      expect(consoleLogSpy).toHaveBeenCalledWith(
        `Database connection failed : ${dbError}`,
      );
    });

    it("should not call app.listen when connectDB fails", async () => {
      const mockConnectDB = vi
        .fn()
        .mockRejectedValue(new Error("DB unavailable"));
      const mockListen = vi.fn();

      vi.doMock("./database/index.js", () => ({ connectDB: mockConnectDB }));
      vi.doMock("./app.js", () => ({ app: { listen: mockListen } }));
      vi.doMock("./configs/env-variables.js", () => ({
        ENV: { PORT: "4000", MONGODB_URI: "mongodb://localhost:27017/testdb" },
      }));

      await import("./index.js");
      await new Promise((resolve) => setImmediate(resolve));

      expect(mockListen).not.toHaveBeenCalled();
    });

    it("should handle non-Error rejection values in .catch", async () => {
      const mockConnectDB = vi.fn().mockRejectedValue("network timeout");
      const mockListen = vi.fn();

      vi.doMock("./database/index.js", () => ({ connectDB: mockConnectDB }));
      vi.doMock("./app.js", () => ({ app: { listen: mockListen } }));
      vi.doMock("./configs/env-variables.js", () => ({
        ENV: { PORT: "4000", MONGODB_URI: "mongodb://localhost:27017/testdb" },
      }));

      await import("./index.js");
      await new Promise((resolve) => setImmediate(resolve));

      expect(consoleLogSpy).toHaveBeenCalledWith(
        "Database connection failed : network timeout",
      );
    });
  });
});