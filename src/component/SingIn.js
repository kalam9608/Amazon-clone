import React from "react";
import Footer from "./Footer";
import "./singin.css";

const SingIn = () => {
  return (
    <>
    <div className="singin">
      <img  className="signin_img" src="images/download.png" alt="" />
      <form>
        <h2>Sign-in</h2>
        <div className="row mb-3">  
            <strong>E-mail</strong>
            <input type="email" className="form-control" id="inputEmail3" />
        </div>

        <div className="row mb-3">
            <strong>Password</strong>
            <input type="password" className="form-control" id="inputPassword3" />
        </div>

        <button className="singin_button">
          Sign-in
        </button>
        <div className="signin_para">By signing-in you agree to amazone condition of use and sale plese see our privacy Notice.</div>
        <button className="singin_button2">
          Create your Amazone Account
        </button>
      </form>
    </div>

    <Footer/>

    </>
  );
};

export default SingIn;
