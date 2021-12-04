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
            <a target="_blank" href="https://t.me/rxcgames">
              <Image
                src={require('./../../../assets/images/links/telegram.svg')}
                alt="RXCG Telegram"
                width={38}
                height={38} />
            </a>
          </div>
          <div className="pt-16 pl-8 pr-24 cursor-pointer">
            <a target="_blank" href="https://twitter.com/rxc_games">
              <Image
                src={require('./../../../assets/images/links/twitter.svg')}
                alt="RXCG Twitter"
                width={38}
                height={38} />
            </a>
          </div>
          <div className="pt-16 pl-8 pr-24 cursor-pointer">
            <a target="_blank" href="https://pancakeswap.finance/swap?outputCurrency=0x7c59a57fc16eac270421b74615c4bc009ecd486d">
              <Image
                src={require('./../../../assets/images/links/pcs.svg')}
                alt="RXCG PCS"
                width={38}
                height={38} />
            </a>
          </div>
          <div className="pt-16 pl-8 pr-24 cursor-pointer">
            <a target="_blank" href="https://poocoin.app/tokens/0x7c59a57fc16eac270421b74615c4bc009ecd486d">
              <Image
                src={require('./../../../assets/images/links/poocoin.svg')}
                alt="RXCG Poocoin"
                width={38}
                height={38} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSocial;