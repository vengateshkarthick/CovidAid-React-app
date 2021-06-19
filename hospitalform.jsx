import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import Hospital from './hospitalaids';
import './hsp.css';
//import {  Router,Route,Redirect,Switch} from 'react-router';
import formImg from './images/undraw_Security_on_ff2u.svg';

class hospitalForm extends Component {
        passwordStrength=(strength)=>{
    if(strength==="weak") return <h3 className="weak">Weak</h3>;
    else if(strength==="strong") return <h3 className="strong">Strong</h3>;
    else if(strength==="powerful") return <h3 className="powerful">Powerful</h3>;
    }
    render() { 
        return ( 
        <div className="flex flex-j-se header" id="header">
         <h1 className="m-2 pt heading">Welcome to Covid19 Aid App </h1>
        <div className="signIn flex flex-j-se" id="signIn" aria-modal="true">
        <img id="signInImg" alt="security" src={formImg} aria-label="signInImg"/>
        <form className="signInForm flex flex-wg">
                <label htmlFor="chkUID" className="font-pop" >Username </label>
                <input type="text" className="font-pop inp" onChange={this.props.onUserName}  placeholder="Name">
                </input>
                <br></br><br></br>
                <label htmlFor="chkPassword" className="font-pop">Password</label>
                <input type="password" className="font-pop inp" onChange={this.props.onPassword} placeholder="Password is Covid190@india">
                </input>
                <br></br>
                <span className="flex pwdsts">
                    &emsp;Strength:&emsp;{this.passwordStrength(this.props.user.passwordStrength)}
                </span>
                <br></br><br></br>
                <input type="submit" onClick={this.props.onSubmiting} className="font-pop" value="Sign in" id="signInBtn" name="signInBtn"></input>
                             
               </form>
            </div>      
    
        </div>
       
        );
    }
}
 
export default hospitalForm;