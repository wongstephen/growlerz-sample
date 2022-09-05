const axios = require("axios");

function getData() {
  axios
    .get("https://numnumthecorgi.com/growlerzseattle/wp-json/wp/v2/pages/25")
    .then((res) => {
      console.log(res.data);
    });
}
getData();
