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
        <button className="btn btn-success" onClick={descend}>
          Descend
        </button>
      </div>
      <div className="flex justify-evenly">{listUsers}</div>
    </div>
  );
};
export default Directory;
