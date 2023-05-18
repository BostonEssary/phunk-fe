import Navbar from './Navbar.js';
import NavbarAccordian from './Accordian.js';
import * as React from "react";

const App = () => {
  const [matches, setMatches] = React.useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  React.useEffect(() => {
    window.matchMedia("(min-width: 768px)")
    .addEventListener('change', e => setMatches(e.matches))},[])

  return (
    <div>
      <div>
        {matches && (<Navbar/>)}
        {!matches && (<NavbarAccordian />)}
        
      </div>
      <div>
        
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
          <p className="text-3xl text-gray-700 font-bold mb-5">
            Welcome!
          </p>
          <p className="text-gray-500 text-lg">
            React and Tailwind CSS in action
          </p>
        </div>
      </div>
    </div>
  );
}


export default App
