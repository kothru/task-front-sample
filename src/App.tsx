import { useQuery, gql } from "@apollo/client";
import { Task } from './type';

type Props = {
  task: Task
};

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      name
      plan
      actual
    }
  }
`;

const Row: React.VFC<Props> = (props) => {
  const task = props.task
  return (
    <>
      <td>{task.id}</td>
      <td>{task.name}</td>
      <td>{task.plan}</td>
      <td>{task.actual}</td>
    </>
  );
};

function TaskTable() {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (data === undefined) return <p>No Data</p>;

  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Plan</th>
            <th>Actual</th>
          </tr>
        </thead>
        <tbody>
          {
            data.tasks.map((task: Task) => {
              return <tr key={task.id}><Row task={task} /></tr>
            })
          }
        </tbody>
      </table>
    </div >
  );
}

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <TaskTable />
    </div>
  )
}

export default App
