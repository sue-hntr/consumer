import React from "react";
// import "./style.css";

function UserSubmit(props) {
  return (


    <div className="card">
      <img src="" className="card-img-top" alt="..."/>
      <div className="card-body" key={props.id}>
        <h5 className="card-title">{props.title}</h5>
        <h5 className="card-title">{props.author}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" onClick={() => {
          console.log(props);
          props.saveUser({
            key: props.id,
            firstname: props.firstname,
            lastname: props.lastname,
            email: props.email,
            password: props.password
          }
          )
        }} className="btn btn-primary">Save to database</a>
      </div>
  </div>
  );
}

export default UserSubmit;
