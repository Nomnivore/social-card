import CardPreview from "../components/CardPreview";
import { useState, useEffect, useMemo } from "react";
import { useAPI } from "../hooks/useAPI";
import linkTypes from "../util/linkTypes";
import debounce from "../util/debounce";

const Directory = () => {
  const api = useAPI();
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState(null);
  const [linkTypeFilter, setLinkTypeFilter] = useState(null);

  useEffect(() => {
    const abort = getData(searchQuery, linkTypeFilter);

    return () => abort.abort();
  }, [searchQuery, linkTypeFilter]);

  function getData(searchQuery = null, linkTypeFilter = null) {
    if (searchQuery === "") searchQuery = null;

    const abort = new AbortController();
    api
      .get("card", {
        signal: abort.signal,
        params: {
          searchQuery,
          linkTypeFilter,
        },
      })
      .then((res) => {
        const newData = res?.data?.cards;
        if (newData) setData(newData);
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") return;
        console.log(err);
      });

    return abort;
  }

  function ascend() {
    const sortedData = [...data].sort((a, b) => {
      return a.userName > b.userName ? 1 : -1;
    });
    setData(sortedData);
  }
  function descend() {
    const sortedData = [...data].sort((a, b) => {
      return a.userName < b.userName ? 1 : -1;
    });
    setData(sortedData);
  }

  const handleSearchChanged = useMemo(
    () =>
      debounce((ev) => {
        const inputValue = ev.target.value;
        const value = inputValue === "" ? null : inputValue;

        setSearchQuery(value);
      }),
    []
  );

  function handleFilterChanged(ev) {
    const inputValue = ev.target.value;
    const value = inputValue == -1 ? null : inputValue;

    setLinkTypeFilter(value);
  }

  const listUsers = data.map((object) => {
    return (
      <CardPreview
        key={object.username}
        cardInitials={object.username.slice(0, 2).toUpperCase()}
        username={object.username}
      />
    );
  });
  return (
    <div
      className="bg-no-repeat bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url("https://i.postimg.cc/rsd8FzcJ/hd-wallpaper-g3ef56cacf-1920.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <h1 className="text-5xl flex justify-center p-5 text-bold bg-white bg-opacity-20">
        Social Card Directory
      </h1>
      <div className="card-actions flex justify-evenly p-4 ">
        <button className="btn btn-primary" onClick={ascend}>
          Ascend
        </button>
        <button className="btn btn-secondary" onClick={descend}>
          Descend
        </button>
        <div className="form-control">
          <select
            onChange={handleFilterChanged}
            className="input select select-bordered"
          >
            <option defaultValue={true} value={-1}>
              All link types
            </option>
            {linkTypes.map((type, idx) => (
              <option key={idx} value={idx}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search users..."
            className="input input-bordered"
            onChange={handleSearchChanged}
          />
        </div>
      </div>
      <div className="flex justify-evenly">{listUsers}</div>
    </div>
  );
};
export default Directory;
