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

function ModalForm() {
  return (
    <>
      <label htmlFor="my-modal" className="btn modal-button">open modal</label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-neutral text-neutral-content">
          <div className="card bg-neutral text-neutral-content">
            <div className="card-body">
              <h2 className="card-title justify-start">Edit Actual</h2>
              <div className="form-control w-full">
                <label htmlFor="my-range" className="label">
                  <span className="label-text">Neil Gottlieb II</span>
                </label>
                <input type="range" min="0" max="100" id="my-range" className="range" />
              </div>
              <div className="mt-6 card-actions justify-end">
                <label htmlFor="my-modal" className="btn btn-primary">Accept</label>
                <label htmlFor="my-modal" className="btn btn-ghost">Deny</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <TaskTable />
      <ModalForm />
    </div>
  )
}

export default App
