import Axios from 'axios';

const hostUrl = '/.netlify/functions';

export function sendGetInTouchEmail(data) {
  return Axios.request({method: 'post', url: `${hostUrl}/email`, data});
}