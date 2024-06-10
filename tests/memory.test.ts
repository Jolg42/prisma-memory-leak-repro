import { PrismaClient } from "@prisma/client";

describe("schema", () => {
  afterAll(async () => {
    const prismaClient = new PrismaClient();
  });

  test("empty test", async () => {
  });
});
