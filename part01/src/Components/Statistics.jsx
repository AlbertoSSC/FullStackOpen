export const Statistics = (props) => {
  const total = props.goodCount + props.neutralCount + props.badCount;
  const average = (props.goodCount - props.badCount) / total;
  const positive = (props.goodCount / total) * 100;

  return (
    <>
      <section>
        <span>Good: {props.goodCount}</span>
        <br />
        <span>Neutral: {props.neutralCount}</span>
        <br />
        <span>Bad: {props.badCount}</span>
      </section>
      <br />
      <section>
        <span>Total votes: {total}</span>
        <br />
        <span>Average: {average.toFixed(2)}</span>
        <br />
        <span>Positive: {positive.toFixed(2)}</span>
      </section>
    </>
  );
};
