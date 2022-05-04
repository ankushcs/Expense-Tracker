import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import useTransactions from "../../useTransactions";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import useStyles from "./styles";

const Details = (props) => {
  const { title } = props;
  const {total, chartData} = useTransactions(title)
  const classes = useStyles();
  return (
    <Card className={title === "Income" ?  classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Chart type='doughnut' data={chartData}/>
      </CardContent>
    </Card>
  );
};

export default Details;
