import axios from 'axios';

const ApiMap = axios.create({
  baseURL:
    'https://www.mapeia.com.br/route/v1/driving/-23.5353856,-46.8979554;-23.4814376,-46.7458937?overview=false&alternatives=true&steps=true&hints=I09DgG9PQ4CnAAAAAAAAAAAAAAAAAAAAttrnQgAAAAAAAAAAAAAAAKcAAAAAAAAAAAAAAAAAAADECwAA28Q8_TZ8kv7bxDz9NnyS_gAALwY7laR_;',
});

export default ApiMap;
