import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <nav className=" bg-yellow-300 absolute left-0 top-0 h-20 w-screen">
        <ul className=" bg-red-800 flex flex-row h-full justify-around items-center">
          <li className=" capitalize ">
            <Link to="/" className=" text-red-300">
              home
            </Link>
          </li>
          <li className=" capitalize ">
            {" "}
            <Link to="/wimhof" className=" text-red-300">
              wim hof method
            </Link>
          </li>
          <li className=" capitalize ">
            {" "}
            <Link to="/cooper" className=" text-red-300">
              cooper
            </Link>
          </li>
          <li className=" capitalize ">
            {" "}
            <Link to="/eggs" className=" text-red-300">
              eggs
            </Link>
          </li>
          <li className=" capitalize ">
            {" "}
            <Link to="/pomodoro" className=" text-red-300">
              pomodoro
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
