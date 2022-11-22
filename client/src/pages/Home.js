import { useAPI } from "../hooks/useAPI";
import { useState, useEffect } from "react";

const Home = () => {
  const [forecasts, setForecasts] = useState([{}]);
  const api = useAPI();
  useEffect(() => {
    const abort = new AbortController();

    api
      .get("weatherforecast", {
        signal: abort.signal,
      })
      .then((response) => {
        console.log(response.data);
        setForecasts(response?.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => abort.abort();
  }, []);

  return <div>{forecasts[0].date ?? "You might need to refresh"}</div>;
};
export default Home;
