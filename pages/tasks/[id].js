import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { task } from "../../redux";

import FormView from "../../views/tasks/FormView";

const FormTasks = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const { id } = router.query;
  const [openAlert, setOpenAlert] = useState(false);

  const createID = (id) => {
    if (!id) {
      const uuid = () => Math.random().toString(36).substr(2, 9);
      return uuid();
    }

    return false;
  };

  const onSubmit = (values) => {
    const id = createID(values?.id);
    if (!id) {
      dispatch(task.actions.update(values));
      handleClickAlert();
      return;
    }
    values.id = id;
    dispatch(task.actions.create(values));
    formik.setFieldValue("id", values.id);
    handleClickAlert();
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
  }, [id, tasks]);

  const handleClickAlert = () => {
    setOpenAlert(true);
  };
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  return (
    <FormView formik={formik} openAlert={openAlert} handleCloseAlert={handleCloseAlert} />
  );
};

export default FormTasks;
