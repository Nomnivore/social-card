import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAPI } from "../hooks/useAPI";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useAuth();

  const api = useAPI();

  function submitForm(e) {
    e.preventDefault();
    if (!username || !password)
      return console.log("Please fill out all required fields"); // convert to user-facing msg

    // inputs are good, submit form to API
    api
      .post("/auth/login", {
        username,
        password,
      })
      .then((res) => {
        if (res.status == 200) {
          if (!res.data?.token || !res.data?.username)
            return console.log("Login Error: response missing login details");

          login(res.data);
          console.log("Login success");
          navigate("/"); // maybe show a "you are now logged in" message?
        }
      })
      .catch((err) => {
        if (err.response?.status == 401) {
          return console.log("Login Error: Invalid details");
        }

        console.log(err);
      });
  }

  const defaultHandler = (setState) => (ev) => setState(ev.target.value);

  return (
    <div
      className="bg-no-repeat bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url("https://i.postimg.cc/rsd8FzcJ/hd-wallpaper-g3ef56cacf-1920.jpg")`,
      }}
    >
      <div className="flex justify-evenly pt-10">
        <div className="card w-96 bg-base-200 shadow-xl">
          <form onSubmit={submitForm} className="card-body">
            <h2 className="card-title flex justify-center">Log In</h2>
            <div className="grid gap-4">
              <div className="form-control">
                <label className="input-group input-group-vertical pb-3">
                  <span>Username</span>
                  <input
                    type="text"
                    placeholder="type username here"
                    className="input input-bordered"
                    required
                    onChange={defaultHandler(setUsername)}
                  />
                </label>

                <label className="input-group input-group-vertical pb-3">
                  <span>Password</span>
                  <input
                    type="password"
                    placeholder="type password here"
                    className="input input-bordered"
                    required
                    onChange={defaultHandler(setPassword)}
                  />
                </label>
              </div>
            </div>
            <div className="card-actions flex justify-center">
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>
            <div className="card-actions justify-center">
              <Link to="/register" className="link link-primary">
                Not already registered? Sign up here.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
