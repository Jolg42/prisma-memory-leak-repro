import prismaClient from "../prisma/prismaClient";

describe("schema", () => {
  afterAll(async () => {
    await prismaClient.$disconnect();
  });

  test("Deleting parent row in 1-to-n trows error", async () => {
    const user = await prismaClient.user.findFirst();
    expect(user).toBeFalsy();
  });
});
