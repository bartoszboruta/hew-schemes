import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeatPump extends Component {
    render() {
        return <g className='HeatPump' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
            <rect
                style={{clipRule:'evenodd',fill:'#c4c2c2', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                x='6.3427733e-006'
                y='0.0052425489'
                width='1.1872001'
                height='104.092'
                id='rect1785-9' />
            <rect
                style={{clipRule:'evenodd', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                x='0.82677329'
                y='0.58298606'
                width='25.747398'
                height='103.509'
                id='rect1787-4' />
            <rect
                style={{clipRule:'evenodd',fill:'#241c75', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                x='7.7803712'
                y='72.758385'
                width='11.845499'
                height='6.0419998'
                id='rect1789-9' />
            <rect
                style={{clipRule:'evenodd',fill:'#ffffff', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                x='26.579466'
                y='0.83738059'
                width='34.455299'
                height='103.2546'
                id='rect1791-0' />
            <polygon
                transform='matrix(5.3,0,0,5.3,-566.4322,-334.8911)'
                style={{clipRule:'evenodd',fill:'#808080', fillRule:'evenodd', strokeWidth:'0.04992139'}}
                points='118.601,82.827 118.601,63.188 118.824,63.188 118.824,82.827 118.824,82.927 118.824,83.038 106.874,83.038 106.874,82.827 '
                id='polygon1793-8' />
            <path
                style={{clipRule:'evenodd',fill:'#c4c2c2', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                d='M 62.15309,104.09199 H 62.14179 60.9546 0.518705 v -1.18723 H 60.95528 V 1.1818766 H 0.519383 V -2.3369141e-5 H 60.95528 62.0789 62.1424 C 62.1424,34.693777 62.1537,69.414067 62.1537,104.09199'
                id='path1795-6' />
        </g>

    }
}

class HeatPumpOutside extends Component {
    static getGradients() {
        return   <defs id='defs5493'>
            <linearGradient
                id='SVGID_81_'
                gradientUnits='userSpaceOnUse'
                x1='-0.00048828131'
                y1='150.7002'
                x2='0.99900001'
                y2='150.7002'
                gradientTransform='matrix(7.9166,0,0,28.2382,138.4961,-4150.8853)'>
                <stop
                    offset='0'
                    style={{stopColor:'#EBECEC'}}
                    id='stop1774' />
                <stop
                    offset='1'
                    style={{stopColor:'#FEFEFE'}}
                    id='stop1776' />
            </linearGradient>
            <clipPath
                id='SVGID_80_-6'>
                <use
                    height='100%'
                    width='100%'
                    y='0'
                    x='0'
                    style={{overflow:'visible'}}
                    xlinkHref='#SVGID_79_'
                    overflow='visible'
                    id='use1771-6' />
            </clipPath>
            <rect
                id='rect5927'
                x='138.494'
                y='90.495003'
                width='7.9159999'
                height='28.237' />
            <linearGradient
                id='SVGID_81_-5'
                gradientUnits='userSpaceOnUse'
                x1='-0.00048828131'
                y1='150.7002'
                x2='0.99900001'
                y2='150.7002'
                gradientTransform='matrix(7.9166,0,0,28.2382,138.4961,-4150.8853)'>
                <stop
                    offset='0'
                    style={{stopColor:'#EBECEC'}}
                    id='stop1774-1' />
                <stop
                    offset='1'
                    style={{stopColor:'#FEFEFE'}}
                    id='stop1776-7' />
            </linearGradient>
            <clipPath
                id='SVGID_80_'>
                <use
                    height='100%'
                    width='100%'
                    y='0'
                    x='0'
                    style={{overflow:'visible'}}
                    xlinkHref='#SVGID_79_'
                    overflow='visible'
                    id='use1771' />
            </clipPath>
            <rect
                id='SVGID_79_'
                x='138.494'
                y='90.495003'
                width='7.9159999'
                height='28.237' />
        </defs>
    }

    render() {
        return <g className='HeatPumpOutside' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
                {
                    HeatPumpOutside.getGradients()
                }
                <g>
                    <rect
                        style={{clipRule:'evenodd',fill:'#ffffff', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                        x='9.1053333'
                        y='0.30742645'
                        width='59.444798'
                        height='157.62199'
                        id='rect1744' />
                    <rect
                        style={{clipRule:'evenodd',fill:'#808080', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                        x='8.8615932'
                        y='1.4893417'
                        width='0.90100002'
                        height='155.85181'
                        id='rect1746' />
                    <rect
                        style={{clipRule:'evenodd',fill:'#808080', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                        x='8.8615932'
                        y='156.74753'
                        width='59.688599'
                        height='1.1819001'
                        id='rect1748' />
                    <polygon
                        transform='matrix(5.3,0,0,5.3,-713.4595,-472.5321)'
                        style={{fill:'#c4c7c7', strokeWidth:'0.04992139'}}
                        points='134.615,120.597 134.967,120.597 148.704,120.597 149.056,120.597 150.975,123.992 150.976,124.928 150.555,124.928 148.535,121.593 135.615,121.593 135.615,124.928 134.615,124.928 134.615,120.948 '
                        id='polygon1750' />
                    <rect
                        style={{clipRule:'evenodd',fill:'#e6e6e6', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                        x='19.090557'
                        y='7.0914001'
                        width='1.4681001'
                        height='149.6561'
                        id='rect1752' />
                    <rect
                        style={{clipRule:'evenodd', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                        x='2.5280395'
                        y='161.61292'
                        width='7.9976997'
                        height='5.0137997'
                        id='rect1754' />
                    <polygon
                        transform='matrix(5.3,0,0,5.3,-713.4595,-472.5321)'
                        style={{clipRule:'evenodd', fill:'#b3b3b3', fillRule:'evenodd', strokeWidth:'0.04992139'}}
                        points='136.517,118.955 135.578,119.65 137.451,119.65 137.451,118.955 '
                        id='polygon1756' />
                    <rect
                        style={{clipRule:'evenodd', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                        x='66.674095'
                        y='161.61292'
                        width='7.9976997'
                        height='5.0137997'
                        id='rect1758' />
                    <polygon
                        transform='matrix(5.3,0,0,5.3,-713.4595,-472.5321)'
                        style={{clipRule:'evenodd', fill:'#b3b3b3', fillRule:'evenodd', strokeWidth:'0.04992139'}}
                        points='147.279,118.955 148.218,119.65 146.345,119.65 146.345,118.955 '
                        id='polygon1760' />
                    <rect
                        style={{clipRule:'evenodd',fill:'#1a1a1a', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                        x='62.513569'
                        y='6.7893372'
                        width='5.8459005'
                        height='149.95821'
                        id='rect1762' />
                    <rect
                        style={{clipRule:'evenodd',fill:'#ffffff', fillRule:'evenodd', strokeWidth:'0.26458332'}}
                        x='8.8615932'
                        y='0.30205536'
                        width='59.688599'
                        height='6.4925003'
                        id='rect1764' />
                    <path
                        style={{fill:'#808080', strokeWidth:'0.26458332'}}
                        d='M 68.09972,6.2380937 V 0.85331371 H 9.312127 V 6.2380937 Z m 0.726102,-5.93598999 v 6.49248999 0.30199 H 68.550222 8.8616328 8.5860318 V 6.7945937 0.30210371 1.1371094e-4 h 0.275604 59.6885902 0.275604 z'/>
                    <g
                        transform='matrix(5.3,0,0,5.3,-713.4595,-472.5321)'
                        style={{strokeWidth:'0.04992139'}}>
                        <defs>
                            <rect
                                x='138.494'
                                y='90.495003'
                                width='7.9159999'
                                height='28.237' />
                        </defs>
                        <clipPath
                            id='clipPath5773'>
                            <use
                                height='100%'
                                width='100%'
                                y='0'
                                x='0'
                                style={{overflow:'visible'}}
                                xlinkHref={'#SVGID_79_'}
                                overflow='visible'
                                id='use5771' />
                        </clipPath>
                        <linearGradient
                            id='linearGradient5779'
                            gradientUnits='userSpaceOnUse'
                            x1='-0.00048828131'
                            y1='150.7002'
                            x2='0.99900001'
                            y2='150.7002'
                            gradientTransform='matrix(7.9166,0,0,28.2382,138.4961,-4150.8853)'>
                            <stop
                                offset='0'
                                style={{stopColor:'#EBECEC'}}
                                id='stop5775' />
                            <stop
                                offset='1'
                                style={{stopColor:'#FEFEFE'}}
                                id='stop5777' />
                        </linearGradient>
                        <rect
                            style={{fill:'url(#SVGID_81_)', strokeWidth:'0.04992139'}}
                            x='138.494'
                            y='90.495003'
                            clipPath='url(#SVGID_80_-6)'
                            width='7.9159999'
                            height='28.237'
                            id='rect1779' />
                    </g>
                    <polygon
                        transform='matrix(5.3,0,0,5.3,-713.4595,-472.5321)'
                        style={{clipRule:'evenodd',fill:'#c4c2c2', fillRule:'evenodd', strokeWidth:'0.04992139'}}
                        points='146.41,90.495 136.646,90.495 136.434,90.495 136.422,90.495 136.422,118.509 136.42,118.509 136.42,118.732 136.422,118.732 136.646,118.732 146.41,118.732 146.41,118.509 136.646,118.509 136.646,90.718 146.41,90.718 '
                        id='polygon1783' />
                </g>
        </g>
    }
}

export { HeatPump, HeatPumpOutside }

HeatPump.propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
};

HeatPump.defaultProps = {
    left: 0,
    top: 0,
};

HeatPumpOutside.propTypes = {
    left: PropTypes.number,
    top: PropTypes.number,
};

HeatPumpOutside.defaultProps = {
    left: 0,
    top: 0,
};