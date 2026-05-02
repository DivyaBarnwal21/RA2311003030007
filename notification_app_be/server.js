const express = require("express");
const axios = require("axios");
const { calculateSchedule } = require("../vehicle_maintenence_schedular/service");
const app = express();

// Fallback mock data in case the external API fails or returns 401
const MOCK_VEHICLES = [
    { TaskID: '1', Duration: 10, Impact: 60 },
    { TaskID: '2', Duration: 20, Impact: 100 },
    { TaskID: '3', Duration: 15, Impact: 90 },
    { TaskID: '4', Duration: 25, Impact: 120 }
];

async function getAuthToken() {
    try {
        const res = await axios.post(
            "http://20.207.122.201/evaluation-service/auth",
            {
                email: "db8123@srmist.edu.in",
                name: "Divya Barnwal",
                rollNo: "RA2311003030007",
                accessCode: "QkbpxH",
                clientID: "cacefba1-4a5a-4da8-8773-edf9a2cfcc67",
                clientSecret: "HEKgJQtUGPnrjVhP"
            }
        );
        return res.data.access_token;
    } catch (err) {
        console.error("[Auth Error] Failed to fetch token:", err.message);
        return null;
    }
}

app.get("/schedule", async (req, res) => {
    let vehicles = [];

    try {
        // 1. Generate a fresh token
        const token = await getAuthToken();

        if (!token) {
            throw new Error("Unable to generate token.");
        }

        // 2. Fetch data from external API
        const response = await axios.get(
            "http://20.207.122.201/evaluation-service/vehicles",
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
        );

        vehicles = Array.isArray(response.data.vehicles)
            ? response.data.vehicles
            : [];

    } catch (err) {
        if (err.response && err.response.status === 401) {
            console.error("[API Error] 401 Unauthorized. The token may be expired, malformed, or missing.");
        } else {
            console.error("[API Error] Failed to fetch vehicles:", err.message);
        }

        // Fallback to mock data
        vehicles = MOCK_VEHICLES;
    }

    const maxHours = 40;

    // Use the separated service logic
    const { selected, totalImpact } = calculateSchedule(vehicles, maxHours);

    res.json({
        maxHours,
        selected,
        totalImpact
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});