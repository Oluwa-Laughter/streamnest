// import axios from "axios";

// const BASE_URl = "https://youtube-v31.p.rapidapi.com/";

// const options = {
//   url: BASE_URl,
//   params: {
//     relatedToVideoId: "7ghhRHRP6t4",
//     part: "id,snippet",
//     type: "video",
//     maxResults: "50",
//   },
//   headers: {
//     "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
//     "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
//   },
// };

// export const fetchFromApi = async (url) => {
//   const { data } = await axios.get(`${BASE_URl}/${url}`, options);

//   return data;
// };

import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com/";

const options = {
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url, params = {}) => {
  try {
    const { data } = await axios.get(`${BASE_URL}${url}`, {
      ...options,
      params: {
        ...params,
        part: "id,snippet",
        type: "video",
        maxResults: "50",
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
};