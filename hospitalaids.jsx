import React, { Component } from 'react';

import "./hsp.css";
import Medicalaids from './medicalkits';
import Form from './hospitalform';
import Checkout from './checkout';

class hospitalaids extends Component {
    state = {
        availables:
        [
            {id:1,name:"Appolo Hospital",oxygenCount:20,vaccineCount:20, bedCount:20},
            {id:2,name:"American Hospital",oxygenCount:20,vaccineCount:20, bedCount:20},
            {id:3,name:"Hindustan Mission Hospital",oxygenCount:20,vaccineCount:20, bedCount:20},
            {id:4,name:"Vas Hospital",oxygenCount:20,vaccineCount:20, bedCount:20},
            {id:5,name:"Vivekanantha Hospital",oxygenCount:20,vaccineCount:20, bedCount:20},
        ],
        

        user:{username:" ",password:" ",signedIn:false,passwordStrength:"weak"},
        checkout:{bool:false,oxygen:0,vaccine:0,beds:0}
      }
      handleVaccine = available =>{
        const availables=this.state.availables;
        const index=availables.indexOf(available);
        let value=availables[index].vaccineCount;
        availables[index].vaccineCount=(value>0)?value-1:0;
        this.setState({availables});
      }

       handleOxygen = available =>{
        const availables=this.state.availables;
        const index=availables.indexOf(available);
        let value=availables[index].oxygenCount;
        availables[index].oxygenCount=(value>0)?value-1:0;
        this.setState({availables});
      }
       handleBed = available=>{
        const availables=this.state.availables;
        const index=availables.indexOf(available);
        let value=availables[index].bedCount;
        availables[index].bedCount=(value>0)?value-1:0;
        this.setState({availables});
      }

    handleUserName = event =>{
        let userName = event.target.value;
        const user=this.state.user;
        user.username=(userName).toString(); 
        this.setState({user})
    }
    setPasswordStrength=(pass)=>{
        let chkpass=pass.toString();
        let count=0;
        if(chkpass.search("[A-Z][a-z]{1,}")!==-1)count++;
        if(chkpass.search("[0-9]{1,}")!==-1) count++;
        if(chkpass.search("[@*&^#%_!]")!==-1) count++;
        if(count===1 && chkpass.length<8) return "weak";
        else if(count===2 && chkpass.length>=8) return "strong"; 
        else if(count===3 && chkpass.length>8) return "powerful";
        return "weak";
    }
    handlePassword = event=>{
         let password = event.target.value;
         const user=this.state.user;
         user.passwordStrength=this.setPasswordStrength(password);
         user.password=(password).toString(); 
         this.setState({user})
    }
    
    handleSubmit = ()=>{
         const user=this.state.user;
         if(user.userName !=="" && user.password!==""){
            if(user.password==="Covid190@india")
                    user.signedIn=true; 
            else{
                    const user=this.state.user;
                    user.password=" ";
                    this.setState({user});
                    window.alert("Please fill details correctly");

                 }
            }
         this.setState({user})

    }

    checkoutPage = ()=>{
        const {checkout}=this.state;
        const {availables}=this.state;
        availables.forEach(item =>{
            checkout.oxygen+=(20-item.oxygenCount);
            checkout.vaccine+=(20-item.vaccineCount);
            checkout.beds+=(20-item.bedCount);
        })
        checkout.bool=true;
        this.setState({checkout});

    }
    isSignedIn=()=>{
                 const landingpage=<div>
                                    <h1 className="m-2 pt heading">Covid19 Aid App Welcome {this.state.user.username}</h1>
                                    <h2 className="m-2 pt heading">Hospitals and Available Equips</h2>
                                                <ul>
                                                    {this.state.availables.map(availables=>
                                                        <Medicalaids
                                                            key={availables.id}
                                                            id={availables.id}
                                                            onReduceVaccine={this.handleVaccine}
                                                            onReduceBed={this.handleBed}
                                                            onReduceOxygen={this.handleOxygen}
                                                            availables={availables}
                                                        />

                                                    )}
                                                </ul>
                                                <div className="flex flex-j-c chkbtndiv">
                                                    <button className="font-pop" onClick={this.checkoutPage} id="checkoutbtn">Proceed to Checkout</button>
                                                </div>
                                                 
                                            </div>
                const CreateAccountpage=<Form
                                            onUserName={this.handleUserName}
                                            onPassword={this.handlePassword}
                                            onSubmiting={this.handleSubmit}
                                            user={this.state.user}
                                            />
                 const user=this.state.user;
                 const checkout=this.state.checkout;
                 if(user.signedIn && checkout.bool){
                    
                            const {checkout}=this.state;
                            const landingpage=<Checkout 
                                    oxygen={checkout.oxygen}
                                    vaccine={checkout.vaccine}
                                    beds={checkout.beds}
                                    user={this.state.user}
                                    />
                            return landingpage;
                        
                 }
                 else return (user.signedIn)?landingpage:CreateAccountpage;
                 
    }
    
    render() { 
       
        return (
                        <div>
                        {this.isSignedIn()}
                        </div>
        );
    }
}
 
export default hospitalaids;