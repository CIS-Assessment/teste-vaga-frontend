import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Container,
  TextField,
  Button,
  Typography,
  Divider,
  Grid,
} from "@material-ui/core";

import { task } from "../../redux";
import style from "../../styles/formTasks.module.scss";

import Layout from "../../components/Layout";
import { useEffect } from "react";
import { IconButton } from "@material-ui/core";
import { Icon } from "@material-ui/core";

const FormTasks = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const { id } = router.query;

  const onSubmit = (values) => {
    if (values.id) {
      dispatch(task.actions.update(values));
      return;
    }
    const uuid = () => Math.random().toString(36).substr(2, 9);
    values.id = uuid();
    dispatch(task.actions.create(values));
    formik.setFieldValue("id", values.id);
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      title: "",
      description: "",
      deadline: "",
    },
    onSubmit,
  });

  useEffect(() => {
    if (id && tasks?.find((r) => r.id === id)) {
      const obj = tasks?.find((r) => r.id === id);
      formik.setFieldValue("title", obj.title);
      formik.setFieldValue("description", obj.description);
      formik.setFieldValue("deadline", obj.deadline);
      formik.setFieldValue("id", obj.id);
    }
  }, [id]);

  return (
    <Layout>
      <Grid className={style.gridHeader}>
        <Link href='/tasks'>
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

export default FormTasks;
