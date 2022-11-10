import React from 'react'
import { useState } from "react";
import {EMAIL_REQUIRE, EMAIL_WRONG, PASSWORD_REQUIRE, PASSWORD_WRONG, SUCCESS} from './Validations';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailErr, setEmailErr] = useState();
  const [passwordErr, setpasswordErr] = useState();
  
  const regEmail = /\S+@\S+\.\S+/;
  const regPass = /[A-Z][a-zA-Z0-9]{5,31}/;

  const handelSubmit = (event)=>{
    // event.preventDefault();
   

    const newEmailErr = email === undefined ? EMAIL_REQUIRE : email.length === 0 ? EMAIL_REQUIRE : !regEmail.test(email) ? EMAIL_WRONG : ""
    const newPassErr = password === undefined ? PASSWORD_REQUIRE : password.length === 0 ? PASSWORD_REQUIRE : !regPass.test(password) ? PASSWORD_WRONG : ""
    
    setEmailErr(newEmailErr);
    setpasswordErr(newPassErr);
    if(newEmailErr === "" && newPassErr === "")
    {
      console.log("email", email);
      console.log("password", password);
    }

    // if(email === undefined || email.length === 0)
    // {
    //     return setEmailErr(EMAIL_REQUIRE);
    // }
    // else if(!regEmail.test(email))
    // {
    //     return setEmailErr(EMAIL_WRONG);
    // }
    // else if(password === undefined || password.length === 0)
    // {
    //     return setpasswordErr(PASSWORD_REQUIRE);
    // }
    // else if(!regPass.test(password))
    // {
    //     return passwordErr(PASSWORD_WRONG);
    // }

  }

  const handleChangeEmail = (event) =>{

    const newEmail = event.target.value;
    setEmail(newEmail)
    // console.log(newEmail);
  }

  const handleChangePass = (event) =>{
    const newPassword = event.target.value;
    setPassword(newPassword);
    // console.log(newPassword);
  }

  // const [name, setName] = useState("Huong");
  // const [color, setColor] = useState("#FF0000");
  // const handelName = (event) =>{
  //   if(name === "Huong"){
  //     setName("Thoai");
  //   }else{
  //     setName("Huong");
  //   }
  // }

    return(
      <div>
        {/* <form onSubmit={printValue}> */}
        <div >
        <div className="mb-3">
            <label for="exampleInputEmail1" htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleChangeEmail} />
            <div className="error__email" style={{color: 'red' , display: emailErr? "block" : "none"}}>{emailErr}</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleChangePass}/>
            <div className="error__password" style={{color: 'red' , display: passwordErr ? "block" : "none"}}>{passwordErr}</div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handelSubmit}>Login</button>
          {/* <p style={{color: name =='Huong' ? '#ff0000' : '#00ff00'}}>Hello {name}</p> */}

        </div>
           {/* </form> */}
      </div>
    )
};


