import { Component } from "react";
import logoImg from "./logo_en.png"
import "./Logo.css"
class Logo extends Component{
    render(){
        return<div className="logo">
            <h2>This is logo</h2>
            <img src={logoImg}/>
        </div>
    }
}
export default Logo