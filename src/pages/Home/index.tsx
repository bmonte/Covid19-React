import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Box } from '@material-ui/core';
import { Container, Logotipo } from './styles';
import logo from '../../assets/logotipo.png';
import CovidApi from '../../services/api';
import CardList from '../../components/CardList';
import CountrySelector from '../../components/CountrySelector';
import BarChart from '../../components/BarChart';

interface CovidDataResponse {
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
}

const initialData: CovidDataResponse = {
  confirmed: {
    value: 0,
  },
  recovered: {
    value: 0,
  },
  deaths: {
    value: 0,
  },
  lastUpdate: '2020-03-13T00:00:00.000Z',
};

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [countrySelected, setCountrySelected] = useState('');
  const [covidData, setCovidData] = useState<CovidDataResponse>(initialData);

  useEffect(() => {
    (async function fetchCovidData() {
      try {
        const endpoint = countrySelected ? `/countries/${countrySelected}` : '';

        const response = await CovidApi.get<CovidDataResponse>(endpoint);

        setCovidData(response.data);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [countrySelected]);

  const handleCountrySelect = async (country: string) => {
    setCountrySelected(country);
  };

  return (
    <Container>
      <Logotipo src={logo} alt="Covid-19" />
      {isLoading ? (
        <Box margin={4}>
          <ReactLoading type="spinningBubbles" color="#012" width={120} />
        </Box>
      ) : (
        <>
          <CardList covidData={covidData} />
          <CountrySelector handleChange={handleCountrySelect} />
          <BarChart covidData={covidData} />
        </>
      )}
    </Container>
  );
};

export default Home;
