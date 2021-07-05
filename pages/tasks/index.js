import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  Typography,
  Icon,
  Divider,
  Grid,
  Button,
  Checkbox,
  IconButton,
} from "@material-ui/core";

import { task } from "../../redux";
import style from "../../styles/tasks.module.scss";
import Layout from "../../components/Layout";

const Tasks = () => {
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);
  const tasksReducer = useSelector((state) => state.task.tasks);

  useEffect(() => {
    setTasks(tasksReducer);
  }, [tasksReducer]);

  const onDelete = (row) => {
    dispatch(task.actions.remove(row.id));
  };

  const handleChange = (e, row) => {
    dispatch(task.actions.update({ ...row, completed: e.target.checked }));
  };

  return (
    <Layout>
      <Typography variant="h4" className={style.headerTitle}>
        TAREFAS
      </Typography>
      <Divider />

      <Grid className={style.gridBtnTable}>
        <Button className={style.btn} startIcon={<Icon>filter_list</Icon>}>
          FILTRAR
        </Button>
        <Link href="/tasks/new">
          <Button startIcon={<Icon color="action">add_circle</Icon>}>ADICIONAR</Button>
        </Link>
      </Grid>
      <Grid container className={style.gridTasks}>
        <Grid item xs={6}>
          Título
        </Grid>
        <Grid item xs={6}>
          Prazo
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>

        {tasks.map((row, i) => (
          <Grid container key={i}>
            <Grid item xs={6}>
              <Checkbox
                id={row.id}
                checked={row.completed}
                onChange={(e) => handleChange(e, row)}
                inputProps={{ "aria-label": "checkbox" }}
              />
              {row.title}
            </Grid>
            <Grid item xs={6}>
              {row.deadline}
              <Link href={`/tasks/${row.id}`}>
                <IconButton>
                  <Icon>edit</Icon>
                </IconButton>
              </Link>
              <IconButton onClick={() => onDelete(row)}>
                <Icon>delete_outline</Icon>
              </IconButton>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Tasks;
