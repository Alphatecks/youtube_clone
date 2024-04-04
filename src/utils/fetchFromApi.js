import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '0789d8770dmsh5b1496c4ee2ba3cp188f75jsnf854baf187b4',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  

  export const fetchFromApi = async (url) => { 
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }