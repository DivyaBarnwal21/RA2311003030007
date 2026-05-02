# Stage 1 - Notification System Design

## APIs

### GET /notifications
Returns all notifications

Response:
{
  id,
  message,
  type,
  timestamp
}

### POST /notifications
Creates a new notification

Request:
{
  message,
  type
}

Response:
{
  success: true
}

---

## JSON Structure

Each notification has:
- id (unique)
- message (text)
- type (Event / Result / Placement)
- timestamp (time of creation)

---

## Design Approach

- REST API design used
- JSON format for communication
- Clean and consistent endpoints

---

## Real-Time Notifications

- WebSockets for instant updates
- Polling as fallback option

---

## Logging Middleware

- Tracks API calls and errors
- Helps debugging
- Sends logs to external logging API

---

# Stage 2 - Database

- Use MongoDB
- Scalable and flexible schema
- Stores notification data

---

# Stage 3 - Optimization

- Add indexing on important fields
- Improve query speed
- Reduce load time

---

# Stage 4 - Scaling

- Pagination for large data
- Load balancing
- Caching frequently used data

---

# Stage 5 - Reliability

- Use queues (Kafka/RabbitMQ)
- Retry failed operations
- Ensure system stability

---

# Stage 6 - Priority Inbox

- Sort by importance and time
- Show top 10 notifications