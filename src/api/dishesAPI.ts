import axios from 'axios';
const KEY_LIBRARY =
  '$2b$10$0pzjw.uvgZiq/D.JbnaS/u8VKblmxtLH0bn7dSpyIXZrS5D8KqDWO';

export default axios.create({
  baseURL: 'https://api.jsonbin.io/b/5eb477f48284f36af7b74763',
  headers: { 'secret-key': KEY_LIBRARY },
});
