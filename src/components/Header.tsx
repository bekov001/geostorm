import "./index.css";
// import Link 
export default function Header() {
  return (
    <div className="header">
    <a href="/" className="jigitter">Jigitter</a>
    <a href="/results" className="links"><p>Results</p></a>
    <a href="#goals" className="links"><p>Goals</p></a>
    <a href="#mission" className="links"><p>Mission</p></a>
    </div>
  )
}
