import { useCallback, useState } from "react";
import { useAPI } from "../hooks/useAPI";
import { useNavigate, Link } from "react-router-dom";

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
    () => (password && password === passwordConfirm) || false,
    [password, passwordConfirm]
  );

  const defaultHandler = (setState) => (ev) => setState(ev.target.value);

  return (
    <div className="flex justify-evenly pt-10">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Sign Up</h2>
          <div className="grid gap-4">
            <div className="form-control">
              <label className="input-group input-group-vertical pb-3">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="type email here"
                  className="input input-bordered"
                  onChange={defaultHandler(setEmail)}
                />
              </label>

              <label className="input-group input-group-vertical pb-3">
                <span>Username</span>
                <input
                  type="text"
                  placeholder="type username here"
                  className="input input-bordered"
                  onChange={defaultHandler(setUsername)}
                />
              </label>

              <label className="input-group input-group-vertical pb-3">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="Type password here"
                  className="input input-bordered"
                  onChange={defaultHandler(setPassword)}
                />
              </label>

              <label className="input-group input-group-vertical pb-3">
                <span>Confirm Password</span>
                <input
                  type="password"
                  placeholder="Re-type password here"
                  className="input input-bordered"
                  onChange={defaultHandler(setPasswordConfirm)}
                />
              </label>
            </div>
          </div>
          {password && passwordConfirm && !passwordsMatch() ? (
            <div className="alert alert-error shadow-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current flex-shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Passwords do not match!</span>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className="card-actions flex justify-end">
            <button className="btn btn-primary" onClick={submitForm()}>
              Sign Up
            </button>
          </div>
          <div className="card-actions justify-center">
            <Link to="/login" className="link link-primary">
              Already Registered? Log in here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
