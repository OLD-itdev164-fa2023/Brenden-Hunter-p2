import React from 'react';
import { homePageExport} from './Data';
import { InfoSection } from '../../components';

const Home = () => {
  return (
      <InfoSection {...homePageExport} />
  );
}

export default Home;