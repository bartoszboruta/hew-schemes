import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Shower extends Component {
    static getGradients() {
        return <defs>
            <linearGradient
                id="linearGradient3515-8-9"
                spreadMethod="pad"
                gradientTransform="matrix(-5.5749478,0,0,8.4778945,13.622563,-0.00220939)"
                gradientUnits="userSpaceOnUse"
                y2="0"
                x2="1"
                y1="0"
                x1="0">
                <stop
                    offset="0"
                    style={{stopOpacity:1, stopColor:'#fefefe'}} />
                <stop
                    offset="0.58"
                    style={{stopOpacity:1, stopColor:'#e0e0e0'}} />
                <stop
                    offset="1"
                    style={{stopOpacity:1, stopColor:'#d4d4d4'}} />
            </linearGradient>
            <linearGradient
                id="linearGradient3541-3-1"
                spreadMethod="pad"
                gradientTransform="matrix(-20.286802,0,0,8.1643112,20.790883,8.2309506)"
                gradientUnits="userSpaceOnUse"
                y2="0"
                x2="1"
                y1="0"
                x1="0">
                <stop
                    offset="0"
                    style={{stopOpacity:1, stopColor:'#9d9e9e'}} />
                <stop
                    offset="1"
                    style={{stopOpacity:1, stopColor:'#fefefe'}} />
            </linearGradient>
            <linearGradient
                id="linearGradient3579-0-5"
                spreadMethod="pad"
                gradientTransform="matrix(-20.311383,0,0,8.3657199,20.741917,8.0743606)"
                gradientUnits="userSpaceOnUse"
                y2="0"
                x2="1"
                y1="0"
                x1="0">
                <stop
                    offset="0"
                    style={{stopOpacity:1, stopColor:'#c5c6c6'}} />
                <stop
                    offset="1"
                    style={{stopOpacity:1, stopColor:'#9d9e9e'}} />
            </linearGradient>
        </defs>
    }

    render() {
        return  <g className='Shower' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
            {
                Shower.getGradients()
            }
            <path
                d="M 13.622563,6.1035149e-7 H 8.0483326 V 8.4757306 h 5.5742304 z"
                style={{fill:'url(#linearGradient3515-8-9)', fillRule:'evenodd', stroke:'none',strokeWidth:1.78004003}} />
            <path
                style={{fill:'#b0b0b0',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="m 8.3103326,6.1035149e-7 h -0.262 V 8.3060306 h 0.262 z"/>
            <path
                style={{fill:'#cccccc',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="m 13.622563,6.1035149e-7 h -0.262 V 8.7216606 h 0.262 z"/>
            <path
                style={{fill:'#b2b2b2',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="m 6.5017226,8.5687906 c -1.03084,0.31918 -1.96973,0.95794 -2.98148,1.9697104 -1.01289,1.01288 -2.10204,2.40177 -2.70151998,3.10967 -0.60065,0.70976 -0.71538,0.74042 -0.77258,1.05849 -0.0571,0.31882 -0.0571,0.92692 -0.0224,1.24986 0.0374,0.32554 0.11107,0.3689 1.96821998,0.39019 2.60957,0.0294 5.13133,0.0452 7.64636,0.0474 -2.34759,-0.004 -4.70526,-0.021 -7.13991,-0.0474 -1.85722998,-0.0215 -1.93121998,-0.0647 -1.96821998,-0.39019 -0.0374,-0.32294 -0.0374,-0.93104 0.0224,-1.24986 0.0565,-0.31807 0.17071,-0.34873 0.77254998,-1.05849 0.59952,-0.7079 1.68864,-2.09679 2.70153,-3.10967 1.01177,-1.0117704 1.95066,-1.6505304 2.98147,-1.9697104 0.68323,-0.21081 2.00673,-0.32293 3.3679604,-0.33563 -1.5309304,-0.0147 -3.1052004,0.0987 -3.8743804,0.33563" />
            <path
                d="m 7.0081426,8.5687906 c -1.03081,0.31918 -1.9697,0.95794 -2.98145,1.9697104 -1.01291,1.01288 -2.10203,2.40177 -2.70155,3.10967 -0.60172998,0.70976 -0.71609998,0.74042 -0.77254998,1.05849 -0.0571,0.31882 -0.0571,0.92692 -0.0224,1.24986 0.0374,0.32554 0.11108,0.3689 1.96821998,0.39019 5.56749,0.0636 10.7294904,0.0636 16.2970004,0 1.85607,-0.0215 1.93158,-0.0647 1.96746,-0.39019 0.0374,-0.32294 0.0374,-0.93104 -0.0189,-1.24986 -0.0573,-0.31807 -0.17154,-0.34873 -0.77219,-1.05849 -0.601,-0.7079 -1.69013,-2.09679 -2.7019,-3.10967 -1.01177,-1.0117704 -1.95026,-1.6505304 -2.9811,-1.9697104 -1.45916,-0.44887 -5.8209104,-0.45001 -7.2808204,0"
                style={{fill:'url(#linearGradient3541-3-1)', fillRule:'evenodd', stroke:'none',strokeWidth:1.78004003}} />
            <path
                style={{fill:'#999999',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="m 14.288973,8.5687906 c 1.03082,0.31918 1.96935,0.95794 2.9811,1.9697104 1.01177,1.01288 2.1009,2.40177 2.7019,3.10967 0.60062,0.70976 0.715,0.74042 0.7722,1.05849 0.0571,0.31882 0.0571,0.92692 0.0189,1.24986 -0.0374,0.32554 -0.11129,0.3689 -1.96748,0.39019 -2.60958,0.0294 -5.13097,0.0452 -7.64635,0.0474 2.34795,-0.004 4.70525,-0.021 7.13991,-0.0474 1.85721,-0.0215 1.93158,-0.0647 1.9686,-0.39019 0.0374,-0.32294 0.0374,-0.93104 -0.0224,-1.24986 -0.0571,-0.31807 -0.17155,-0.34873 -0.77219,-1.05849 -0.59987,-0.7079 -1.68902,-2.09679 -2.7019,-3.10967 -1.01175,-1.0117704 -1.95026,-1.6505304 -2.9811,-1.9697104 -0.68472,-0.21081 -2.00671,-0.32293 -3.36831,-0.33563 1.53093,-0.0147 3.10557,0.0987 3.87476,0.33563" />
            <path
                style={{fill:'#e8bfbf',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="m 18.163363,17.676171 h -0.95683 v 12.43383 h 0.95683 z"/>
            <path
                style={{fill:'#e8bfbf',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="m 16.334543,17.676171 h -0.95569 v 12.43383 h 0.95569 z"/>
            <path
                style={{fill:'#e8bfbf',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="m 14.563303,17.676171 h -0.95682 v 12.43383 h 0.95682 z" />
            <path
                style={{fill:'#e8bfbf',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="m 12.762183,17.676171 h -0.95571 v 12.43383 h 0.95571 z"/>
            <path
                style={{fill:'#e8bfbf',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="M 10.933373,17.676171 H 9.9769226 v 12.43383 h 0.9564504 z" />
            <path
                style={{fill:'#e8bfbf',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="m 9.1056826,17.676171 h -0.95644 v 12.43383 h 0.95644 z"/>
            <path
                style={{fill:'#e8bfbf',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="m 7.3333326,17.676171 h -0.95571 v 12.43383 h 0.95571 z" />
            <path
                style={{fill:'#e8bfbf',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="m 5.5333026,17.676171 h -0.95682 v 12.43383 h 0.95682 z"/>
            <path
                style={{fill:'#e8bfbf',fillOpacity:1, fillRule:'evenodd', stroke:'none', strokeWidth:0.33072916}}
                d="m 3.7310326,17.676171 h -0.95569 v 12.43383 h 0.95569 z"/>
            <path
                d="m 0.51772242,14.559411 c -0.0189685,0.0446 -0.030209,0.094 -0.0389406,0.15087 -0.0577083,0.32585 -0.0577083,0.95069 -0.0189685,1.28089 0.0375355,0.33377 0.11148243,0.37837 1.97010158,0.39853 5.5738,0.0659 10.7428701,0.0659 16.3166701,0 1.859792,-0.02 1.934081,-0.0648 1.971215,-0.39853 0.03754,-0.3302 0.03754,-0.95504 -0.02258,-1.28089 -0.01053,-0.0567 -0.02248,-0.10627 -0.03945,-0.15087 z"
                style={{fill:'url(#linearGradient3579-0-5)', fillRule:'evenodd', stroke:'none',strokeWidth:1.78004003}} />
        </g>
    }
}

export { Shower }

Shower.propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
};

Shower.defaultProps = {
    left: 0,
    top: 0,
};