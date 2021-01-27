import React from 'react';
import { Box, NativeSelect, FormControl } from '@material-ui/core';
import countryList from '../../static/country_list.json';

interface CountrySelectorProps {
  handleChange: (country: string) => void;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({
  handleChange,
}: CountrySelectorProps) => {
  return (
    <Box marginX={2} marginY={3}>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={e => handleChange(e.target.value)}
        >
          <option value="">Mundo</option>
          {countryList.map(country => (
            <option key={country.codigo} value={country.iso}>
              {country.nome}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default CountrySelector;
