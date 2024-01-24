"use server";
import { sql } from "@vercel/postgres";

export const getInterestsCount = async (): Promise<number> => {
  try {
    const { rows } = await sql`SELECT count(*) from interestsinbetanew`;
    console.log("response", rows);
    return rows[0]?.count as number;
  } catch (e) {
    console.error("API call failed:", e);
    throw new Error("Failed to get count. Please try again.");
  }
};

export const registerInterest = async ({
  email,
  discordHandle,
  selectedGames,
}: {
  email: string;
  discordHandle: string;
  selectedGames: string[];
}) => {
  try {
    // Prepare the array as an SQL array literal
    const gamesArray = `{${selectedGames
      .map((game) => `"${game.replace(/"/g, '""')}"`)
      .join(",")}}`;

    // Use a parameterized query
    const query = sql`INSERT INTO interestsinbetanew (email, discord_handle, selected_games) VALUES (${email}, ${discordHandle}, ${gamesArray})`;
    console.log("query", query);
    const { rows } = await query;
    console.log("response", rows);
  } catch (e) {
    console.error("API call failed:", e);
    throw new Error("Failed to register interest. Please try again.");
  }
};
