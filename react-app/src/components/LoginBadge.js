import React from 'react';
//import Session from "../services/session";
const Session = {};

function login(){
    this.$router.push('/login');
    //this.Session.Login();
}

function name(){
    return this.Session.user.firstName + ' ' + this.Session.user.lastName;
}

export default () => !Session.user ? 
    <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light" click="login">
            Log in
          </a>
    </div> :
    <div v-else>
        Hello {name}
    </div>