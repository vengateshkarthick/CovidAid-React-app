import React, { Component } from 'react';
import './hsp.css';
import vaccineImg from './images/getvaccine2.jpg';
import oxygenImg from './images/getoxygen.png';
import hospitalImg from './images/hospital.jpg';
class medicalaids extends Component {
    formatCounter = count =>{
        return count<=0 ? 'Zero' :count;
    }
    getBadgeClasses(counting){
         let badgeClass="badge m-2 badge-";
         return (counting<=0)? `${badgeClass}warning`:badgeClass+"primary";
    }
    render() { 
        return (  
            <div className="pt flex flex-wg flex-b flex-j-c">
                <div className="container m-3 trans-l-20 flex flex-wg brd flex-j-c">
                        <h1 className="w-100 m-3 font-pop topic">{this.props.availables.name}</h1>
                        <section className="m-1 flex flex-wg flex-j-sa">
                            <img src={oxygenImg} alt={"donate-oxygen"}></img>
                            <img src={vaccineImg} alt={"vaccination"}></img>
                            <img src={hospitalImg} alt={"hospital-beds"}></img>
                        </section>
                        <section className="flex flex-b flex-wg flex-j-sa usr-slc-no">
                                <span className={this.getBadgeClasses(this.props.availables.oxygenCount)}>{this.formatCounter(this.props.availables.oxygenCount)}</span>
                                <span className={this.getBadgeClasses(this.props.availables.vaccineCount)}>{this.formatCounter(this.props.availables.vaccineCount)}</span>
                                <span className={this.getBadgeClasses(this.props.availables.bedCount)}>{this.formatCounter(this.props.availables.bedCount)}</span>

                        </section>
                        <div className="flex flex-b flex-nw flex-j-sa">
                                    <button 
                                    className="font-pop m-3 btn btn-sm btn-border btn-color-1"
                                    onClick={()=>this.props.onReduceOxygen(this.props.availables)}
                                    >
                                        Register

                                    </button>

                                    <button 
                                    className="font-pop m-3 btn  btn-sm btn-border  btn-color-2"
                                    onClick={()=>this.props.onReduceVaccine(this.props.availables)}
                                    >
                                        Register 

                                    </button>

                                    <button 
                                    className="m-3 btn btn-sm btn-border font-pop btn-color-3"
                                    onClick={()=>this.props.onReduceBed(this.props.availables)}
                                    >
                                        Register 

                                    </button>
                        </div>
                </div>
            </div>
        );
    }
}
 
export default medicalaids;