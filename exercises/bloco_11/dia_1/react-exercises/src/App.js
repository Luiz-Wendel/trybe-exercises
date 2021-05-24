const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
};

const tasks = ['task 1', 'task 2', 'task 3', 'task 4', 'task 5'];

function App() {
  return (
    <>
      <ol>
        { tasks.map((task) => Task(task)) }
      </ol>
    </>
  );
}

export default App;
