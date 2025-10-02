import { BASE_URL } from "@/lib/config";
import axios from "axios";




export const refresh_token = async (): Promise<string | null> => {
    try {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
            return null;
        }

        const response = await axios.post(`${BASE_URL}/auth/refresh-token`, { refreshToken });

        if (response.status !== 200) {
            throw new Error("Failed to refresh token");
        }

        const accessToken = response.data.accessToken;
        const newRefreshToken = response.data.refreshToken;

        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", newRefreshToken);

        return accessToken || null;

    } catch (error) {
        console.error("Error refreshing token:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        return null;
    }
}