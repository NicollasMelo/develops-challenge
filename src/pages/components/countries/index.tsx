'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CountryListContainer,
  Title,
  CountryCard,
  CountryName,
  CountryLink,
  FlagImage,
} from './style';

const CountriesPage = () => {
  const [countries, setCountries] = useState<
    { countryCode: string; name: string }[]
  >([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const { data } = await axios.get('/api/countries');
      setCountries(data);
    };

    fetchCountries();
  }, []);

  const getFlagUrl = (countryCode: string) => {
    return `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
  };

  return (
    <div>
      <Title>Country List</Title>
      <CountryListContainer>
        {countries.map((country) => (
          <CountryCard key={country.countryCode}>
            <FlagImage
              src={getFlagUrl(country.countryCode)}
              alt={`${country.name} flag`}
            />
            <CountryName>{country.name}</CountryName>
            <CountryLink href={`/components/countries/countries-details/`}>
              <a>View Details</a>
            </CountryLink>
          </CountryCard>
        ))}
      </CountryListContainer>
    </div>
  );
};

export default CountriesPage;
