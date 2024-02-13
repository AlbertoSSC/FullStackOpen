const App = () => {
  const course = [
    {
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
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const Course = ({ course }) => {
    const Header = ({ name }) => <h2>{name}</h2>;

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
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    );
  };

  return (
    <>
      <h1>Web development curriculum</h1>
      {course.map((c) => (
        <Course key={c.id} course={c} />
      ))}
    </>
  );
};

export default App;
