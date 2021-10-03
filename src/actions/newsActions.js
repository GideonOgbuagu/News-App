import axios from "axios";
export const FETCH_NEWS = "FETCH_NEWS";

export const fetchNews = () => (dispatch) => {
  axios
    .get("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=2G8poiWZvBZNjMJq3KvCluPURvuEVJnY")
    .then((res) => {
      console.log(res.data.results)
      dispatch({ type: FETCH_NEWS, payload: res.data.results });
    })
    .catch((err) => {
      console.log("Something went wrong, see error:", err);
    });
};
