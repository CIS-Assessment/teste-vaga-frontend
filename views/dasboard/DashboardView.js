import { Typography, Divider, Grid, Button } from "@material-ui/core";
import Link from "next/link";

import Layout from "../../components/Layout";
import style from "../../styles/home.module.scss";

import {
  Chart,
  PieSeries,
  Title,
  Tooltip,
  Legend,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation, EventTracker } from "@devexpress/dx-react-chart";

const DashboardView = ({ chartData, tasks = [] }) => {
  return (
    <Layout>
      <Typography variant="h4" className={style.headerTitle}>
        HOME
      </Typography>
      <Divider />
      {tasks.length === 0 && (
        <Grid className={style.gridNoTasks}>
          <Typography variant="h5" className={style.textNoTasks}>Você não tem nenhuma tarefa registrada</Typography>
          <Link href="/tasks/new">
            <Button className={style.btnNewTask} >Adicionar uma tarefa</Button>
          </Link>
        </Grid>
      )}
      {tasks.length > 0 && (
        <Chart data={chartData}>
          <Legend />
          <PieSeries valueField="population" argumentField="label" innerRadius={0.5} />
          <Title text="Rendimento das tarefas" />
          <EventTracker />
          <Tooltip />
          <Animation />
        </Chart>
      )}
    </Layout>
  );
};

export default DashboardView;
