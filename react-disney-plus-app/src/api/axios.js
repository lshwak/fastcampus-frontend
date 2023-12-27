import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "a506f9d94457f63cb8a79816316b15e8",
    language: "ko-KR"
  }
})

export default instance;