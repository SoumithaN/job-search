import axios from "axios";

const getJobs = async () => {
  //   const baseUrl = process.env.VUE_APP_API_URL;
  //   const response = await axios.get(`${baseUrl}/jobs`);
  //   return response.data;

  const baseUrl = process.env.VUE_APP_API_URL;
  // const response = await axios.get(" http://localhost:3000/jobs");
  const response = await axios.get(`${baseUrl}/jobs`);
  return response.data;
};

export default getJobs;
