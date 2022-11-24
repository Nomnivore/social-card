import Card from "../components/Card";

const Directory = () => {
  return (
    <div>
      <h1 className="text-5xl flex justify-center p-5">Directory</h1>
      <div className="flex justify-evenly">
        <Card
          cardInitials="FF"
          userName="@FredFlintstone"
          myLinks={[
            "Twitter/FredF",
            "Linkedin/FredF",
            "Youtube/FredF",
            "Github/FredF",
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
