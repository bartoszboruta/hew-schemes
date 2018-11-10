import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Connector, Pipe, Pump } from '../';

class AutomaticBoiler extends Component {
	static getGradients() {
		return <defs>
			<linearGradient
				id='SVGID_60_'
				gradientUnits='userSpaceOnUse'
				x1='-0.00048828131'
				y1='150.7002'
				x2='0.99949998'
				y2='150.7002'
				gradientTransform='matrix(4.4283,0,0,1.0879,72.668,-83.6042)'>
				<stop
					offset='0'
					style={{ stopColor: '#C4C2C2' }}
					id='stop1519' />
				<stop
					offset='1'
					style={{ stopColor: '#A0A0A0' }}
					id='stop1521' />
			</linearGradient>
			<clipPath
				id='SVGID_59_'>
				<use
					height='100%'
					width='100%'
					y='0'
					x='0'
					style={{ overflow: 'visible' }}
					xlinkHref='#SVGID_58_'
					overflow='visible'
					id='use1516' />
			</clipPath>
			<linearGradient
				id='SVGID_57_'
				gradientUnits='userSpaceOnUse'
				x1='0'
				y1='150.7002'
				x2='1'
				y2='150.7002'
				gradientTransform='matrix(11.9503,0,0,19.7399,68.9063,-2901.7593)'>
				<stop
					offset='0'
					style={{ stopColor: '#EBECEC' }}
					id='stop1488' />
				<stop
					offset='1'
					style={{ stopColor: '#FEFEFE' }}
					id='stop1490' />
			</linearGradient>
			<clipPath
				id='SVGID_56_'>
				<use
					height='100%'
					width='100%'
					y='0'
					x='0'
					style={{ overflow: 'visible' }}
					xlinkHref='#SVGID_55_'
					overflow='visible'
					id='use1485' />
			</clipPath>
			<rect
				id='SVGID_55_'
				x='68.908997'
				y='63.171001'
				width='11.95'
				height='19.74' />
			<rect
				id='SVGID_58_'
				x='72.668999'
				y='79.805'
				width='4.428'
				height='1.0880001' />
		</defs>
	}

	render() {
		return (
			<g className='AutomaticBoiler' transform={'translate(' + this.props.left + ' ' + this.props.top + ')'}>
				{
					AutomaticBoiler.getGradients()
				}

				<g>
					<Pipe
						id={'automaticBoiler_1'}
						active={this.props.active}
						activeColor={'hot'}
						begin={2}
						d={'M 5 40 L 77 40 S 85 40 85 32 L 85 5'}
						direction={'reversed'}
						duration={4}
						left={-65}
						top={80}
					/>
					<Connector left={-69} top={96} />

					<Pipe
						id={'automaticBoiler_2'}
						active={this.props.active}
						activeColor={'cold'}
						d={'M 5 81 L 104.2 81 S 110 81 110 75.2 L 110 5'}
						duration={5}
						left={-65}
						top={80}
					/>
					<Connector left={-69} top={137} />

					<Pump top={120} left={32} active={this.props.active} activeDuration={2} />

					<rect
						style={{ clipRule: 'evenodd', fill: '#999999', fillRule: 'evenodd', strokeWidth: '0.26458341' }}
						x='20.04995'
						y='3.6522018e-005'
						width='23.2299'
						height='3.5563002'
						id='rect1480' />
					<g
						transform='matrix(5.3000001,0,0,5.3000001,-365.21769,-331.25001)'
						id='g1495'
						style={{ strokeWidth: '0.04992138' }}>
						<rect
							style={{ fill: 'url(#SVGID_57_)', strokeWidth: '0.04992138' }}
							x='68.908997'
							y='63.171001'
							clipPath='url(#SVGID_56_)'
							width='11.95'
							height='19.74'
							id='rect1493' />
					</g>
					<rect
						style={{ clipRule: 'evenodd', fill: '#c4c2c2', fillRule: 'evenodd', strokeWidth: '0.26458341' }}
						x='61.029572'
						y='3.556349'
						width='1.1872001'
						height='104.62201'
						id='rect1497' />
					<rect
						style={{ clipRule: 'evenodd', fill: '#cccccc', fillRule: 'evenodd', strokeWidth: '0.26458341' }}
						x='0.5883109'
						y='4.1658311'
						width='1.1872001'
						height='104.01251'
						id='rect1499' />
					<polygon
						transform='matrix(5.3000001,0,0,5.3000001,-365.21769,-331.25001)'
						style={{ clipRule: 'evenodd', fill: '#808080', fillRule: 'evenodd', strokeWidth: '0.04992138' }}
						points='80.858,82.799 80.858,82.911 80.858,83.022 69.02,83.022 69.02,82.799 80.635,82.799 80.635,63.171 80.858,63.171 '
						id='polygon1501' />
					<polygon
						transform='matrix(5.3000001,0,0,5.3000001,-365.21769,-331.25001)'
						style={{ clipRule: 'evenodd', fill: '#c4c2c2', fillRule: 'evenodd', strokeWidth: '0.04992138' }}
						points='69.02,63.394 69.02,63.171 80.424,63.171 80.635,63.171 80.647,63.171 80.647,82.588 80.649,82.588 80.649,82.812 80.647,82.812 80.424,82.812 69.02,82.812 69.02,82.588 80.424,82.588 80.424,63.394 '
						id='polygon1503' />
					<rect
						style={{ clipRule: 'evenodd', fill: '#808080', fillRule: 'evenodd', strokeWidth: '0.26458341' }}
						x='20.638222'
						y='3.6522018e-005'
						width='22.053299'
						height='3.5563002'
						id='rect1505' />
					<rect
						style={{ clipRule: 'evenodd', fill: '#b3b3b3', fillRule: 'evenodd', strokeWidth: '0.26458341' }}
						x='17.500622'
						y='89.379242'
						width='28.333803'
						height='10.441'
						id='rect1507' />
					<rect
						style={{ clipRule: 'evenodd', fill: '#cccccc', fillRule: 'evenodd', strokeWidth: '0.26458341' }}
						x='18.216125'
						y='90.158356'
						width='26.8922'
						height='8.8828001'
						id='rect1509' />
					<rect
						style={{ clipRule: 'evenodd', fill: '#808080', fillRule: 'evenodd', strokeWidth: '0.26458341' }}
						x='19.016449'
						y='90.900337'
						width='25.302202'
						height='7.3988004'
						id='rect1511' />
					<g
						transform='matrix(5.3000001,0,0,5.3000001,-365.21769,-331.25001)'
						id='g1526'
						style={{ strokeWidth: '0.04992138' }}>
						<rect
							style={{ fill: 'url(#SVGID_60_)', strokeWidth: '0.04992138' }}
							x='72.668999'
							y='79.805'
							clipPath='url(#SVGID_59_)'
							width='4.428'
							height='1.0880001'
							id='rect1524' />
					</g>
				</g>
			</g>
		)
	}
}

export { AutomaticBoiler }

AutomaticBoiler.propTypes = {
	left: PropTypes.number,
	top: PropTypes.number,
};

AutomaticBoiler.defaultProps = {
	left: 0,
	top: 0,
};