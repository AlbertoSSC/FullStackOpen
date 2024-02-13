const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  };

  const Course = ({ course }) => {
    const Header = ({ name }) => <h1>{name}Hola</h1>;

    const Total = ({ parts }) => (
      <p>
        <strong>
          Total of {parts.reduce((sum, part) => sum + part.exercises, 0)}
          exercises
        </strong>
      </p>
    );

    const Part = ({ part }) => (
      <p>
        {part.name} {part.exercises}
      </p>
    );

    const Content = ({ parts }) => (
      <>
        {parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </>
    );

    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    );
  };

  return <Course course={course} />;
};

export default App;
