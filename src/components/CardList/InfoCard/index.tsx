import React from 'react';
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

interface InfoCardProps {
  cardTitle: string;
  cardSubtitle: string;
  value: number;
  lastUpdate: string;
  // eslint-disable-next-line react/require-default-props
  cardStyle?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  cardStyle,
  cardTitle,
  cardSubtitle,
  value,
  lastUpdate,
}: InfoCardProps) => {
  return (
    <Grid item xs={10} md={4}>
      <Card className={cardStyle}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {cardTitle}
          </Typography>
          <Typography variant="h5" component="h2">
            <CountUp start={0} end={value} duration={2} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toLocaleString()}
          </Typography>
          <Typography variant="body2" component="p">
            {cardSubtitle}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default InfoCard;
