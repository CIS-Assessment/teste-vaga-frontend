import Link from "next/link";
import {
  Container,
  TextField,
  Button,
  Typography,
  Divider,
  Grid,
  IconButton,
  Icon,
} from "@material-ui/core";
import style from "../../styles/formTasks.module.scss";

import Layout from "../../components/Layout";
import Alert from "../../components/Alert";

const FormView = ({ formik, openAlert, handleCloseAlert }) => {
  return (
    <Layout>
      <Alert
        title={`Sua tarefa foi salva com sucesso!`}
        open={openAlert}
        handleClose={handleCloseAlert}
      />
      <Grid className={style.gridHeader}>
        <Link href="/tasks">
          <IconButton>
            <Icon>chevron_left</Icon>
          </IconButton>
        </Link>
        <Typography variant="h4" className={style.headerTitle}>
          {formik?.values?.title ? formik.values.title : "Nova tarefa"}
        </Typography>
      </Grid>

      <Divider />
      <Container className={style.containerBody}>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <TextField
            required
            autoComplete="off"
            className={style.field}
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            label="Título"
            variant="outlined"
          />
          <TextField
            className={style.field}
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            label="Descrição"
            variant="outlined"
            rows={6}
            multiline
          />
          <TextField
            required
            className={style.field}
            name="deadline"
            value={formik.values.deadline}
            onChange={formik.handleChange}
            label="Prazo"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" className={style.btnSubmit}>
            Salvar
          </Button>
        </form>
      </Container>
    </Layout>
  );
};

export default FormView;
