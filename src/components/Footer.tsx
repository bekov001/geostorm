import lightbulb from "../assets/lightbulb.png";
import "./index.css";
export default function Footer() {
  return (
    <div className="footer">
        <h2 className="about_header"  id="goals">Our technologies</h2>
        <div className="technology">
            <img src={lightbulb} alt="lightbulb" className="technology-pictures"/>
            <div className="text-container">
                <p className="text">ML</p>
                <p className="under-text">Machine learning</p>
            </div>
        </div>
    </div>
  )
}
