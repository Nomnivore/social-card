import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { useAPI } from "../hooks/useAPI";

const Details = () => {
  const api = useAPI();
  const { username } = useParams();
  const [myLinks, setMyLinks] = useState([]);
  const initials = username.slice(1, 3).toUpperCase();

  useEffect(() => {
    const abort = getData();

    return () => abort.abort();
  }, []);

  function getData() {
    const abort = new AbortController();
    api
      .get(`card/${username}`, {
        signal: abort.signal,
      })
      .then((res) => {
        const data = res?.data?.links;
        if (!data) return;

        // temporary simplification of data to work with the current Card component
        // this can be omitted in future when Card adds support for all fields
        // id, url, linkType, etc
        const links = data.map((x) => x.url);
        setMyLinks(links);
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") return;
        console.log(err);
      });

    return abort;
  }

  return (
    <div className="flex justify-evenly pt-10">
      <Card cardInitials={initials} userName={username} myLinks={myLinks} />
    </div>
  );
};
export default Details;
