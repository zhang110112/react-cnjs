import axios from 'axios';
// here, you can config the axios
axios.defaults.baseURL = "https://cnjs.asmodeus.cn/api/v1";
axios.create({
  timeout: 5000
});

export default axios;