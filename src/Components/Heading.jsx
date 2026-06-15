import { Link } from "react-router-dom";

function Heading() {
  return (
    <div className="bg-slate-800 relative">
      <Link to="/"><img className="w-15 h-15 absolute top-2 left-11" src="/Pepe Icon.png"/></Link>
      <div className="text-white text-5xl font-indie text-center p-4">Create a meme</div>
    </div>
  );
}

export default Heading;
