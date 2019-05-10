import React from "react";
// import "./style.css";
import { Input, FormBtn } from "../Form";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function UserForm(props) {
  return (
    <form>
          <label htmlFor="breed">First Name</label>
          <Input
            value={props.firstname}
            onChange={props.handleInputChange}
            name="firstname"
            placeholder="First Name (required)"
          />
          <label htmlFor="breed">Last Name</label>
          <Input
            value={props.lastname}
            onChange={props.handleInputChange}
            name="lastname"
            placeholder="Last Name (required)"
          />
          <label htmlFor="breed">Email</label>
          <Input
            value={props.email}
            onChange={props.handleInputChange}
            name="email"
            placeholder="Email (required)"
          />
          <label htmlFor="breed">Password</label>
          <Input
            value={props.password}
            onChange={props.handleInputChange}
            name="password"
            placeholder="Password (required)"
          />
          <label htmlFor="breed">Confirm Password</label>
          <Input
            value={props.confirmpassword}
            onChange={props.handleInputChange}
            name="confirmpassword"
            placeholder="Confirm Password (required)"
          />
       <FormBtn
                disabled={!(props.email && props.password)}
                onClick={props.handleFormSubmit}
              >
                Create Account
              </FormBtn>
            </form>
  );
}

export default UserForm;
