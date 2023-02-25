import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Providers extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'providers section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'providers-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div
            className={innerClasses}
          >
            <ul className="list-reset">
              <li>
                <Image
                  src={require('./../../assets/images/partners/Netent.png')}
                  alt="MicroGaming"
                  width={124}
                  height={24} />
              </li>
              <li>
                <Image
                  src={require('./../../assets/images/partners/Pragmaticplay.png')}
                  alt="Pragmatic play"
                  width={124}
                  height={24} />
              </li>
              <li>
                <Image
                  src={require('./../../assets/images/partners/Mascot.png')}
                  alt="Mascot"
                  width={124}
                  height={24} />
              </li>
                <li>
                <Image
                  src={require('./../../assets/images/partners/Phoenix.png')}
                  alt="Phoenix Gambling"
                  width={124}
                  height={24} />
              </li>
            </ul>
          </div>
                <div className="cta">
                  <Button className="btn-play" tag="a" color="primary" wideMobile href="https://www.binance.com/en/support/faq/how-to-use-binance-defi-wallet-and-bridge-funds-cross-chains-ffd4cac0efbd4636b1c4e661a4a82de5/">
                    Binance DeFi
                  </Button>
                  <Button className="btn-play" tag="a" color="primary" wideMobile href="https://metamask.io/">
                    Metamask
                  </Button>                                                      
                  <Button className="btn-play" tag="a" color="primary" wideMobile href="https://trustwallet.com/">
                    Trustwallet
                  </Button>                                                        
                  <Button className="btn-play" tag="a" color="primary" wideMobile href="https://brave.com/wallet/">
                    Brave
                  </Button>
                </div>  
        </div>
      </section>
    );
  }
}

Providers.propTypes = propTypes;
Providers.defaultProps = defaultProps;

export default Providers;
