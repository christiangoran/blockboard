import { jwtDecode } from "jwt-decode"; // Adjusted import statement

// This function sets a token timestamp in the browser's storage
// it will accept the data object returned by the API on login
export const setTokenTimestamp = (data) => {
  // Check if the refresh token exists and is a string
  console.log("The response data:", data);
  if (typeof data?.refresh_token === "string") {
    try {
      // Decode the refresh token to get the expiration timestamp
      const refreshTokenTimestamp = jwtDecode(data.refresh_token).exp;
      // Store the timestamp in localStorage
      localStorage.setItem("refreshTokenTimestamp", refreshTokenTimestamp);
    } catch (error) {
      console.error("Failed to decode the refresh token:", error);
    }
  } else {
    console.error("Invalid or missing refresh token:", data?.refresh_token);
  }
};

// This function returns a boolean value that tells if the
// user's token needs to be refreshed or not.
export const shouldRefreshToken = () => {
  return !!localStorage.getItem("refreshTokenTimestamp");
};

export const removeTokenTimestamp = () => {
  localStorage.removeItem("refreshTokenTimestamp");
};
