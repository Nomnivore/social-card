import InputCard from "../components/InputCard";
import { useCallback, useState } from "react";
import { useAPI } from "../hooks/useAPI";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const navigate = useNavigate();

  const api = useAPI();

  function submitForm() {
    if (!email || !username || !password || !passwordConfirm)
      console.log("Please fill out all required fields"); // convert this to user-facing msg

    if (password !== passwordConfirm) console.log("Password fields must match"); // convert to user-facing msg

    // additional validation checks could occur here, such as regex matching

    // inputs are good, submit form to API
    api
      .post("auth/register", {
        username,
        email,
        password,
      })
      .then((res) => {
        if (res.status == 200) {
          console.log("Register success");
          navigate("/login"); // should also pass along a message saying "you can now sign in" etc and pre-fill the username field
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const passwordsMatch = useCallback(
    () => password && password === passwordConfirm,
    [password, passwordConfirm]
  );

  const defaultHandler = (setState) => (ev) => setState(ev.target.value);

  const registerInputs = [
    {
      inputLabel: "Email",
      placeholder: "type email here",
      change: defaultHandler(setEmail),
    },
    {
      inputLabel: "Username",
      placeholder: "type username here",
      change: defaultHandler(setUsername),
    },
    {
      inputLabel: "Password",
      placeholder: "type password here",
      change: defaultHandler(setPassword),
    },
    {
      inputLabel: "Confirm Password",
      placeholder: "re-type password here",
      change: defaultHandler(setPasswordConfirm),
    },
  ];

  return (
    <>
      <div className="flex justify-evenly pt-10">
        <InputCard
          inputTitle="Sign Up"
          inputArray={registerInputs}
          buttonName="Sign Up"
          pageName="/login"
          linkName="Already Registered? Login here."
          buttonClick={submitForm}
        />

        {/* <p>{passwordsMatch() ? " " : "Passwords do not match!"}</p> */}
      </div>
    </>
  );
};
export default Register;
