import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const AlertComponent = ({ open, handleClose, title, severity = "success" }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity}>
        {title}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
