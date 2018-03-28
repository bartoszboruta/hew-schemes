import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Wall extends Component {
    static getGradients() {
        return <defs>
            <linearGradient
                id='id7'
                gradientUnits='userSpaceOnUse'
                x1='423.62399'
                y1='460.60699'
                x2='630.11102'
                y2='460.60699'
                gradientTransform='matrix(1.1317655,0,0,1.1329744,-479.44189,-172.29108)'>
                <stop
                    offset='0'
                    stopColor='#898989'
                    id='stop225' />
                <stop
                    offset='1'
                    stopColor='#C5C6C6'
                    id='stop227' />
            </linearGradient>
        </defs>
    }

    render() {
        return (
            <g className='Wall' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
                {
                    Wall.getGradients()
                }
                <rect
                    style={{fill: '#dcdcdc', fillRule: 'evenodd', strokeWidth: '0.26736256'}}
                    height='15.539989'
                    width='238.696'
                    y='348.34579'
                    x='0'
                    id='_650851920' />
                <rect
                    style={{fill: 'url(#id7)', fillRule: 'evenodd', strokeWidth: '0.26736256'}}
                    height='2.4381266'
                    width='238.696'
                    y='348.34579'
                    x='0'
                    id='_650842392' />
                <rect
                    x='118.39182'
                    y='0.11929577'
                    width='29.600082'
                    height='347.99536'
                    id='rect414'
                    style={{fill: '#c5c6c6', fillRule: 'evenodd', strokeWidth: '0.26736256'}} />
                <rect
                    x='117.58932'
                    y='0.11929577'
                    width='2.3874702'
                    height='347.70529'
                    id='rect778'
                    style={{fill: '#fefefe', fillRule: 'evenodd', strokeWidth: '0.26736256'}} />
                <path
                    id='_651001480'
                    d='m 118.39061,134.52177 h 29.60188 m 0,6.10868 h -29.60188'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651023752'
                    x1='147.99301'
                    y1='146.73975'
                    x2='118.39058'
                    y2='146.73975'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651024664'
                    x1='147.99301'
                    y1='152.84991'
                    x2='118.39058'
                    y2='152.84991'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651022144'
                    x1='147.99301'
                    y1='158.95776'
                    x2='118.39058'
                    y2='158.95776'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651017968'
                    x1='147.99301'
                    y1='165.06676'
                    x2='118.39058'
                    y2='165.06676'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651007792'
                    x1='147.99301'
                    y1='171.1769'
                    x2='118.39058'
                    y2='171.1769'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651019048'
                    x1='147.99301'
                    y1='177.28587'
                    x2='118.39058'
                    y2='177.28587'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650996296'
                    x1='147.99301'
                    y1='183.39604'
                    x2='118.39058'
                    y2='183.39604'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651027760'
                    x1='147.99301'
                    y1='189.50389'
                    x2='118.39058'
                    y2='189.50389'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651002272'
                    x1='147.99301'
                    y1='195.6129'
                    x2='118.39058'
                    y2='195.6129'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651009304'
                    x1='147.99301'
                    y1='201.72304'
                    x2='118.39058'
                    y2='201.72304'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651014416'
                    x1='147.99301'
                    y1='207.83202'
                    x2='118.39058'
                    y2='207.83202'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651012760'
                    x1='147.99301'
                    y1='213.93987'
                    x2='118.39058'
                    y2='213.93987'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651025432'
                    x1='147.99301'
                    y1='220.05'
                    x2='118.39058'
                    y2='220.05'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651024184'
                    x1='147.99301'
                    y1='226.15901'
                    x2='118.39058'
                    y2='226.15901'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651028240'
                    x1='147.99301'
                    y1='232.26799'
                    x2='118.39058'
                    y2='232.26799'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651026176'
                    x1='147.99301'
                    y1='238.37813'
                    x2='118.39058'
                    y2='238.37813'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651024256'
                    x1='147.99301'
                    y1='244.48601'
                    x2='118.39058'
                    y2='244.48601'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651019552'
                    x1='147.99301'
                    y1='250.59612'
                    x2='118.39058'
                    y2='250.59612'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650998720'
                    x1='147.99301'
                    y1='256.70517'
                    x2='118.39058'
                    y2='256.70517'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651002992'
                    x1='147.99301'
                    y1='262.81412'
                    x2='118.39058'
                    y2='262.81412'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651017008'
                    x1='147.99301'
                    y1='268.92429'
                    x2='118.39058'
                    y2='268.92429'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651025696'
                    x1='147.99301'
                    y1='275.03214'
                    x2='118.39058'
                    y2='275.03214'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651015064'
                    x1='147.99301'
                    y1='281.14111'
                    x2='118.39058'
                    y2='281.14111'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651015880'
                    x1='147.99301'
                    y1='287.25125'
                    x2='118.39058'
                    y2='287.25125'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650997040'
                    x1='147.99301'
                    y1='293.36026'
                    x2='118.39058'
                    y2='293.36026'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651016192'
                    x1='147.99301'
                    y1='299.4704'
                    x2='118.39058'
                    y2='299.4704'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651026848'
                    x1='147.99301'
                    y1='305.57825'
                    x2='118.39058'
                    y2='305.57825'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651028312'
                    x1='147.99301'
                    y1='311.68723'
                    x2='118.39058'
                    y2='311.68723'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651016744'
                    x1='147.99301'
                    y1='317.79739'
                    x2='118.39058'
                    y2='317.79739'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651008608'
                    x1='147.99301'
                    y1='323.90631'
                    x2='118.39058'
                    y2='323.90631'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651023800'
                    x1='147.99301'
                    y1='330.01532'
                    x2='118.39058'
                    y2='330.01532'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651001936'
                    x1='143.8248'
                    y1='323.96756'
                    x2='143.8248'
                    y2='330.01532'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651020560'
                    x1='135.34789'
                    y1='323.96756'
                    x2='135.34789'
                    y2='330.01532'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651011008'
                    x1='126.86977'
                    y1='323.96756'
                    x2='126.86977'
                    y2='330.01532'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651017944'
                    x1='139.5139'
                    y1='317.79739'
                    x2='139.5139'
                    y2='323.84521'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651014536'
                    x1='131.03696'
                    y1='317.79739'
                    x2='131.03696'
                    y2='323.84521'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651007984'
                    x1='122.55894'
                    y1='317.79739'
                    x2='122.55894'
                    y2='323.84521'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651003664'
                    x1='147.99301'
                    y1='42.883411'
                    x2='118.39058'
                    y2='42.883411'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650996920'
                    x1='147.99301'
                    y1='48.99242'
                    x2='118.39058'
                    y2='48.99242'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651024688'
                    x1='147.99301'
                    y1='55.102543'
                    x2='118.39058'
                    y2='55.102543'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651019312'
                    x1='147.99301'
                    y1='61.210407'
                    x2='118.39058'
                    y2='61.210407'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651009856'
                    x1='147.99301'
                    y1='67.319397'
                    x2='118.39058'
                    y2='67.319397'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651014728'
                    x1='147.99301'
                    y1='73.42952'
                    x2='118.39058'
                    y2='73.42952'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651020416'
                    x1='147.99301'
                    y1='79.538528'
                    x2='118.39058'
                    y2='79.538528'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651002896'
                    x1='147.99301'
                    y1='85.647507'
                    x2='118.39058'
                    y2='85.647507'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651008728'
                    x1='147.99301'
                    y1='91.756531'
                    x2='118.39058'
                    y2='91.756531'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651016504'
                    x1='147.99301'
                    y1='97.86554'
                    x2='118.39058'
                    y2='97.86554'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651016096'
                    x1='147.99301'
                    y1='103.97565'
                    x2='118.39058'
                    y2='103.97565'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651002320'
                    x1='147.99301'
                    y1='110.08464'
                    x2='118.39058'
                    y2='110.08464'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651027928'
                    x1='147.99301'
                    y1='116.19365'
                    x2='118.39058'
                    y2='116.19365'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651019672'
                    x1='147.99301'
                    y1='122.3038'
                    x2='118.39058'
                    y2='122.3038'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_651003880'
                    x1='147.99301'
                    y1='128.41165'
                    x2='118.39058'
                    y2='128.41165'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650854920'
                    x1='143.8248'
                    y1='311.53998'
                    x2='143.8248'
                    y2='317.5878'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650860176'
                    x1='135.34789'
                    y1='311.53998'
                    x2='135.34789'
                    y2='317.5878'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650856264'
                    x1='126.86977'
                    y1='311.53998'
                    x2='126.86977'
                    y2='317.5878'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650836272'
                    x1='139.5139'
                    y1='305.36978'
                    x2='139.5139'
                    y2='311.4176'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650841264'
                    x1='131.03696'
                    y1='305.36978'
                    x2='131.03696'
                    y2='311.4176'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650852976'
                    x1='122.55894'
                    y1='305.36978'
                    x2='122.55894'
                    y2='311.4176'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650845464'
                    x1='143.8248'
                    y1='299.66412'
                    x2='143.8248'
                    y2='305.71082'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650861256'
                    x1='135.34789'
                    y1='299.66412'
                    x2='135.34789'
                    y2='305.71082'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650862936'
                    x1='126.86977'
                    y1='299.66412'
                    x2='126.86977'
                    y2='305.71082'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650860512'
                    x1='139.5139'
                    y1='293.49393'
                    x2='139.5139'
                    y2='299.54065'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650837688'
                    x1='131.03696'
                    y1='293.49393'
                    x2='131.03696'
                    y2='299.54065'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650845896'
                    x1='122.55894'
                    y1='293.49393'
                    x2='122.55894'
                    y2='299.54065'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650834544'
                    x1='143.8248'
                    y1='287.23651'
                    x2='143.8248'
                    y2='293.2832'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650842800'
                    x1='135.34789'
                    y1='287.23651'
                    x2='135.34789'
                    y2='293.2832'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650845728'
                    x1='126.86977'
                    y1='287.23651'
                    x2='126.86977'
                    y2='293.2832'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650853192'
                    x1='139.5139'
                    y1='281.06638'
                    x2='139.5139'
                    y2='287.11301'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650851584'
                    x1='131.03696'
                    y1='281.06638'
                    x2='131.03696'
                    y2='287.11301'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650839992'
                    x1='122.55894'
                    y1='281.06638'
                    x2='122.55894'
                    y2='287.11301'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650836752'
                    x1='143.8248'
                    y1='274.98682'
                    x2='143.8248'
                    y2='281.03348'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650864160'
                    x1='135.34789'
                    y1='274.98682'
                    x2='135.34789'
                    y2='281.03348'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650842416'
                    x1='126.86977'
                    y1='274.98682'
                    x2='126.86977'
                    y2='281.03348'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650848920'
                    x1='139.5139'
                    y1='268.81549'
                    x2='139.5139'
                    y2='274.86218'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650834136'
                    x1='131.03696'
                    y1='268.81549'
                    x2='131.03696'
                    y2='274.86218'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650838672'
                    x1='122.55894'
                    y1='268.81549'
                    x2='122.55894'
                    y2='274.86218'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650864088'
                    x1='143.8248'
                    y1='262.5592'
                    x2='143.8248'
                    y2='268.6059'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650842056'
                    x1='135.34789'
                    y1='262.5592'
                    x2='135.34789'
                    y2='268.6059'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650861376'
                    x1='126.86977'
                    y1='262.5592'
                    x2='126.86977'
                    y2='268.6059'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650854896'
                    x1='139.5139'
                    y1='256.38791'
                    x2='139.5139'
                    y2='262.43573'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650846736'
                    x1='131.03696'
                    y1='256.38791'
                    x2='131.03696'
                    y2='262.43573'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650832504'
                    x1='122.55894'
                    y1='256.38791'
                    x2='122.55894'
                    y2='262.43573'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650846088'
                    x1='143.8248'
                    y1='250.68336'
                    x2='143.8248'
                    y2='256.72891'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650856840'
                    x1='135.34789'
                    y1='250.68336'
                    x2='135.34789'
                    y2='256.72891'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650857080'
                    x1='126.86977'
                    y1='250.68336'
                    x2='126.86977'
                    y2='256.72891'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650837832'
                    x1='139.5139'
                    y1='244.51207'
                    x2='139.5139'
                    y2='250.55876'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650833248'
                    x1='131.03696'
                    y1='244.51207'
                    x2='131.03696'
                    y2='250.55876'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650833992'
                    x1='122.55894'
                    y1='244.51207'
                    x2='122.55894'
                    y2='250.55876'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650847720'
                    x1='143.8248'
                    y1='238.25575'
                    x2='143.8248'
                    y2='244.30135'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650863512'
                    x1='135.34789'
                    y1='238.25575'
                    x2='135.34789'
                    y2='244.30135'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650857872'
                    x1='126.86977'
                    y1='238.25575'
                    x2='126.86977'
                    y2='244.30135'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650854752'
                    x1='139.5139'
                    y1='232.08446'
                    x2='139.5139'
                    y2='238.13115'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650852064'
                    x1='131.03696'
                    y1='232.08446'
                    x2='131.03696'
                    y2='238.13115'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650860392'
                    x1='122.55894'
                    y1='232.08446'
                    x2='122.55894'
                    y2='238.13115'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650841576'
                    x1='143.8248'
                    y1='226.31313'
                    x2='143.8248'
                    y2='232.35976'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650832768'
                    x1='135.34789'
                    y1='226.31313'
                    x2='135.34789'
                    y2='232.35976'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650840208'
                    x1='126.86977'
                    y1='226.31313'
                    x2='126.86977'
                    y2='232.35976'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650861184'
                    x1='139.5139'
                    y1='220.1429'
                    x2='139.5139'
                    y2='226.18846'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650845080'
                    x1='131.03696'
                    y1='220.1429'
                    x2='131.03696'
                    y2='226.18846'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650849664'
                    x1='122.55894'
                    y1='220.1429'
                    x2='122.55894'
                    y2='226.18846'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650842920'
                    x1='143.8248'
                    y1='213.88548'
                    x2='143.8248'
                    y2='219.93217'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650839560'
                    x1='135.34789'
                    y1='213.88548'
                    x2='135.34789'
                    y2='219.93217'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650850408'
                    x1='126.86977'
                    y1='213.88548'
                    x2='126.86977'
                    y2='219.93217'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650839392'
                    x1='139.5139'
                    y1='207.71532'
                    x2='139.5139'
                    y2='213.76201'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650838336'
                    x1='131.03696'
                    y1='207.71532'
                    x2='131.03696'
                    y2='213.76201'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650843856'
                    x1='122.55894'
                    y1='207.71532'
                    x2='122.55894'
                    y2='213.76201'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650853576'
                    x1='143.8248'
                    y1='202.00966'
                    x2='143.8248'
                    y2='208.05632'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650855832'
                    x1='135.34789'
                    y1='202.00966'
                    x2='135.34789'
                    y2='208.05632'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650853240'
                    x1='126.86977'
                    y1='202.00966'
                    x2='126.86977'
                    y2='208.05632'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650843424'
                    x1='139.5139'
                    y1='195.83952'
                    x2='139.5139'
                    y2='201.88612'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650832168'
                    x1='131.03696'
                    y1='195.83952'
                    x2='131.03696'
                    y2='201.88612'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650844360'
                    x1='122.55894'
                    y1='195.83952'
                    x2='122.55894'
                    y2='201.88612'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650858928'
                    x1='143.8248'
                    y1='189.58205'
                    x2='143.8248'
                    y2='195.62877'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650856720'
                    x1='135.34789'
                    y1='189.58205'
                    x2='135.34789'
                    y2='195.62877'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650858496'
                    x1='126.86977'
                    y1='189.58205'
                    x2='126.86977'
                    y2='195.62877'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650832288'
                    x1='139.5139'
                    y1='183.41188'
                    x2='139.5139'
                    y2='189.45857'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650848464'
                    x1='131.03696'
                    y1='183.41188'
                    x2='131.03696'
                    y2='189.45857'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650851128'
                    x1='122.55894'
                    y1='183.41188'
                    x2='122.55894'
                    y2='189.45857'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650836368'
                    x1='143.8248'
                    y1='177.33119'
                    x2='143.8248'
                    y2='183.37788'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650838120'
                    x1='135.34789'
                    y1='177.33119'
                    x2='135.34789'
                    y2='183.37788'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650859960'
                    x1='126.86977'
                    y1='177.33119'
                    x2='126.86977'
                    y2='183.37788'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650864208'
                    x1='139.5139'
                    y1='171.16101'
                    x2='139.5139'
                    y2='177.20772'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650852832'
                    x1='131.03696'
                    y1='171.16101'
                    x2='131.03696'
                    y2='177.20772'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650843520'
                    x1='122.55894'
                    y1='171.16101'
                    x2='122.55894'
                    y2='177.20772'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650838048'
                    x1='143.8248'
                    y1='164.90474'
                    x2='143.8248'
                    y2='170.95029'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650854680'
                    x1='135.34789'
                    y1='164.90474'
                    x2='135.34789'
                    y2='170.95029'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650853120'
                    x1='126.86977'
                    y1='164.90474'
                    x2='126.86977'
                    y2='170.95029'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650844768'
                    x1='139.5139'
                    y1='158.73343'
                    x2='139.5139'
                    y2='164.78014'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650848080'
                    x1='131.03696'
                    y1='158.73343'
                    x2='131.03696'
                    y2='164.78014'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650861832'
                    x1='122.55894'
                    y1='158.73343'
                    x2='122.55894'
                    y2='164.78014'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650857776'
                    x1='143.8248'
                    y1='153.02892'
                    x2='143.8248'
                    y2='159.07445'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650856648'
                    x1='135.34789'
                    y1='153.02892'
                    x2='135.34789'
                    y2='159.07445'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650847792'
                    x1='126.86977'
                    y1='153.02892'
                    x2='126.86977'
                    y2='159.07445'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650843160'
                    x1='139.5139'
                    y1='146.8576'
                    x2='139.5139'
                    y2='152.90428'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650835960'
                    x1='131.03696'
                    y1='146.8576'
                    x2='131.03696'
                    y2='152.90428'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650833128'
                    x1='122.55894'
                    y1='146.8576'
                    x2='122.55894'
                    y2='152.90428'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650836728'
                    x1='143.8248'
                    y1='140.6013'
                    x2='143.8248'
                    y2='146.64687'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650843208'
                    x1='135.34789'
                    y1='140.6013'
                    x2='135.34789'
                    y2='146.64687'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650851848'
                    x1='126.86977'
                    y1='140.6013'
                    x2='126.86977'
                    y2='146.64687'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650864424'
                    x1='139.5139'
                    y1='134.42998'
                    x2='139.5139'
                    y2='140.47668'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650854536'
                    x1='131.03696'
                    y1='134.42998'
                    x2='131.03696'
                    y2='140.47668'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650833824'
                    x1='122.55894'
                    y1='134.42998'
                    x2='122.55894'
                    y2='140.47668'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650857296'
                    x1='143.8248'
                    y1='128.65976'
                    x2='143.8248'
                    y2='134.70645'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650858760'
                    x1='135.34789'
                    y1='128.65976'
                    x2='135.34789'
                    y2='134.70645'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650857440'
                    x1='126.86977'
                    y1='128.65976'
                    x2='126.86977'
                    y2='134.70645'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650857176'
                    x1='139.5139'
                    y1='122.48959'
                    x2='139.5139'
                    y2='128.53625'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650855232'
                    x1='131.03696'
                    y1='122.48959'
                    x2='131.03696'
                    y2='128.53625'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650853648'
                    x1='122.55894'
                    y1='122.48959'
                    x2='122.55894'
                    y2='128.53625'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650849592'
                    x1='143.8248'
                    y1='116.23216'
                    x2='143.8248'
                    y2='122.27885'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650846352'
                    x1='135.34789'
                    y1='116.23216'
                    x2='135.34789'
                    y2='122.27885'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650841816'
                    x1='126.86977'
                    y1='116.23216'
                    x2='126.86977'
                    y2='122.27885'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650843064'
                    x1='139.5139'
                    y1='110.062'
                    x2='139.5139'
                    y2='116.10867'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650839944'
                    x1='131.03696'
                    y1='110.062'
                    x2='131.03696'
                    y2='116.10867'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650839920'
                    x1='122.55894'
                    y1='110.062'
                    x2='122.55894'
                    y2='116.10867'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650834736'
                    x1='143.8248'
                    y1='104.2906'
                    x2='143.8248'
                    y2='110.33731'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650833032'
                    x1='135.34789'
                    y1='104.2906'
                    x2='135.34789'
                    y2='110.33731'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650837016'
                    x1='126.86977'
                    y1='104.2906'
                    x2='126.86977'
                    y2='110.33731'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650855064'
                    x1='139.5139'
                    y1='98.118179'
                    x2='139.5139'
                    y2='104.16599'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650834448'
                    x1='131.03696'
                    y1='98.118179'
                    x2='131.03696'
                    y2='104.16599'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650837856'
                    x1='122.55894'
                    y1='98.118179'
                    x2='122.55894'
                    y2='104.16599'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650839008'
                    x1='143.8248'
                    y1='91.863022'
                    x2='143.8248'
                    y2='97.909714'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650842968'
                    x1='135.34789'
                    y1='91.863022'
                    x2='135.34789'
                    y2='97.909714'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650847672'
                    x1='126.86977'
                    y1='91.863022'
                    x2='126.86977'
                    y2='97.909714'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650835192'
                    x1='139.5139'
                    y1='85.692841'
                    x2='139.5139'
                    y2='91.738403'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650850360'
                    x1='131.03696'
                    y1='85.692841'
                    x2='131.03696'
                    y2='91.738403'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650834616'
                    x1='122.55894'
                    y1='85.692841'
                    x2='122.55894'
                    y2='91.738403'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650849328'
                    x1='143.8248'
                    y1='79.987183'
                    x2='143.8248'
                    y2='86.033859'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650863056'
                    x1='135.34789'
                    y1='79.987183'
                    x2='135.34789'
                    y2='86.033859'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650836584'
                    x1='126.86977'
                    y1='79.987183'
                    x2='126.86977'
                    y2='86.033859'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650843136'
                    x1='139.5139'
                    y1='73.815872'
                    x2='139.5139'
                    y2='79.862549'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650862984'
                    x1='131.03696'
                    y1='73.815872'
                    x2='131.03696'
                    y2='79.862549'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650859744'
                    x1='122.55894'
                    y1='73.815872'
                    x2='122.55894'
                    y2='79.862549'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650845920'
                    x1='143.8248'
                    y1='67.559586'
                    x2='143.8248'
                    y2='73.606277'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650837760'
                    x1='135.34789'
                    y1='67.559586'
                    x2='135.34789'
                    y2='73.606277'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650838792'
                    x1='126.86977'
                    y1='67.559586'
                    x2='126.86977'
                    y2='73.606277'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650852664'
                    x1='139.5139'
                    y1='61.389423'
                    x2='139.5139'
                    y2='67.434952'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650851368'
                    x1='131.03696'
                    y1='61.389423'
                    x2='131.03696'
                    y2='67.434952'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650857464'
                    x1='122.55894'
                    y1='61.389423'
                    x2='122.55894'
                    y2='67.434952'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650853528'
                    x1='143.8248'
                    y1='55.308735'
                    x2='143.8248'
                    y2='61.355442'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650845824'
                    x1='135.34789'
                    y1='55.308735'
                    x2='135.34789'
                    y2='61.355442'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650833104'
                    x1='126.86977'
                    y1='55.308735'
                    x2='126.86977'
                    y2='61.355442'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650839296'
                    x1='139.5139'
                    y1='49.138569'
                    x2='139.5139'
                    y2='55.185246'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650861760'
                    x1='131.03696'
                    y1='49.138569'
                    x2='131.03696'
                    y2='55.185246'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650857272'
                    x1='122.55894'
                    y1='49.138569'
                    x2='122.55894'
                    y2='55.185246'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650841720'
                    x1='143.8248'
                    y1='42.881153'
                    x2='143.8248'
                    y2='48.92783'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650848248'
                    x1='135.34789'
                    y1='42.881153'
                    x2='135.34789'
                    y2='48.92783'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650855472'
                    x1='126.86977'
                    y1='42.881153'
                    x2='126.86977'
                    y2='48.92783'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650833008'
                    x1='147.99301'
                    y1='336.12329'
                    x2='118.39058'
                    y2='336.12329'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650861856'
                    x1='147.99301'
                    y1='342.23334'
                    x2='118.39058'
                    y2='342.23334'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650857128'
                    x1='147.99301'
                    y1='348.34238'
                    x2='118.39058'
                    y2='348.34238'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650842104'
                    x1='139.5139'
                    y1='341.91611'
                    x2='139.5139'
                    y2='347.96396'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650840832'
                    x1='131.03696'
                    y1='341.91611'
                    x2='131.03696'
                    y2='347.96396'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650857056'
                    x1='122.55894'
                    y1='341.91611'
                    x2='122.55894'
                    y2='347.96396'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650841552'
                    x1='143.8248'
                    y1='336.21048'
                    x2='143.8248'
                    y2='342.2572'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650833776'
                    x1='135.34789'
                    y1='336.21048'
                    x2='135.34789'
                    y2='342.2572'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650858904'
                    x1='126.86977'
                    y1='336.21048'
                    x2='126.86977'
                    y2='342.2572'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650853384'
                    x1='139.5139'
                    y1='330.04028'
                    x2='139.5139'
                    y2='336.08585'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650837328'
                    x1='131.03696'
                    y1='330.04028'
                    x2='131.03696'
                    y2='336.08585'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650861952'
                    x1='122.55894'
                    y1='330.04028'
                    x2='122.55894'
                    y2='336.08585'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650864328'
                    x1='147.99301'
                    y1='0.12040966'
                    x2='118.39058'
                    y2='0.12040966'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650858712'
                    x1='147.99301'
                    y1='6.2282891'
                    x2='118.39058'
                    y2='6.2282891'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650853744'
                    x1='147.99301'
                    y1='12.337298'
                    x2='118.39058'
                    y2='12.337298'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650849160'
                    x1='147.99301'
                    y1='18.447428'
                    x2='118.39058'
                    y2='18.447428'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650839128'
                    x1='147.99301'
                    y1='24.556421'
                    x2='118.39058'
                    y2='24.556421'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650855352'
                    x1='147.99301'
                    y1='30.664263'
                    x2='118.39058'
                    y2='30.664263'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650835936'
                    x1='147.99301'
                    y1='36.774403'
                    x2='118.39058'
                    y2='36.774403'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650856864'
                    x1='139.5139'
                    y1='36.961346'
                    x2='139.5139'
                    y2='43.00803'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650847360'
                    x1='131.03696'
                    y1='36.961346'
                    x2='131.03696'
                    y2='43.00803'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650850504'
                    x1='122.55894'
                    y1='36.961346'
                    x2='122.55894'
                    y2='43.00803'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650850432'
                    x1='143.8248'
                    y1='30.70508'
                    x2='143.8248'
                    y2='36.750629'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650854824'
                    x1='135.34789'
                    y1='30.70508'
                    x2='135.34789'
                    y2='36.750629'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650837208'
                    x1='126.86977'
                    y1='30.70508'
                    x2='126.86977'
                    y2='36.750629'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650836512'
                    x1='139.5139'
                    y1='24.533762'
                    x2='139.5139'
                    y2='30.580454'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650840976'
                    x1='131.03696'
                    y1='24.533762'
                    x2='131.03696'
                    y2='30.580454'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650843400'
                    x1='122.55894'
                    y1='24.533762'
                    x2='122.55894'
                    y2='30.580454'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650851872'
                    x1='143.8248'
                    y1='18.762384'
                    x2='143.8248'
                    y2='24.809061'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650843280'
                    x1='135.34789'
                    y1='18.762384'
                    x2='135.34789'
                    y2='24.809061'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650855136'
                    x1='126.86977'
                    y1='18.762384'
                    x2='126.86977'
                    y2='24.809061'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650854992'
                    x1='139.5139'
                    y1='12.591083'
                    x2='139.5139'
                    y2='18.637774'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650844816'
                    x1='131.03696'
                    y1='12.591083'
                    x2='131.03696'
                    y2='18.637774'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650854272'
                    x1='122.55894'
                    y1='12.591083'
                    x2='122.55894'
                    y2='18.637774'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650841672'
                    x1='143.8248'
                    y1='6.3347802'
                    x2='143.8248'
                    y2='12.381473'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650835648'
                    x1='135.34789'
                    y1='6.3347802'
                    x2='135.34789'
                    y2='12.381473'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650833272'
                    x1='126.86977'
                    y1='6.3347802'
                    x2='126.86977'
                    y2='12.381473'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650839968'
                    x1='139.5139'
                    y1='0.16461436'
                    x2='139.5139'
                    y2='6.2101617'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650854968'
                    x1='131.03696'
                    y1='0.16461436'
                    x2='131.03696'
                    y2='6.2101617'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <line
                    id='_650861280'
                    x1='122.55894'
                    y1='0.16461436'
                    x2='122.55894'
                    y2='6.2101617'
                    style={{fill: 'none', fillRule: 'evenodd', stroke: '#ebecec', strokeWidth: '0.24062634'}} />
                <rect
                    x='119.85843'
                    y='0.11929577'
                    width='0.79270446'
                    height='347.70529'
                    id='rect780'
                    style={{fill: '#2b2a29', fillRule: 'evenodd', strokeWidth: '0.26458332'}} />
                <rect
                    x='117.58932'
                    y='0.11929577'
                    width='0.25799614'
                    height='347.70529'
                    id='rect788'
                    style={{fill: '#9d9e9e', fillRule: 'evenodd', strokeWidth: '0.26458332'}}  />
            </g>
        )
    }
}

export { Wall }

Wall.propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
};

Wall.defaultProps = {
    left: 0,
    top: 0,
};