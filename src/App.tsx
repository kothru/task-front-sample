import {
  useQuery,
  gql
} from "@apollo/client";

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

function Tasks() {
  const { loading, error, data } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div></div>
  );
}

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <Tasks />
    </div>
  )
}

export default App
