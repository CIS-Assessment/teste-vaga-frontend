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
  Modal,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";

import { task } from "../../redux";
import { toBr } from "../../utils/formatDate";

import style from "../../styles/tasks.module.scss";
import Layout from "../../components/Layout";

const Tasks = () => {
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [currTask, setCurrTask] = useState();
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

  const handleModal = (row) => {
    setCurrTask(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrTask();
  };

  return (
    <Layout>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={style.dialogTitle}>
          <Icon className={style.iconDialog}>
            {currTask?.completed ? "done_all" : "pending"}
          </Icon>

          {currTask?.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {currTask?.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Sair
          </Button>
          <Link href={`/tasks/${currTask?.id}`}>
            <Button onClick={handleClose} color="primary" autoFocus>
              Editar
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
      <Typography variant="h4" className={style.headerTitle}>
        TAREFAS
      </Typography>
      <Divider />

      <Grid className={style.gridBtnTable}>
        {/* <Button className={style.btn} startIcon={<Icon>filter_list</Icon>}>
          FILTRAR
        </Button> */}
        <Link href="/tasks/new">
          <Button startIcon={<Icon color="action">add_circle</Icon>}>ADICIONAR</Button>
        </Link>
      </Grid>
      <Container maxWidth="md" className={style.containerTasks}>
        <Grid className={style.titleHeader}>Título</Grid>
        <Grid className={`${style.titleHeader} ${style.titleHeaderRight}`}>Prazo</Grid>
      </Container>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      {tasks.map((row, i) => (
        <Container maxWidth="md" key={i} className={style.containerTasks}>
          <Grid
            className={style.gridRowTask}
            style={row.completed ? { textDecoration: "line-through" } : {}}
          >
            <Checkbox
              id={row.id}
              checked={row.completed}
              onChange={(e) => handleChange(e, row)}
              inputProps={{ "aria-label": "checkbox" }}
              style={{ color: "#91C9C7" }}
            />
            <Typography className={style.titleTask} onClick={() => handleModal(row)}>
              {row.title}
            </Typography>
          </Grid>
          <Grid className={style.gridRowTask}>
            <Typography style={row.completed ? { textDecoration: "line-through" } : {}}>
              {toBr(row.deadline)}
            </Typography>
            <Link href={`/tasks/${row.id}`}>
              <Icon className={style.iconButton}>edit</Icon>
            </Link>
            <Icon onClick={() => onDelete(row)} className={style.iconButton}>
              delete_outline
            </Icon>
          </Grid>
        </Container>
      ))}
    </Layout>
  );
};

export default Tasks;
