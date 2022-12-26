import axios from "axios";
axios.get('https://medium.com/feed/@ViniCaetanoBR')
  .then(res => {
    console.log(res.data);
  });