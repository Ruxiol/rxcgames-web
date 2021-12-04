import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class HeroFull extends React.Component {

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
      'hero section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
                Where winners play
              </h1>
              <div className="container-xs">
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                  • RXC Games •
                </p>
                <div className="cta">
                  <Button className="btn-play" tag="a" color="primary" wideMobile href="https://app.rxcgames.com/">
                    Play (Alpha)
                  </Button>
                  <Button className="btn-whitepaper" tag="a" color="primary" wideMobile href={require("./../../assets/RXCG.pdf")} download="RXCG Whitepaper">
                    Whitepaper
                  </Button>
                </div>
              </div>
              <div className="container-sm pt-24 reveal-from-bottom">
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="pt-16 pl-8 pr-24 cursor-pointer">
                    <a target="_blank" href="https://t.me/rxcgames">
                      <Image
                        src={require('./../../assets/images/links/telegram.svg')}
                        alt="RXCG Telegram"
                        width={38}
                        height={38} />
                    </a>
                  </div>
                  <div className="pt-16 pl-8 pr-24 cursor-pointer">
                    <a target="_blank" href="https://twitter.com/rxc_games">
                      <Image
                        src={require('./../../assets/images/links/twitter.svg')}
                        alt="RXCG Twitter"
                        width={38}
                        height={38} />
                    </a>
                  </div>
                  <div className="pt-16 pl-8 pr-24 cursor-pointer">
                    <a target="_blank" href="https://pancakeswap.finance/swap?outputCurrency=0x7c59a57fc16eac270421b74615c4bc009ecd486d">
                      <Image
                        src={require('./../../assets/images/links/pcs.svg')}
                        alt="RXCG PCS"
                        width={38}
                        height={38} />
                    </a>
                  </div>
                  <div className="pt-16 pl-8 pr-24 cursor-pointer">
                    <a target="_blank" href="https://poocoin.app/tokens/0x7c59a57fc16eac270421b74615c4bc009ecd486d">
                      <Image
                        src={require('./../../assets/images/links/poocoin.svg')}
                        alt="RXCG Poocoin"
                        width={38}
                        height={38} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
              <Image
                className="has-shadow"
                src={require('./../../assets/images/hero-image.png')}
                alt="RXCG Platform"
                width={896}
                height={504} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

HeroFull.propTypes = propTypes;
HeroFull.defaultProps = defaultProps;

export default HeroFull;