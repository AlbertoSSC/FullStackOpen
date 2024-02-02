import { useState } from "react";
import { Header } from "./Components/Header";
import { ButtonComp } from "./Components/Button";
import { Statistics } from "./Components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const title = "Give feecbacks";

  return (
    <>
      <Header title={title} />

      <ButtonComp handleClick={() => setGood(good + 1)} text="good" />
      <ButtonComp handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <ButtonComp handleClick={() => setBad(bad + 1)} text="bad" />

      <h2>Statistics</h2>
      <Statistics goodCount={good} neutralCount={neutral} badCount={bad} />
    </>
  );
};

export default App;
