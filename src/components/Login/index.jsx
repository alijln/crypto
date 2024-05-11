import { useRef, useState } from "react";
import "./index.css"; // Import the CSS file

const generateVerificationCode = () => {
  // Generate a random number between 100000 and 999999
  return Math.floor(Math.random() * 900000) + 100000;
};

const Login = ({ successLoginFn, isLogin }) => {
  const [mobile, setMobile] = useState("");
  const [mobileErr, setMobileErr] = useState("black");
  const [verificationCode, setVerificationCode] = useState("");

  const inputRef = useRef(null);

  const handleGenerateCode = () => {
    const code = generateVerificationCode();
    setVerificationCode(code.toString());
    console.log(code);
    alert(code);
  };

  const handleMobileChange = (event) => {
    const number = event.target.value;
    const mobileNumberRegex = /^0\d*$/;
    setMobile(number);
    if (
      mobileNumberRegex.test(number) &&
      (number.length > 1 ? number.startsWith("09") : true)
    ) {
      if (number.length == 11) {
        setMobileErr("green");
      } else if (number.length > 11) {
        setMobileErr("red");
      } else {
        setMobileErr("black");
      }
    } else {
      setMobileErr("red");
    }
  };

  const handleLogin = () => {
    console.log(inputRef.current.value);
    if (inputRef.current.value === verificationCode) {
      alert("logined");
      successLoginFn();
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          className={
            mobileErr === "red"
              ? "mobileInvalid"
              : mobileErr === "green"
              ? "mobileValid"
              : ""
          }
          placeholder="input mobile number"
          value={mobile}
          onChange={handleMobileChange}
        />
        <br />
        <button
          type="button"
          disabled={mobileErr !== "green"}
          onClick={handleGenerateCode}
        >
          Generate Verification Code
        </button>
        <br />
        {verificationCode && (
          <div>
            <p>Enter verificationCode here</p>
            <input
              type="text"
              ref={inputRef}
              placeholder="Enter Verification Code"
            />
            <button type="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
