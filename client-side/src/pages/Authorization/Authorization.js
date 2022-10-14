import React, { useState } from "react";
import "./Authorization.scss";
import { logIn, signUp } from "../../redux/actions/AuthAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
 
const Authorization = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const error = useSelector((state) => state.authReducer.error);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState(initialState);
  const [loginError, setLoginError] = useState(null)
  const [confirmPass, setConfirmPass] = useState(true);

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      console.log(error)
      dispatch(logIn(data, navigate));
    }
  };

  return (
    <div className="Auth">
      <div className="Auth__container">
      <div className="Auth__left">
        <div className="Auth__webnames">
          <h2>Sandbox Metaverse</h2>
          <h4>Open your new world</h4>
        </div>
      </div>

      <div className="Auth__right">
        <form className="Auth__form" onSubmit={handleSubmit}>
          {isSignUp && (
            <div className='Auth__login'>
              <input
                required
                type="text"
                placeholder="First Name"
                className="Auth__infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="Auth__infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}

          <div className='Auth__username'>
            <input
              required
              type="text"
              placeholder="Username"
              className="Auth__infoInput Auth__infoInput-username"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className='Auth__passwords'>
            <input
              required
              type="password"
              className="Auth__infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="Auth__infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>

          <div
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </div>
          <div className='Auth__credentials-part'>
            <div
              className="Auth__detection"
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account?"
                : "Don't have an account?"}
            </div>
            <div className='Auth__credentials-btn'>
              <button
                className="button infoButton"
                type="Submit"
                disabled={loading}
              >
                {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
              </button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Authorization;