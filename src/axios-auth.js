import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vue-update-a4007-default-rtdb.asia-southeast1.firebasedatabase.app'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance