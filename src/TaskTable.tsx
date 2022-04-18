import { useQuery } from "@apollo/client";
import { Task } from './type';
import { GET_TASKS } from './query'

type Props = {
  task: Task
};

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

export function TaskTable() {
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
