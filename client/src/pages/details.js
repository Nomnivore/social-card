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
    <div>
      <Card
        cardInitials={data.cardInitials}
        userName={data.userName}
        myLinks={[
          data[0].myLinks[0],
          data[0].myLinks[1],
          data[0].myLinks[2],
          data[0].myLinks[3],
        ]}
      />
    </div>
  );
};
export default Details;
