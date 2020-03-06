// Core
import axios from 'axios';

class Api {
  constructor() {
    this.http = axios.create({ baseURL: 'http://localhost:3004' });
  }

  static getInstance() {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  getRequest() {
    return this.http.get('/posts');
  }

  postData(data) {
    return this.http.post('/posts', { "title": data });
  }

  deleteData(data) {
    //console.log(data);
    return this.http.delete('/posts/' + data)
      .catch(error => {
        console.log(error);
      });
  }
}

export default Api.getInstance();
