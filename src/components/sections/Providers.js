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
                  src={require('./../../assets/images/partners/konami.png')}
                  alt="Konami"
                  width={124}
                  height={24} />
              </li>
              <li>
                <Image
                  src={require('./../../assets/images/partners/microgaming.png')}
                  alt="MicroGaming"
                  width={124}
                  height={24} />
              </li>
              <li>
                <Image
                  src={require('./../../assets/images/partners/netent.png')}
                  alt="Netent"
                  width={124}
                  height={24} />
              </li>
              <li>
                <Image
                  src={require('./../../assets/images/partners/playtech.png')}
                  alt="PlayTech"
                  width={124}
                  height={24} />
              </li>
              <li>
                <Image
                  src={require('./../../assets/images/partners/playson.png')}
                  alt="PlaySon"
                  width={124}
                  height={24} />
              </li>
            </ul>
          </div>
        </div>
        <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
          <Link  to={{ pathname: "https://app.rxcgames.com/providers" }} target="_blank" className="button button-primary button-wide-mobile button-sm" onClick={this.closeMenu}>See all Providers (75)</Link>
        </div>
      </section>
    );
  }
}

Providers.propTypes = propTypes;
Providers.defaultProps = defaultProps;

export default Providers;