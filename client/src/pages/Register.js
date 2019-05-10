import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import usersAPI from "../utils/usersAPI";
//Changed mind: using code from #11 solved
import UserForm from "../components/UserForm";
// import UserSubmit from "../components/UserSubmit";


class Register extends Component {
    state = {
      user: [],
      redirect: false,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      user_id: ""
    };
  
    // loadCurrentUser = id => {w
    //   usersAPI.getUser(id)
    //     .then(res =>
    //       this.setState({ 
    //         user: res.data, 
    //         firstname: "",
    //         lastname: "", 
    //         email: "",
    //         password: "",
    //         confirmpassword: ""
    //        })
    //     )
    //     .catch(err => console.log(err));
    // };

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      // console.log("hfsb: " + req.body);
      if (this.state.firstname && this.state.lastname &&
          this.state.email && this.state.password
          && this.state.confirmpassword) {
            usersAPI.saveUser({
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              email: this.state.email,
              password: this.state.password
            })
            .then(
              //get user find by email
              usersAPI.getUser({'email': 'this.state.email' }))
            //   .then(res =>
            //     console.log(res.body)
            //     //assign to variable and then set state and pass as ref to profile
            //   )
            .then(res =>
              this.setState({ user: res.data, redirect: true }))
            // .then(() => {
            //   console.log(res.data);
            // } )
        // .then(() => this.setState({
        //   redirect: true })
        //   )
        .catch(err => console.log(err));
            }
          console.log("x :" + this.state.user[0].email)};
          
    

    // saveUser = user => {
    //     usersAPI.saveUser(user);
    //   // this.setState({
    //   //   bookNow: "the hobbit"      });
    //   // console.log(bookNow);  
    //   console.log(`I've been clicked`);
    //   console.log(this.props);
    // }

    render() {
      const { redirect } = this.state;
      if (redirect){
        return <Redirect to='/profile' />
      }
      return (
        <div>
            <div className="container">
                <div className="pagetitlemarg">
                    <div className="row">
                        <div className="col-1 pzero"></div>
                        <div className="col-9 pzero text-left">
                          <h4 className="dblue">Welcome to 
                            <br />
                            Consumer Registration for Services</h4>
                        </div>
                        <div className="col-2"></div>
                    </div> 
                    <div className="row">
                        <div className="col-1 pzero"></div>
                        <div className="col-9 pzero text-left">
                          <h6 className="dblue">Already registered? Please&nbsp; 
                            <a href="/login">log in</a>.
                          </h6>
                        </div>
                        <div className="col-2"></div>
                    </div> 
                    <div className="pagetitlemarg">
                      <div className="row">
                        <div className="col-1 pzero"></div>
                        <div className="col-9 pzero text-left">
                        <UserForm 
                          handleInputChange={this.handleInputChange}
                          handleFormSubmit={this.handleFormSubmit}
                          key={this.state.id}
                          firstname={this.state.firstname}
                          lasttname={this.state.lastname}
                          email={this.state.email}
                          password={this.state.password}
                          confirmpassword={this.state.confirmpassword}
                        />
                      <div className="col-2"></div>
                        </div> 
                      </div>
                    </div> 
                  </div> 
              </div>
              </div>
      );
    }
  }
  
  export default Register;
  