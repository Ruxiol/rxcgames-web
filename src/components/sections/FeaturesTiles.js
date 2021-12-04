import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class FeaturesTiles extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tiles section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tiles-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: '',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/cube.svg')}
                        alt="Join the Revolution"
                        width={40}
                        height={40} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Join the Revolution
                    </h4>
                    <p className="m-0 text-sm">
                      RXC Games is a gaming platform set to change the rules of online gambling.
                      Join us and let's make history together!
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/moneybag.svg')}
                        alt="Play and Earn"
                        width={40}
                        height={40} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Play and Earn
                    </h4>
                    <p className="m-0 text-sm">
                      Play 4000+ games on our platform - all fully licensed and fun to play!
                      Simply buy $RXCG, deposit it on RXCGames, and you're ready to roll.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/bitcoin.svg')}
                        alt="State of the art Contract"
                        width={40}
                        height={40} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      State of the art contract
                    </h4>
                    <p className="m-0 text-sm">
                      Our contract has been developed by Trynos. Enough said.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/audit.svg')}
                        alt="Audit"
                        width={40}
                        height={40} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Audit
                    </h4>
                    <p className="m-0 text-sm">
                      Read the audit of RXCGames done by Dessert Finance <a className="no-underline" href={require("./../../assets/RXCG Audit.pdf")} download="RXCG Audit">here</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/cmc.svg')}
                        alt="CMC"
                        width={40}
                        height={40} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Coin Market Cap
                    </h4>
                    <p className="m-0 text-sm">
                      RXCGames is listed on Coin Market Cap. You can find us <a href="https://coinmarketcap.com/currencies/rxcgames/" target="_blank" className="no-underline">here</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={require('./../../assets/images/CoinGecko Logo.svg')}
                        alt="CG"
                        width={40}
                        height={40} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Coin Gecko
                    </h4>
                    <p className="m-0 text-sm">
                      RXCGames is listed on Coin Gecko. You can find us <a  href="https://www.coingecko.com/en/coins/rxcgames" target="_blank" className="no-underline">here</a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
