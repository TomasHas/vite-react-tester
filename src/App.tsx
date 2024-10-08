import "./App.css";
import Tasks from "./components/tasks/Tasks";
function App() {
  return (
    <div className=" bg-rose-700  flex flex-col justify-center items-center">
      <div className="flex flex-col items-center   mt-20 md:w-screen lg:w-[60%]">
        <p className=" text-4xl">Pomodoro</p>
        <Tasks />
        <div> </div>
      </div>{" "}
    </div>
  );
}

export default App;
