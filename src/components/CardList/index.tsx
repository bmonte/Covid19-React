import React from 'react';

import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfoCard from './InfoCard';

interface CardListProps {
  covidData: {
    confirmed: {
      value: number;
    };
    recovered: {
      value: number;
    };
    deaths: {
      value: number;
    };
    lastUpdate: string;
  };
}

const useStyles = makeStyles({
  infected: {
    borderBottom: '10px solid rgba(0, 0, 255, 0.5)',
  },

  recovered: {
    borderBottom: '10px solid rgba(0, 255, 0, 0.5)',
  },

  deaths: {
    borderBottom: '10px solid rgba(255, 0, 0, 0.5)',
  },
});

const CardList: React.FC<CardListProps> = ({ covidData }: CardListProps) => {
  const classes = useStyles();

  return (
    <Box marginTop={3}>
      <Grid container spacing={2} justify="center">
        <InfoCard
          cardStyle={classes.infected}
          cardTitle="Infectados"
          cardSubtitle="Número de casos ativos de COVID-19"
          lastUpdate={covidData.lastUpdate}
          value={covidData.confirmed.value}
        />

        <InfoCard
          cardStyle={classes.deaths}
          cardTitle="Mortos"
          cardSubtitle="Número de falecidos em decorrência da COVID-19"
          lastUpdate={covidData.lastUpdate}
          value={covidData.deaths.value}
        />

        <InfoCard
          cardStyle={classes.recovered}
          cardTitle="Recuperados"
          cardSubtitle="Número de recuperados da COVID-19"
          lastUpdate={covidData.lastUpdate}
          value={covidData.recovered.value}
        />
      </Grid>
    </Box>
  );
};

export default CardList;
