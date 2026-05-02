const axios = require("axios");

async function register() {
  try {
    const res = await axios.post(
      "http://20.207.122.201/evaluation-service/register",
      {
        email: "db8123@srmist.edu.in", //email id
        name: "Divya Barnwal",
        mobileNo: "8960299512",
        githubUsername: "DivyaBarnwal21",
        rollNo: "RA2311003030007",
        accessCode: "QkbpxH"
      }
    );

    console.log(res.data);
  } catch (err) {
    console.log(err.response?.data || err.message);
  }
}

register();