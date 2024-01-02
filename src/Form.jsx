import { useState } from "react";

export default function Form() {

    let [name, SetName] =useState("");
    let [email, SetEmail] =useState("");
    let [password, SetPassword] =useState("");

    let submit =(event)=>{
        event.preventDefault();
        console.log({name: name,
            email: email,
            password: password});
        SetName("");
        SetEmail("");
        SetPassword("");
    }


  return (
    <>
      <div className="outer">
        <form action="" onSubmit={submit}>
          <div className="inputName">
            <label htmlFor="name">Name</label><br />
            <input type="text" placeholder="Enter your name" id="name" value={name} onChange={(event)=>SetName(event.target.value)}/>
          </div>

          <div className="email">
            <label htmlFor="email">Email</label><br />
            <input type="email" placeholder="Enter your email" id="email" value={email} onChange={(event)=>SetEmail(event.target.value)}/>
          </div>

          <div className="password">
            <label htmlFor="password">Password</label><br />
            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              value={password} onChange={(event)=>SetPassword(event.target.value)}/>
          </div>
          <hr />
          <div className="submit">
            <button >Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
