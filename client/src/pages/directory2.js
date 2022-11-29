import CardPreview from "../components/CardPreview";
import { useState, useEffect } from "react";

const Directory = () => {
  const sampleData = [
    {
      id: 1,
      userName: "FredFlintstone",
    },
    {
      id: 2,
      userName: "BarneyRubble",
    },
    {
      id: 3,
      userName: "VelmaDinkley",
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(sampleData);
  }, []);

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

  const listUsers = data.map((object) => {
    return (
      <CardPreview
        key={object.id}
        cardInitials={object.userName.slice(0, 2).toUpperCase()}
        userName={"@" + object.userName}
      />
    );
  });
  return (
    <div>
      <h1 className="text-5xl flex justify-center p-5">Directory</h1>
      <div className="card-actions flex justify-evenly p-4 ">
        <button className="btn btn-primary" onClick={ascend}>
          Ascend
        </button>
        <button className="btn btn-accent" onClick={descend}>
          Descend
        </button>
              <div className="form-control">
                  <div className="input-group">
                      <select className="select select-bordered">
                          <option disabled selected>Pick link type</option>
                          <option>Youtube</option>
                          <option>Github</option>
                          <option>LinkedIn</option>
                          <option>Twitter</option>
                      </select>
                      <button className="btn">Go</button>
                  </div>
              </div>
              <div className="form-control">
                  <div className="input-group">
                      <input type="text" placeholder="Search users…" className="input input-bordered" />
                      <button className="btn btn-square">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      </button>
                  </div>
              </div>
      </div>
      <div className="flex justify-evenly">{listUsers}</div>
    </div>
  );
};
export default Directory;
