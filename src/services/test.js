import ApiMap from './map';

const getDistances = async (init, end) => {
  const url = `https://distance-calculator.p.rapidapi.com/distance/simple?unit=kilometers&lat_1=${init.lat}&long_2=${end.long}&long_1=${init.long}&lat_2=${end.lat}`;
  const headers = {
    'x-rapidapi-host': 'distance-calculator.p.rapidapi.com',
    'x-rapidapi-key': 'af83cb1616msh1339e8055ca4fc4p10acdejsn1e2ad7f93be8',
    'content-type': 'application/json',
    useQueryString: true,
  };
  const response = await ApiMap.get(url, { headers });
  return response;
};

export default getDistances;
