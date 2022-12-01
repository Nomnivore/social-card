import InputCard from "../components/InputCard";

const Register = () => {
  const registerData = [
    {
        inputLabel: "Email",
        placeholder: "type email here",
      },
    {
      inputLabel: "Username",
      placeholder: "type username here",
    },
    {
      inputLabel: "Password",
      placeholder: "type password here",
    },
    {
        inputLabel: "Confirm Password",
        placeholder: "re-type password here",
    },
  ];
  return (
    <>
      <div className="flex justify-evenly pt-10">
        <InputCard
          inputTitle="Sign Up"
          inputArray={registerData}
          buttonName="Sign Up"
          pageName="/login"
          linkName="Already Registered? Login here."
        />
      </div>
    </>
  );
};
export default Register;
