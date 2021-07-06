import Link from "next/link";
import {
  Typography,
  Icon,
  Divider,
  Grid,
  Button,
  Checkbox,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";

import { toBr } from "../../utils/formatDate";

import style from "../../styles/tasks.module.scss";
import Layout from "../../components/Layout";

const ListView = ({
  tasks,
  currTask,
  openDetail,
  openDelete,
  onDelete,
  handleChange,
  handleModalDetail,
  handleCloseDetail,
  handleClickOpenDelete,
  handleCloseDelete,
}) => {
  return (
    <Layout>
      <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deseja excluir essa tarefa?"}</DialogTitle>

        <DialogActions>
          <Button onClick={handleCloseDelete} color="primary">
            Não
          </Button>
          <Button onClick={onDelete} color="primary" autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openDetail}
        onClose={handleCloseDetail}
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
          <Button onClick={handleCloseDetail} color="primary">
            Sair
          </Button>
          <Link href={`/tasks/${currTask?.id}`}>
            <Button color="primary" autoFocus>
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
            <Typography
              className={style.titleTask}
              onClick={() => handleModalDetail(row)}
            >
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
            <Icon onClick={() => handleClickOpenDelete(row)} className={style.iconButton}>
              delete_outline
            </Icon>
          </Grid>
        </Container>
      ))}
    </Layout>
  );
};

export default ListView;
