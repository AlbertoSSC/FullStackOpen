import { useState } from "react";
import { Header } from "./Components/Header";
import { ButtonComp } from "./Components/Button";
import { StatisticsLine } from "./Components/StatisticsLine";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const title = "Give feecbacks";
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return (
    <>
      <Header title={title} />

      <ButtonComp handleClick={() => setGood(good + 1)} text="good" />
      <ButtonComp handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <ButtonComp handleClick={() => setBad(bad + 1)} text="bad" />

      <h2>StatisticsLine</h2>

      {good === 0 && bad === 0 && neutral === 0 ? (
        <span>No feecbacks given </span>
      ) : (
        <table>
          <colgroup>
            <col style={{ backgroundColor: "lightgrey" }} />
            <col />
          </colgroup>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="total" value={total} />
            <StatisticsLine text="average" value={average.toFixed(2)} />
            <StatisticsLine text="positive" value={positive.toFixed(2)} />
          </tbody>
        </table>
      )}
    </>
  );
};

export default App;
