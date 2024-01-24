import { RestClient } from "./rest-client";

// SHEETDB.IO API UTILITIES
export const sheetDBCreateRow = async (data: Record<string, any>) => {
  try {
    const response = await RestClient({
      url: "https://sheetdb.io/api/v1/38om56plpsfsy", // Replace with your actual API endpoint
      method: "POST",
      data,
    });

    console.log("API response:", response);
  } catch (error) {
    console.error("API call failed:", error);
    throw new Error(
      "SHEETDB: Failed to submit registration. Please try again."
    );
  }
};

export const sheetDBGetCount = async () => {
  try {
    const response = await RestClient({
      url: "https://sheetdb.io/api/v1/38om56plpsfsy/count", // Replace with your actual API endpoint
      method: "GET",
    });

    console.log("API response:", response);

    return response.body.rows;
  } catch (e) {
    console.error("API call failed:", e);
    throw new Error("SHEETDB: Failed to get count. Please try again.");
  }
};
