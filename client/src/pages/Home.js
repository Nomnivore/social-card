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
        if (err.code === "ERR_CANCELED") return;
        console.log(err);
      });

    return () => abort.abort();
  }, []);

  return (
    <div>
      <h1 className="text-xl"></h1>
      <p>{forecasts[0].date ?? "You might need to refresh"}</p>
    </div>
  );
};
export default Home;
