import { Link } from "react-router-dom";

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
    //<>
    //  <div className="flex justify-evenly pt-10">
    //    <InputCard
    //      inputTitle="Login"
    //      inputArray={loginData}
    //      buttonName="Login"
    //      pageName="/register"
    //      linkName="Not already registered? Sign up here."
    //    />
    //  </div>
    //</>
    <div className="flex justify-evenly pt-10">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Log In</h2>
          <div className="grid gap-4">
            <div className="form-control">
              <label className="input-group input-group-vertical pb-3">
                <span>Username</span>
                <input
                  type="text"
                  placeholder="type username here"
                  className="input input-bordered"
                  /*onChange={change}*/
                />
              </label>

              <label className="input-group input-group-vertical pb-3">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="type password here"
                  className="input input-bordered"
                  /*onChange={change}*/
                />
              </label>
            </div>
          </div>
          <div className="card-actions flex justify-end">
            <button className="btn btn-primary" /*onClick={buttonClick}*/>
              Log In
            </button>
          </div>
          <div className="card-actions justify-center">
            <Link to="/register" className="link link-primary">
              Not already registered? Sign up here.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
