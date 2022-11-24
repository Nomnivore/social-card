import CardPreview from "../components/CardPreview";

const Directory = () => {
  const data = [
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
  return (
    <div>
      <h1 className="text-5xl flex justify-center p-5">Directory</h1>
      <div className="flex justify-evenly">
        <CardPreview
          cardInitials={data[0].cardInitials}
          userName={data[0].userName}
        />
        <CardPreview
          cardInitials={data[1].cardInitials}
          userName={data[1].userName}
        />
        <CardPreview
          cardInitials={data[2].cardInitials}
          userName={data[2].userName}
        />
      </div>
    </div>
  );
};
export default Directory;
