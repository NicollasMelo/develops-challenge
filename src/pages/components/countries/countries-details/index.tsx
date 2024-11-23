import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryDetail = () => {
  const [countryInfo, setCountryInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3002/country-details/${}`
        );
        setCountryInfo(response.data);
      } catch (error) {
        console.error('Erro ao buscar os dados:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryInfo();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!countryInfo) return <div>Erro ao carregar os dados do país.</div>;

  return (
    <div>
      <h1>{countryInfo.commonName}</h1>
      <p>
        <strong>Nome oficial:</strong> {countryInfo.officialName}
      </p>
      <p>
        <strong>Código do país:</strong> {countryInfo.countryCode}
      </p>
      <p>
        <strong>Região:</strong> {countryInfo.region}
      </p>

      <h2>Fronteiras:</h2>
      <ul>
        {countryInfo.borders?.map((border: any) => (
          <li key={border.countryCode}>
            <p>
              <strong>Nome comum:</strong> {border.commonName}
            </p>
            <p>
              <strong>Nome oficial:</strong> {border.officialName}
            </p>
            <p>
              <strong>Código do país:</strong> {border.countryCode}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryDetail;
