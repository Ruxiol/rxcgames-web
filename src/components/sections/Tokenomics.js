import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class Tokenomics extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    var chartColors = [
      "#4A61DD",
      "#6699CC",
      "#3546a6",
      "#9ba6de",
    ]

    const tokenDistData = {
      maintainAspectRatio: false,
      responsive: false,
      labels: ["Presale - 40%", "Liquidity - 28%", "Team Vesting - 17%", "Unlock - 15%"],
      datasets: [
        {
          data: [40, 28, 17, 15],
          backgroundColor: chartColors,
          hoverBackgroundColor: chartColors
        }
      ]
    };
    const options = {
      plugins: {
        legend: {
          usePointStyle: true,
          pointStyle: 'circle',
          display: true,
          labels: {
            usePointStyle: true,
            color: '#fff'
          },
        },
        datalabels: {
          display: true,
          color: "white",
          formatter: function (context, chart_obj) {
            console.log(chart_obj)
            return context + "%"
          },
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              return tooltipItem.label;
            }
          }
        },
      },
      elements: {
        arc: {
          borderWidth: 0
        }
      }
    };

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'Tokenomics',
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />

            <div className={splitClasses}>
              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                  <p>Contract: <a target="_blank" href="https://bscscan.com/token/0x7c59a57fc16eac270421b74615c4bc009ecd486d" style={{wordBreak: 'break-all'}}>0x7c59a57fc16eac270421b74615c4bc009ecd486d</a></p>
                  <p>Buy Tax: 3% (1% Liquidity, 2% Marketing)</p>
                  <p>Sell Tax: 5% (1% Liquidity, 4% Marketing)</p>
                  <p>Token name: <span>$RXCG</span></p>
                  <p>Total supply: <span>100 000 000</span></p>
                  <p>Private presale: <span>110 BNB (done)</span></p>
                  <p>Whitelist presale: <span>400 BNB (done)</span></p>
                  <p>Network: <span>BSC</span></p>
                </div>
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div>
                    <Doughnut data={tokenDistData} options={options} />
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

Tokenomics.propTypes = propTypes;
Tokenomics.defaultProps = defaultProps;

export default Tokenomics;