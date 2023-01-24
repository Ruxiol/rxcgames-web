import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

class Footer extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      topDivider,
      ...props
    } = this.props;

    const classes = classNames(
      'site-footer center-content-mobile',
      topOuterDivider && 'has-top-divider',
      className
    );

    const links = [
        {
            "url": "https://rxcgames.com",
            "thumbnail": "https://raw.githubusercontent.com/Ruxiol/rxcgames-web/main/public/logo.svg"
        },
        {
            "url": "https://nowpayments.io/supported-coins/rxcg-payments",
            "thumbnail": "https://nowpayments.io/images/logo/logo.svg"
        },
        {
            "url": "https://chainplay.gg/games/rxc-games/",
            "thumbnail": "https://raw.githubusercontent.com/Ruxiol/rxcgames-web/main/public/chainplaysmall.png"
        }
    ]

    return (
      <footer
        {...props}
        className={classes}
      >
        <div className="container">
          <div className={
            classNames(
              'site-footer-inner',
              topDivider && 'has-top-divider'
            )}>
            <div className="footer-top space-between text-xxs">
              <Logo />
              <FooterSocial />
            </div>
            <div className="footer-bottom space-between text-xxs invert-order-desktop">
              <div className="footer-copyright">&copy; 2023 RXCGames, all rights reserved <a href={links[2].url}><img src={links[2].thumbnail} alt='Chainplay'/></a></div>
              <div className="footer-copyright">Accept RXCG token via <a href={links[1].url}><img src={links[1].thumbnail} alt='nowpayments'/></a></div>
              <div className="footer-copyright">RXC Games on <a href={links[2].url}><img src={links[2].thumbnail} alt='Chainplay'/></a></div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
