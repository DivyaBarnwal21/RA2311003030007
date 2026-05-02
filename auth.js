const axios = require("axios");

async function auth() {
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

    console.log(res.data);
  } catch (err) {
    console.log(err.response?.data || err.message);
  }
}

auth();