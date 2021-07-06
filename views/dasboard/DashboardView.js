import { Typography, Divider } from "@material-ui/core";

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

const DashboardView = ({ chartData }) => {
  return (
    <Layout>
      <Typography variant="h4" className={style.headerTitle}>
        HOME
      </Typography>
      <Divider />
      <Chart data={chartData}>
        <Legend />
        <PieSeries valueField="population" argumentField="label" innerRadius={0.5} />
        <Title text="Rendimento das tarefas" />
        <EventTracker />
        <Tooltip />
        <Animation />
      </Chart>
    </Layout>
  );
};

export default DashboardView;
