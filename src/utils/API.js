import axios from "axios";

const yo = {
  userdata: function () {
    return axios.get("https://randomuser.me/api/?results=50");
  },
};

export default yo;
