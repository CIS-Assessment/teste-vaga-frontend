import { useFormik } from "formik";
import { TextField, Button } from "@material-ui/core";

import Layout from "../../components/Layout";

const FormTasks = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      deadline: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="title"
          onChange={formik.handleChange}
          label="Título"
          variant="outlined"
        />
        <Button type="submit">submit</Button>
      </form>
    </Layout>
  );
};

export default FormTasks;
