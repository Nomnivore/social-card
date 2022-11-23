import CardComponent from "../components/CardComponent";

const Directory = () => {
  return (
      <div>
          <h1 className="text-5xl flex justify-center p-5">Directory</h1>
          <div className="flex justify-evenly">
          <CardComponent />
          <CardComponent />
              <CardComponent />
          </div>
    </div>
  );
};
export default Directory;
