import { createLogger } from "../logger.js";

it("should return stored logs", () => {
  const logger = createLogger("user login");
  expect(logger.getLogs()).toEqual([]);
});

it("should save log messaage", () => {
  const logger = createLogger("user login");
  logger.log("login succes");
  expect(logger.getLogs()).toEqual(["log - user login - login succes"]);
});

it("should save error messaage", () => {
  const logger = createLogger("user login");
  logger.error("login failed");
  expect(logger.getLogs()).toEqual(["error - user login - login failed"]);
});
