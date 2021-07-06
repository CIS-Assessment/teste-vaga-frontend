import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { task } from "../../redux";
import ListView from "../../views/tasks/ListView";

const Tasks = () => {
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [currTask, setCurrTask] = useState();
  const tasksReducer = useSelector((state) => state.task.tasks);

  useEffect(() => {
    setTasks(tasksReducer);
  }, [tasksReducer]);

  const onDelete = () => {
    dispatch(task.actions.remove(currTask.id));
    setOpenDelete(false);
    setCurrTask();
  };

  const handleChange = (e, row) => {
    dispatch(task.actions.update({ ...row, completed: e.target.checked }));
  };

  const handleModalDetail = (row) => {
    setCurrTask(row);
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
    setCurrTask();
  };

  const handleClickOpenDelete = (row) => {
    setCurrTask(row);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setCurrTask();
  };

  const handleChangeFilter = (e) => {
    setTasks(
      tasksReducer.filter(
        (r) => r.title.includes(e.target.value) || r.deadline.includes(e.target.value)
      )
    );
  };

  return (
    <ListView
      tasks={tasks}
      currTask={currTask}
      openDetail={openDetail}
      openDelete={openDelete}
      openFilter={openFilter}
      handleChangeFilter={handleChangeFilter}
      setOpenFilter={setOpenFilter}
      onDelete={onDelete}
      handleChange={handleChange}
      handleModalDetail={handleModalDetail}
      handleCloseDetail={handleCloseDetail}
      handleClickOpenDelete={handleClickOpenDelete}
      handleCloseDelete={handleCloseDelete}
    />
  );
};

export default Tasks;
