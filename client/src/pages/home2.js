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
    <div className="flex justify-center pt-10">
      <button className="btn btn-primary col-2">
        <a
          href="https://localhost:7175/swagger/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Swagger UI
        </a>
      </button>
    </div>
  );
};
export default Home;
