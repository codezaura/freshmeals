import mongoose from "mongoose";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type MockInstance,
} from "vitest";

// Mock mongoose and env-variables before importing the module under test
vi.mock("mongoose");
vi.mock("../configs/env-variables.js", () => ({
  ENV: {
    PORT: "3000",
    MONGODB_URI: "mongodb://localhost:27017/testdb",
  },
}));

// Import after mocks are set up
import { connectDB } from "./index.js";

describe("connectDB", () => {
  let consoleLogSpy: MockInstance;
  let processExitSpy: MockInstance;

  beforeEach(() => {
    consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    processExitSpy = vi
      .spyOn(process, "exit")
      .mockImplementation((_code?: string | number | null | undefined) => {
        return undefined as never;
      });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("successful connection", () => {
    it("should call mongoose.connect with the MONGODB_URI string", async () => {
      const fakeConnection = {
        connection: { host: "localhost" },
      };
      vi.mocked(mongoose.connect).mockResolvedValue(fakeConnection as never);

      await connectDB();

      expect(mongoose.connect).toHaveBeenCalledWith(
        "mongodb://localhost:27017/testdb",
      );
    });

    it("should log the connected host on successful connection", async () => {
      const fakeConnection = {
        connection: { host: "cluster0.mongodb.net" },
      };
      vi.mocked(mongoose.connect).mockResolvedValue(fakeConnection as never);

      await connectDB();

      expect(consoleLogSpy).toHaveBeenCalledWith(
        "Database is connected on: cluster0.mongodb.net",
      );
    });

    it("should not call process.exit on successful connection", async () => {
      const fakeConnection = {
        connection: { host: "localhost" },
      };
      vi.mocked(mongoose.connect).mockResolvedValue(fakeConnection as never);

      await connectDB();

      expect(processExitSpy).not.toHaveBeenCalled();
    });
  });

  describe("failed connection", () => {
    it("should log the error message on connection failure", async () => {
      const connectionError = new Error("Authentication failed");
      vi.mocked(mongoose.connect).mockRejectedValue(connectionError);

      await connectDB();

      expect(consoleLogSpy).toHaveBeenCalledWith(
        `Database connection failure: ${connectionError}`,
      );
    });

    it("should call process.exit(1) on connection failure", async () => {
      const connectionError = new Error("Connection refused");
      vi.mocked(mongoose.connect).mockRejectedValue(connectionError);

      await connectDB();

      expect(processExitSpy).toHaveBeenCalledWith(1);
    });

    it("should call process.exit(1) even for non-Error thrown values", async () => {
      vi.mocked(mongoose.connect).mockRejectedValue("timeout");

      await connectDB();

      expect(processExitSpy).toHaveBeenCalledWith(1);
    });

    it("should log a stringified representation of non-Error failures", async () => {
      vi.mocked(mongoose.connect).mockRejectedValue("timeout");

      await connectDB();

      expect(consoleLogSpy).toHaveBeenCalledWith(
        "Database connection failure: timeout",
      );
    });
  });

  describe("connection string construction", () => {
    it("should convert MONGODB_URI to string via template literal (handles undefined gracefully)", async () => {
      // Even if MONGODB_URI were undefined, the template literal converts it to "undefined"
      // This tests that mongoose.connect is always called with a string argument
      const fakeConnection = { connection: { host: "localhost" } };
      vi.mocked(mongoose.connect).mockResolvedValue(fakeConnection as never);

      await connectDB();

      const callArg = vi.mocked(mongoose.connect).mock.calls[0]?.[0];
      expect(typeof callArg).toBe("string");
    });
  });
});