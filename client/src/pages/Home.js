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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>{forecasts[0].date ?? "You might need to refresh"}</p>
      <p>
        Check out{" "}
        <a
          href="https://localhost:7175/swagger/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Server
        </a>
        .
      </p>
    </div>
  );
};
export default Home;
