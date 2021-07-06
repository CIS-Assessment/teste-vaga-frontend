import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import DashboardView from "../views/dasboard/DashboardView";

const Home = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);

  const chartData = [
    { label: "Concluído", population: completed },
    { label: "Pendente", population: pending },
  ];

  useEffect(() => {
    if (tasks) {
      setCompleted(tasks.filter((r) => r.completed)?.length);
      setPending(tasks.filter((r) => !r.completed)?.length);
    }
  }, [tasks]);

  return <DashboardView chartData={chartData} />;
};

export default Home;
