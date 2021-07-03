import { Container, Grid, Typography, Link } from "@material-ui/core";
import style from "./style.module.scss";

const Layout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12} className={style.layoutHeader}>
        <Container className={style.headerContainer}>
          <Grid>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
              width={80}
            />
          </Grid>
          <Grid className={style.headerRightSide}>
            <Typography>
              <Link href="/" className={style.rightSideLink}>
                HOME
              </Link>
            </Typography>
            <Typography>
              <Link href="/tasks" className={style.rightSideLink}>
                TAREFAS
              </Link>
            </Typography>
            <Typography>
              <Link href="/tasks" className={style.rightSideLink}>
                SOBRE
              </Link>
            </Typography>
          </Grid>
        </Container>
      </Grid>
      <Container className={style.layoutBody}>{children}</Container>
      <Grid item xs={12} className={style.layoutFooter}>
        Criado por Alana Martins
      </Grid>
    </Grid>
  );
};

export default Layout;
