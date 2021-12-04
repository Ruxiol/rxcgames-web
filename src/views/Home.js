import React from 'react';
// import sections
import HeroFull from '../components/sections/HeroFull';
import Providers from '../components/sections/Providers';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Tokenomics from '../components/sections/Tokenomics';
import Roadmap from '../components/sections/Roadmap';
import Cta from '../components/sections/Cta';
// import some required elements
import Team from '../components/sections/Team';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull className="illustration-section-01" />
        <Providers id="about" topDivider bottomDivider />
        <FeaturesTiles />
        <Roadmap id="roadmap" topDivider pricingSwitcher />
        <Tokenomics id="tokenomics" invertMobile topDivider imageFill />
        <Team id="team" topDivider />
        <Cta split />
      </React.Fragment>
    );
  }
}

export default Home;