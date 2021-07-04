import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Container, TextField, Button, Typography, Divider } from "@material-ui/core";

import { task } from "../../redux";
import style from "../../styles/formTasks.module.scss";

import Layout from "../../components/Layout";

const FormTasks = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(task.actions.setTask(values));
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      deadline: "",
    },
    onSubmit,
  });
  
  return (
    <Layout>
      <Typography variant="h4" className={style.headerTitle}>
        {formik?.values?.title ? formik.values.title : "Nova tarefa"}
      </Typography>
      <Divider />
      <Container className={style.containerBody}>
        <form className={style.form} onSubmit={formik.handleSubmit}>
          <TextField
            required
            className={style.field}
            name="title"
            onChange={formik.handleChange}
            label="Título"
            variant="outlined"
          />
          <TextField
            className={style.field}
            name="description"
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

export default FormTasks;
