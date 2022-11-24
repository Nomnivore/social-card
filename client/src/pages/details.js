import Card from "../components/Card";

const Details = () => {
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
    <div className="flex justify-evenly pt-10">
      <Card
        cardInitials={data[0].cardInitials}
        userName={data[0].userName}
        myLinks={data[0].myLinks}
      />
    </div>
  );
};
export default Details;
