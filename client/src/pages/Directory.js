import Card from "../components/Card";

const Directory = () => {
  const data = [
    {
      cardInitials: "FF",
      userName: "@FredFlintstone",
      myLinks: [
        "Twitter/FredF",
        "Linkedin/FredF",
        "Youtube/FredF",
        "Github/FredF",
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-5xl flex justify-center p-5">Directory</h1>
      <div className="flex justify-evenly">
        <Card
          cardInitials={data[0].cardInitials}
          userName={data[0].userName}
          myLinks={[
            data[0].myLinks[0],
            data[0].myLinks[1],
            data[0].myLinks[2],
            data[0].myLinks[3],
          ]}
        />
        <Card
          cardInitials="BR"
          userName="@BarneyRubble"
          myLinks={["Twitter/BarneyR", "Linkedin/BarneyR", "Youtube/BarneyR"]}
        />
        <Card
          cardInitials="VD"
          userName="@VelmaDinkley"
          myLinks={["Twitter/VelmaD", "Linkedin/VelmaD"]}
        />
      </div>
    </div>
  );
};
export default Directory;
