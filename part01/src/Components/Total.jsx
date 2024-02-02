export const Total = (props) => {
  return (
    <>
      <span>good: {props.goodCount}</span>
      <br />
      <span>neutral: {props.neutralCount}</span>
      <br />
      <span>bad: {props.badCount}</span>
    </>
  );
};
