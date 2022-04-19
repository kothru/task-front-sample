import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      name
      plan
      actual
    }
  }
`;

export const UPDATE_ACTUAL = gql`
  mutation UpdateActual($tasks: [TaskInputType!]!) {
    updateActual(tasks: $tasks) {
      id
      name
      plan
      actual
    }
  }
`;