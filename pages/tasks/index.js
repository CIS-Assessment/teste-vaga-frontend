import { useState } from "react";
import Link from "next/link";
import {
  Typography,
  Icon,
  Divider,
  Grid,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
} from "@material-ui/core";

import style from "../../styles/tasks.module.scss";
import Layout from "../../components/Layout";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Conferir Crud",
      description: "Conferir se está tudo certo e não esqueci nada",
      deadline: "03/07/2021",
      completed: false,
    },
  ]);

  const handleChangePage = () => {
    console.log("handleChangePage");
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
      <Grid>
        <TableContainer>
          <Table aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Título</TableCell>
                <TableCell align="right">Prazo de entrega</TableCell>
                <TableCell align="right">Tarefa conlcuída</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((row, i) => (
                <TableRow key={i}>
                  <TableCell component="th">{row.title}</TableCell>
                  <TableCell align="right">{row.deadline}</TableCell>
                  <TableCell align="right">{row.completed ? "Sim" : "Não"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={10}
            rowsPerPage={10}
            page={0}
            onChangePage={handleChangePage}
            // onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Grid>
    </Layout>
  );
};

export default Tasks;
