import axios from "axios";
export const FETCH_HOME_NEWS = "FETCH_HOME_NEWS";
export const FETCH_US_NEWS = "FFETCH_US_NEWS";
export const FETCH_WORLD_NEWS = "FETCH_WORLD_NEWS";
export const FETCH_SCIENCE_NEWS = "FETCH_SCIENCE_NEWS";
export const FETCH_ARTS_NEWS = "FETCH_TECH_NEWS";
export const FETCH_SPORTS_NEWS = "FETCH_SPORTS_NEWS";
export const FETCH_HEALTH_NEWS = "FETCH_HEALTH_NEWS";
export const FETCH_FOOD_NEWS = "FETCH_FOOD_NEWS";
export const FETCH_NYREGION_NEWS = "FETCH_NYREGION_NEWS";

export const fetchHomeNews = () => (dispatch) => {
  axios
    .get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2G8poiWZvBZNjMJq3KvCluPURvuEVJnY")
    .then((res) => {
      console.log(res.data.results, "home!!");
      dispatch({ type: FETCH_HOME_NEWS, payload: res.data.results });
    })
    .catch((err) => {
      console.log("Something went wrong, see error:", err);
    });
};

export const fetchUsNews = () => (dispatch) => {
  axios
    .get("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=2G8poiWZvBZNjMJq3KvCluPURvuEVJnY")
    .then((res) => {
      dispatch({ type: FETCH_US_NEWS, payload: res.data.results });
    })
    .catch((err) => {
      console.log("Something went wrong, see error:", err);
    });
};

export const fetchWorldNews = () => (dispatch) => {
  axios
    .get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=2G8poiWZvBZNjMJq3KvCluPURvuEVJnY")
    .then((res) => {
      dispatch({ type: FETCH_WORLD_NEWS, payload: res.data.results });
    })
    .catch((err) => {
      console.log("Something went wrong, see error:", err);
    });
};

export const fetchScienceNews = () => (dispatch) => {
  axios
    .get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=2G8poiWZvBZNjMJq3KvCluPURvuEVJnY")
    .then((res) => {
      dispatch({ type: FETCH_SCIENCE_NEWS, payload: res.data.results });
    })
    .catch((err) => {
      console.log("Something went wrong, see error:", err);
    });
};

export const fetchArtsNews = () => (dispatch) => {
  axios
    .get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=2G8poiWZvBZNjMJq3KvCluPURvuEVJnY")
    .then((res) => {
      dispatch({ type: FETCH_ARTS_NEWS, payload: res.data.results });
    })
    .catch((err) => {
      console.log("Something went wrong, see error:", err);
    });
};

export const fetchSportsNews = () => (dispatch) => {
  axios
    .get("https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=2G8poiWZvBZNjMJq3KvCluPURvuEVJnY")
    .then((res) => {
      dispatch({ type: FETCH_SPORTS_NEWS, payload: res.data.results });
    })
    .catch((err) => {
      console.log("Something went wrong, see error:", err);
    });
};

export const fetchHealthNews = () => (dispatch) => {
  axios
    .get("https://api.nytimes.com/svc/topstories/v2/health.json?api-key=2G8poiWZvBZNjMJq3KvCluPURvuEVJnY")
    .then((res) => {
      dispatch({ type: FETCH_HEALTH_NEWS, payload: res.data.results });
    })
    .catch((err) => {
      console.log("Something went wrong, see error:", err);
    });
};

export const fetchFoodNews = () => (dispatch) => {
  axios
    .get("https://api.nytimes.com/svc/topstories/v2/food.json?api-key=2G8poiWZvBZNjMJq3KvCluPURvuEVJnY")
    .then((res) => {
      dispatch({ type: FETCH_FOOD_NEWS, payload: res.data.results });
    })
    .catch((err) => {
      console.log("Something went wrong, see error:", err);
    });
};

export const fetchNyRegionNews = () => (dispatch) => {
  axios
    .get("https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=2G8poiWZvBZNjMJq3KvCluPURvuEVJnY")
    .then((res) => {
      dispatch({ type: FETCH_NYREGION_NEWS, payload: res.data.results });
    })
    .catch((err) => {
      console.log("Something went wrong, see error:", err);
    });
};
