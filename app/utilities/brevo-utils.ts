import { RestClient } from "./rest-client";

export const sendInterestedInBetaEmail = async () => {
  try {
    // Replace with your actual API endpoint
    console.log('Sending interested in beta email');
    const response = await RestClient({
      url: "https://api.brevo.co/interested-in-beta",
      method: "POST",
      data: {},
    });

    console.log("API response:", response);
  } catch (error) {
    console.error("API call failed:", error);
    throw new Error("BREVO: Failed to submit beta interest. Please try again.");
  }
};
