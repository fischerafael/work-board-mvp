import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { db } from "../services/config/database";
import { handleNavigateTo } from "../utils/handleNavigateTo";

const USER_ID = "1FASDF1";
interface ITask {
  id?: number;
  task: string;
  date: string;
  duration: number;
  category: string;
  user: string;
}

export const taskState = atom<ITask>({
  key: "task",
  default: {
    id: 0,
    task: "",
    date: new Date().toISOString(),
    duration: 0,
    category: "",
    user: USER_ID,
  },
});

export const useTaskState = () => {
  const [isDisabled, setDisabled] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [task, setTask] = useRecoilState(taskState);

  const handleCreateTask = async () => {
    const payload = {
      date: task.date,
      task: task.task,
      duration: task.duration,
      category: task.category,
      user: task.user,
    };

    setLoading(true);

    const { data, error } = await db.from("tasks").insert(payload);

    if (error) {
      alert("Error creating task");
      setLoading(false);
      return;
    }

    handleNavigateTo("/app/tasks");
  };

  useEffect(() => {
    if (!task.category || !task.date || !task.duration || !task.task) {
      setDisabled(true);
      return;
    }
    setDisabled(false);
  }, [task]);

  return {
    task,
    isLoading,
    isDisabled,
    setTask,
    handleCreateTask,
  };
};
