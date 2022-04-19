import { useQuery } from "@apollo/client";
import { TableRowProps, Task, TaskTableProps } from './type';
import { GET_TASKS } from './query'
import { DialogOpenButton } from "./DialogOpenButton";

const Row: React.VFC<TableRowProps> = (props) => {
  const task = props.task
  return (
    <>
      <td>{task.id}</td>
      <td>{task.name}</td>
      <td>{task.plan}</td>
      <td>{task.actual}</td>
      <td><DialogOpenButton toggledialogOpen={props.toggledialogOpen} /></td>
    </>
  );
};

export const TaskTable: React.VFC<TaskTableProps> = (props) => {
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
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            data.tasks.map((task: Task) => {
              return (
                <tr key={task.id}>
                  <Row task={task} toggledialogOpen={props.toggledialogOpen} />
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  );
}
