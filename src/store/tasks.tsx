import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { db } from "../services/config/database";

interface ITask {
  id?: number;
  task: string;
  date: string;
  duration: number;
  category: string;
}

export const taskState = atom<ITask[]>({
  key: "tasks",
  default: [],
});

export const useTasksState = () => {
  const [isDisabled, setDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isFetching, setFetching] = useState(false);

  const [tasks, setTasks] = useRecoilState(taskState);

  console.log(tasks);

  const handleGetTasks = async () => {
    setFetching(true);
    const { data, error } = await db.from("tasks").select();

    if (error) {
      alert("Error fetching tasks");
      setFetching(false);
      return;
    }

    setTasks(data);
    setFetching(false);
  };

  const handleRemoveTask = async (id: string) => {
    const { data, error } = await db.from("tasks").delete().match({ id: id });

    if (error) {
      alert("Error removing task");
      setLoading(false);
      return;
    }

    alert("Task Removed");
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  return {
    isLoading,
    isDisabled,
    isFetching,
    tasks,
    handleRemoveTask,
  };
};
