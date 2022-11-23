import CardComponent from "../components/CardComponent";

const Directory = () => {
  return (
    <div>
      <h1 className="text-5xl flex justify-center p-5">Directory</h1>
      <div className="flex justify-evenly">
        <CardComponent
          cardInitials="FF"
          userName="@FredFlintstone"
          myLink1="Twitter/FredF"
          myLink2="Linkedin/FredF"
          myLink3="Youtube/FredF"
          myLink4="Github/FredF"
        />
        <CardComponent
          cardInitials="BR"
          userName="@BarneyRubble"
          myLink1="Twitter/BarneyR"
          myLink2="Linkedin/BarneyR"
          myLink3="Youtube/BarneyR"
          myLink4="Github/BarneyR"
        />
        <CardComponent
          cardInitials="VD"
          userName="@VelmaDinkley"
          myLink1="Twitter/VelmaD"
          myLink2="Linkedin/VelmaD"
          myLink3="Youtube/VelmaD"
          myLink4="Github/VelmaD"
        />
      </div>
    </div>
  );
};
export default Directory;
