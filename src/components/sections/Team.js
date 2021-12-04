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

class Team extends React.Component {

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
      'team section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Meet the Team',
      paragraph: 'Leadership of a team that brings Vegas to your home'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" />
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        style={{ borderRadius: '50%' }}
                        src={require('./../../assets/images/team/LukaKulier.jpg')}
                        alt="Luka Kulier - CEO"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Luka Kulier
                    </h5>
                    <div className="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                      Chief Executive Officer
                    </div>
                    <p className="m-0 text-xs">
                      In charge of the management and administrative direction of the project and execution of long-term strategies
                    </p>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="pt-16">
                      <a href="https://twitter.com/kulier_?t=KJOv9tvRRsY5qflOLDMx0A&s=09" target="_blank">
                        <Image
                          src={require('./../../assets/images/links/twitter.svg')}
                          alt="Luka Kulier Twitter"
                          width={38}
                          height={38} />
                      </a>
                    </div>
                    <div className="pt-16">
                      <a href="https://www.linkedin.com/in/luka-kulier-56b462174/" target="_blank">
                        <Image
                          src={require('./../../assets/images/linkedin.png')}
                          alt="Luka Kulier Linkedin"
                          width={38}
                          height={38} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        style={{ borderRadius: '50%' }}
                        src={require('./../../assets/images/team/RuxCrypto.jpg')}
                        alt="Rux Crypto - CTO"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Rux Crypto
                    </h5>
                    <div className="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                      Chief Technology Officer
                    </div>
                    <p className="m-0 text-sm">
                      Responsible for the technical teams and to implement new strategies to improve the final product
                    </p>
                  </div>
                  <div className="pt-16">
                    <a href="https://www.linkedin.com/in/nedzad-smajic-b792095b/" target="_blank">
                      <Image
                        src={require('./../../assets/images/linkedin.png')}
                        alt="Rux Crypto Linkedin"
                        width={38}
                        height={38} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24">
                      <Image
                        style={{ borderRadius: '50%' }}
                        src={require('./../../assets/images/team/FilipBrzica.jpg')}
                        alt="Filip Brzica - CM"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                    <h5 className="team-item-name mt-0 mb-4">
                      Filip Brzica
                    </h5>
                    <div className="team-item-role text-xxs fw-500 tt-u text-color-primary mb-8">
                      Community Manager
                    </div>
                    <p className="m-0 text-sm">
                      Responsible for marketing activities, advertising, market research and community service
                    </p>
                  </div>
                  <div className="pt-16">
                    <a href="https://www.linkedin.com/in/filip-brzica-877494207/" target="_blank">
                      <Image
                        src={require('./../../assets/images/linkedin.png')}
                        alt="Filip Brzica Linkedin"
                        width={38}
                        height={38} />
                    </a>
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

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;