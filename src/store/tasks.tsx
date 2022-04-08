import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { db } from "../services/config/database";
import { handleNavigateTo } from "../utils/handleNavigateTo";

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

  useEffect(() => {
    handleGetTasks();
  }, []);

  return {
    isLoading,
    isDisabled,
    isFetching,
    tasks,
  };
};
