import React from "react";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function UserForm(props) {
  return (
    <form className="userform">
      <div className="form-group">
        <label htmlFor="breed">Search:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          className="form-control"
        />

        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default UserForm;
