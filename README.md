# Vehicle Maintenance Scheduler API

## 📌 Project Overview
This is a backend project developed as part of the AffordMed assessment.

The system schedules vehicle maintenance tasks based on:
- Available mechanic hours
- Task duration
- Task impact

The goal is to maximize total impact within limited time.

---

## 🚀 Features

- REST API using Node.js & Express
- Greedy algorithm for optimization
- External API integration with authentication
- Logging middleware implemented
- Fallback mechanism using mock data

---

## 📡 API Endpoint

### GET /schedule

Returns the optimized list of tasks.

#### Example Response:
```json
{
  "maxHours": 40,
  "selected": [...],
  "totalImpact": 109
}
