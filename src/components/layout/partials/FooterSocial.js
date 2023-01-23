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
              Telegram
            </a>
            <a target="_blank" href="https://twitter.com/rxc_games">
              Twitter
            </a>
          </div>
        </div>w
      </div>
    </div>
  );
}

export default FooterSocial;
