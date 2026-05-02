const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkYjgxMjNAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMTU5MSwiaWF0IjoxNzc3NzAwNjkxLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMzRlNDdiNWItN2JkMi00ZjgwLTgxNmEtYjJjMDM5NjIxMzkxIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZGl2eWEgYmFybndhbCIsInN1YiI6ImNhY2VmYmExLTRhNWEtNGRhOC04NzczLWVkZjlhMmNmY2M2NyJ9LCJlbWFpbCI6ImRiODEyM0Bzcm1pc3QuZWR1LmluIiwibmFtZSI6ImRpdnlhIGJhcm53YWwiLCJyb2xsTm8iOiJyYTIzMTEwMDMwMzAwMDciLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiJjYWNlZmJhMS00YTVhLTRkYTgtODc3My1lZGY5YTJjZmNjNjciLCJjbGllbnRTZWNyZXQiOiJIRUtnSlF0VUdQbnJqVmhQIn0.L0GhxcQHEM_h211wJsD-SycKd0ngtonDKqS8hlnKdzY";

const log = async (stack, level, pkg, message) => {
  try {
    await axios.post(
      "http://20.207.122.201/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`   
        }
      }
    );
  } catch (err) {
    console.log("log error:", err.response?.data || err.message);
  }
};

module.exports = log;