import InputCard from "../components/InputCard";

const Login = () => {
  const loginData = [
    {
      inputLabel: "Username",
      placeholder: "type username here",
    },
    {
      inputLabel: "Password",
      placeholder: "type password here",
    },
  ];
  return (
    <>
      <div className="flex justify-evenly pt-10">
        <InputCard
          inputTitle="Login"
          inputArray={loginData}
          buttonName="Login"
          pageName="/register"
          linkName="Not already registered? Sign up here."
        />
      </div>
    </>
  );
};
export default Login;
