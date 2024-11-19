export interface Todo {
  _id: string;
  title: string;
  description?: string;
  isComplete: boolean;
}

export type Filter = "all" | "active" | "completed";
