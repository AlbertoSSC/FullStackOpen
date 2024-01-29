import { HeaderComponent } from "./Components/Header";
import { ContentComponent } from "./Components/Content";
import { TotalComponent } from "./Components/Total";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
      <HeaderComponent courseName={course} />
      <ContentComponent
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <TotalComponent
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </>
  );
};

export default App;
