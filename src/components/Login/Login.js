import React, { useContext, useState } from 'react';
// import React, { useState } from 'react';
// import logo from './logo.svg';
// import header from '../../images/header.png';
// import logo from '../../images/logo.png';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
  // firebase.initializeApp({});
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app(); // if already initialized, use that one
}


const Login = () => {
  const [loggedInUser,setLoggedInUser] =useContext (UserContext);
  const history = useHistory ();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const[newUser,setNewUser] = useState(false);
  const [user,setUser] = useState ({
    isSignedIn: false,
    name:'', 
    email:'',
    photo:'',
  })
  const provider = new firebase.auth.GoogleAuthProvider();
  
   const handleSignIn = () => {
     history.push('/book');
   firebase.auth().signInWithPopup(provider)
  .then(result => {
    const{displayName,email,PhotoURL} = result.user;
      
    const signedInUser = {
      isSignedIn:true,
      name:displayName,
      email:email,
      photo:PhotoURL,
    }
    setUser (signedInUser);
    setLoggedInUser(signedInUser);
    history.replace(from);
    // console.log(result.user);
  })
    
  .catch (error => {
    // Handle Errors here.
    console.log (error);
    console.log(error.message);
  })
     
    }
    const handleSignOut = () => {
      // console.log ('SignOut clicked');
      firebase.auth().signOut()
      .then(result => {
        const signedOutUser = {
          isSignedIn: false,
          name:'', 
          email:'',
          password:'',
          photo:'',
          error:'',
          success:false,
        }
        setUser (signedOutUser)
        // console.log(result);
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      });
  }    
  const handleBlur = (event) => {
    // debugger;
    let isFieldValid = true;
  //  console.log (event.target.name,event.target.value);
   if (event.target.name === "email"){
     isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    //  console.log(isEmailValid)
   }
   if (event.target.name === "password"){
     const isPasswordValid = event.target.value.length > 6;
     const passwordHasNumber = /\d{1}/.test (event.target.value);
    //  console.log (isPasswordValid && passwordHasNumber)
    isFieldValid = isPasswordValid && passwordHasNumber;
   }

   if(isFieldValid){
    // [...cart,newItem]
    const newUserInfo = {...user};
    newUserInfo[event.target.name ] = event.target.value;
    setUser(newUserInfo);
   }
  
  }
 
  const handleSubmit = (event) => {
    console.log(user.email,user.password)
    if(newUser && user.email && user.password){
      // console.log('submitting')
      firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
  .then(result => {
    const newUserInfo = {...user};
    newUserInfo.error = '';
    newUserInfo.success = true;
    setUser(newUserInfo);
    updateUserName(user.name);
    // console.log(result)
      
  })
  .catch(error => {
    //Handle Error here.
    // var errorCode = error.code;
    const newUserInfo = {...user};
    newUserInfo.error = error.message;
    newUserInfo.success =false;
    setUser(newUserInfo);
    // var errorMessage = error.message;
    // console.log(errorCode,errorMessage)
    
  });

    
}
  if (!newUser && user.email && user.password){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(result => {
      const newUserInfo = {...user};
      newUserInfo.error = '';
      newUserInfo.success = true;
      setUser (newUserInfo);
      console.log('sign in user info',result.user);
    })
    .catch (function (error){
    // var errorCode = error.code;
    // var errorMessage = error.message;
    //Handle Error here.
    
    const newUserInfo = {...user};
    newUserInfo.error = error.message;
    newUserInfo.success =false;
    setUser(newUserInfo);
  });
  }
    event.preventDefault();
  }
// Update User Name
const updateUserName = name => {
  const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name 
  // photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  console.log ('user name update successfully')
}).catch(function(error) {
  console.log (error)
});
}
var googleProvider = new firebase.auth.GoogleAuthProvider();
const handleGoogleSignIn = () => {
  firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    console.log(user);
    history.replace(from);
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode,errorMessage,email)
  });
}

    return (
        <div className="form-container sign-up-container">
            <h1>Create an account </h1> 
            
            {/* {  
            user.isSignedIn ? <button onClick={handleSignOut}>Sign Out </button>:
            <button onClick={handleSignIn}> Sign In </button>
            } */}
                       
            {
              user.isSignedIn && <div>
              <p> Welcome, {user.name}</p>
              <br/>
              <p> Email:{user.email}</p>
              <img src = {user.photo} alt =""></img>
              </div>
            }
            {/* <h1>Account Validation Form </h1> */}
            {/* <p>Name :{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Password:{user.password}</p> */}
            <input type = "checkbox" onChange = {()=> setNewUser (!newUser)}name ="newUser" id ="" />
            <label htmlFor = "newUser"> New User Sign Up</label>
            
             <form onSubmit = {handleSubmit}>
            {newUser && <input name = "name" type = "text" onBlur ={handleBlur} placeholder ="Your Name"/>}
            <br/>
            <input type = "text" name="email" onBlur ={handleBlur} placeholder = "Email Address" required/>
            <br/>
            
            <input type="password" name="password" onBlur ={handleBlur} placeholder = "Your Password" required/>
            <br/>
            <Button variant="warning">Create an Account</Button>{' '}
            <input type ="submit" value = {newUser ? 'Sign Up' : 'Sign in'}/>
            <br/>
            {  
            user.isSignedIn ? <button onClick={handleSignOut}> Sign Out </button>:
            
            <button onClick={handleSignIn}> Already have an account ? <span style = {{color:'red'}}> Sign In</span> </button>
            
            
            }
            </form>
            
            <p style ={{color:'red'}}>{user.error}</p>
             {user.success && <p style ={{color:'green'}}>User {newUser ? 'created' :' Logged In'} successfully</p>}
            <button onClick={handleGoogleSignIn}>Google Sign in </button>
        </div>
    );
};

export default Login;


