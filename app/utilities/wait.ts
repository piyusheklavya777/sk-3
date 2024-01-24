export const wait = async ({ ms }: { ms: number }) =>
  await new Promise((resolve) => setTimeout(resolve, ms));
