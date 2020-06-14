import http from './http';

const getDistances = async (init, end) => {
  const url = `distancematrix/json?units=imperial&origins=${init.lat},${init.long}&destinations=${end.lat},${end.long}&key=AIzaSyCjqDVWvcWUMDNNEf9FZohN4cfk1ZHtTIY`;

  console.log('url', url);
  const response = await http.get(url);

  return response;
};

export default getDistances;
