import CardPreview from "../components/CardPreview";
import { useState, useEffect } from "react";

const Directory = () => {
  const sampleData = [
    {
      cardInitials: "FF",
      userName: "@FredFlintstone",
    },
    {
      cardInitials: "BR",
      userName: "@BarneyRubble",
    },
    {
      cardInitials: "VD",
      userName: "@VelmaDinkley",
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

  const listUsers = data.map((object, i) => {
    return (
      <CardPreview
        key={i}
        cardInitials={object.cardInitials}
        userName={object.userName}
      />
    );
  });
  return (
    <div>
      <h1 className="text-5xl flex justify-center p-5">Directory</h1>
      <button className="btn btn-primary" onClick={ascend}>
        Ascend
      </button>
      <button className="btn btn-primary" onClick={descend}>
        Descend
      </button>
      <div className="flex justify-evenly">{listUsers}</div>
    </div>
  );
};
export default Directory;
