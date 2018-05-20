import axios from 'axios';

const web = axios.create({
  baseURL: 'http://localhost:8000/',
});

export default {
  incidents() {
    return new Promise((resolve, reject) => {
      web.get('incidents/')
        .then((response) => resolve(response))
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  },
  sendIncident(obj) {
    return new Promise((resolve, reject) => {
      web.post('incidents/', obj)
        .then((response) => {
          console.log(response);
          return resolve(response);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  },
};
