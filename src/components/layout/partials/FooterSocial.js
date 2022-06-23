import React from 'react';
import classNames from 'classnames';
import Image from '../../elements/Image';

const FooterSocial = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-social',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >

      <div className="container-sm pt-24">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="pt-16 pl-8 pr-24 cursor-pointer">
            <a target="_blank" href="https://chainplay.gg/games/rxc-games/">
              <Image
                Chainplay
                src={require('./../../../assets/images/chainplay-logo.svg')}
                alt="RXCG Chainplay"
                width={58}
                height={58} />
            </a>
            <a target="_blank" href="https://nowpayments.io/supported-coins/rxcg-payments">
              <Image
                Nowpayments
                src={require('./../../../assets/images/chainplay-logo.svg')}
                alt="RXCG Chainplay"
                width={58}
                height={58} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSocial;
