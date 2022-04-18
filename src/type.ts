// https://www.graphql-code-generator.com/
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateActual: Array<Task>;
};


export type MutationUpdateActualArgs = {
  tasks: Array<TaskInputType>;
};

export type Query = {
  __typename?: 'Query';
  tasks?: Maybe<Array<Maybe<Task>>>;
};

export type Task = {
  __typename?: 'Task';
  actual: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  plan: Scalars['Int'];
};

export type TaskInputType = {
  actual: Scalars['Int'];
  id: Scalars['Int'];
};
