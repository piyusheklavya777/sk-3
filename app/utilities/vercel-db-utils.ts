import { sql } from "@vercel/postgres";

export const getInterestsCount = async (): Promise<number> => {
    console.log("getInterestsCount", process.env.POSTGRES_URL);
  try {
    const { rows } = await sql`SELECT count(*) from interestsinbeta`;
    return rows[0]?.count as number;
  } catch (e) {
    console.error("API call failed:", e);
    throw new Error("Failed to get count. Please try again.");
  }
};

// function setupenvs () {
//     process.env.POSTGRES_URL = process.env.POSTGRES_URL || "postgres://postgres:postgres@localhost:5432/postgres";
// }