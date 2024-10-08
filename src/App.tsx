import "./App.css";
import Tasks from "./components/pomodoro/tasks/Tasks";
import TopMenu from "./components/pomodoro/timer/TopMenu";
import Timer from "./components/pomodoro/timer/Timer";

function App() {
  return (
    <div className=" bg-rose-700  flex flex-col justify-center items-center">
      <div className="flex flex-col items-center   mt-20 md:w-screen lg:w-[60%]">
        <TopMenu />

        <div>
          {" "}
          <Timer />
          <Tasks />
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
