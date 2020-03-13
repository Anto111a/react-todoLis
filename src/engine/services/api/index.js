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

  postData(data, progress) {
    return this.http.post('/posts', { "title": data, "progress": progress });
  }

  deleteData(data) {
    return this.http.delete('/posts/' + data)
      .catch(error => {
        console.log(error);
      });
  }

  updateData(id, title) {
    return this.http.patch('/posts/' + id, { title })
      .catch(error => {
        console.log(error);
      });
  }

  updateProgress(id, progress) {
    return this.http.patch('/posts/' + id, { progress })
      .catch(error => {
        console.log(error);
      });
  }

}

export default Api.getInstance();
