import lightbulb from "../assets/lightbulb.png";

import network from "../assets/network.png";

import atom from "../assets/atom.png";
import "./index.css";
export default function Footer() {
  return (
    <div className="footer" id="technologies">
        <h2 className="about_header"  id="goals">Our technologies</h2>
        <div className="technology">
         <div className="container">
              <img src={lightbulb} width={150} height={150} alt="lightbulb" className="technology-pictures"/>
              <div className="text-container">
              
                <p className="text">ML</p>
                
            </div>
            <p className="under-text">Machine learning</p>
         </div>
         <div className="container">
              <img src={network} width={150} height={150} alt="lightbulb" className="technology-pictures"/>
              <div className="text-container">
              
                <p className="text">LSTM</p>
                
            </div>
            <p className="under-text">Long Short Term Memory Networks</p>
         </div>
         <div className="container">
              <img src={atom} width={150} height={150} alt="lightbulb" className="technology-pictures"/>
              <div className="text-container">
              
                <p className="text">HQNN</p>
                
            </div>
            <p className="under-text">Hybrid Quantum neural network</p>
         </div>
           
        </div>
    </div>
  )
}
