import {
  Typography,
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
import { Icon } from "@material-ui/core";

const Tasks = () => {
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
        <Button startIcon={<Icon color="action">add_circle</Icon>}>ADICIONAR</Button>
      </Grid>
      <Grid>
        <TableContainer>
          <Table aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={"oi"}>
                <TableCell component="th">{"oi"}</TableCell>
                <TableCell align="right">{"oi"}</TableCell>
                <TableCell align="right">{"oi"}</TableCell>
                <TableCell align="right">{"oi"}</TableCell>
                <TableCell align="right">{"oi"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={10}
            rowsPerPage={10}
            page={0}
            // onChangePage={handleChangePage}
            // onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Grid>
    </Layout>
  );
};

export default Tasks;
