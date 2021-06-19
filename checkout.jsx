import React, { Component } from 'react';
class Checkout extends Component {
    state = {  }
    
    render() { 
           const date=new Date();
            let i=1000;
            const TAOXYGEN=this.props.oxygen*1750;
            const TAVACCINE=this.props.vaccine*600;
            const TABED=this.props.beds*1200;            
        return (
         
        <div className="flex flex-wg chkpage">
            <h1 className="m-2 pt heading">Date:{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}</h1>
        <h1 className="m-2 pt heading">Stay Safe! Stay Healthy!!</h1>
                        <div className="flex flex-j-sb" style={{flexBasis:"100%"}}>
                            <h2 className="customer">Name : {this.props.user.username} </h2>
                            <h2 className="font-pop billno">Bill ID :{`${date.getDate()}${date.getMonth()}${date.getFullYear()}${i++}`}</h2>
                            
                        </div>
                        <ul className="flex flex-j-se chkheading" style={{flexBasis:"100%"}}>
                            <li>&emsp;&emsp;Booked O<sub>2</sub>Cylinders</li>
                            <li>Booked Vaccine Dosages</li>
                            <li>Rooms rented in Hospitals</li>
                        </ul>
                         <ul className="flex flex-j-se chkvalue" style={{flexBasis:"100%"}}>
                            <li className="font-pop" style={{color:"black"}}>{this.props.oxygen}</li>
                            <li className="font-pop" style={{color:"black"}}>{this.props.vaccine}</li>
                            <li className="font-pop" style={{color:"black"}}>{this.props.beds}</li>
                        </ul>
                        <ul className="flex flex-j-se chkheading" style={{flexBasis:"100%"}}>
                            <li>Amount per cylinder</li>
                            <li>Amount per Dosage</li>
                            <li>Amount per hour</li>
                        </ul>
                         <ul className="flex flex-j-se chkvalue" style={{flexBasis:"100%"}}>
                            <li className="font-pop" style={{color:"black"}}>Rs.1750</li>
                            <li className="font-pop" style={{color:"black"}}>Rs.600</li>
                            <li className="font-pop" style={{color:"black"}}>Rs.1200</li>
                        </ul>
                         <br></br>
                          <ul className="flex flex-j-se chkheading" style={{flexBasis:"100%"}}>
                            <li>Total Amount </li>
                            <li>Total Amount </li>
                            <li>Total Amount</li>
                        </ul>
                         <ul className="flex flex-j-se chkvalue" style={{flexBasis:"100%"}}>
                            <li className="font-pop" style={{color:"black"}}>Rs.{TAOXYGEN}</li>
                            <li className="font-pop" style={{color:"black"}}>Rs.{TAVACCINE}</li>
                            <li className="font-pop" style={{color:"black"}}>Rs.{TABED}</li>
                        </ul>
                        <ul className="flex flex-j-se chkheading" style={{flexBasis:"100%"}}>
                            <li>Grand Total</li>
                        </ul>
                         <ul className="flex flex-j-se chkvalue" style={{flexBasis:"100%"}}>
                            
                            <li className="font-pop" style={{color:"black"}}>Rs.{TAOXYGEN+TAVACCINE+TABED}</li>
                        </ul>
                        <ul className="flex flex-j-se" style={{flexBasis:"100%"}}>
                            <li className="flex flex-j-se">
                                <button className="print-btn font-pop" onClick={()=> window.print()}>
                                    Get my Covid Aids
                                </button>
                                 
                            </li>
                            
                        </ul>
                        <h5 style={{color:"var(--logo-color)",margin:"auto"}}>
                           **As per Instructions from the goverment,
                            You have to visit *Primary-Health-Center within 48hrs <br></br>&emsp;with a copy of this print-out 
                            to claim your **receipt with equips (receipt-no is your BillID)**
                        </h5>
                        </div>
);
    }
}
 
export default Checkout;