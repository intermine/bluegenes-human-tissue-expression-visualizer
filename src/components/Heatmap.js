import React from 'react';
import { VegaLite } from 'react-vega';

const Heatmap = ({ graphData, tissueList, labelHeight, graphHeight }) => {
	const spec = {
		width: 400,
		height: 200,
		mark: 'bar',
		encoding: {
			x: { field: 'a', type: 'ordinal' },
			y: { field: 'b', type: 'quantitative' }
		},
		data: { name: 'table' } // note: vega-lite data attribute is a plain object instead of an array
	};

	const barData = {
		table: [
			{ a: 'A', b: 28 },
			{ a: 'B', b: 55 },
			{ a: 'C', b: 43 },
			{ a: 'D', b: 91 },
			{ a: 'E', b: 81 },
			{ a: 'F', b: 53 },
			{ a: 'G', b: 19 },
			{ a: 'H', b: 87 },
			{ a: 'I', b: 52 }
		]
	};

	return (
		<div className="graph-container">
			<VegaLite spec={spec} data={barData} />
		</div>
	);
	/*
	return (
		<div className="graph-container">
			<HeatMap
				animate={false}
				data={graphData}
				keys={tissueList.map(t => t.value)}
				colors={heatmap_colors}
				indexBy="Gene"
				margin={{ top: labelHeight, right: 60, bottom: 0, left: 80 }}
				forceSquare={true}
				axisTop={{
					orient: 'top',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: -90
				}}
				height={graphHeight}
				width={tissueList.length * 50 + 100}
				axisRight={null}
				axisBottom={null}
				axisLeft={{
					orient: 'left',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0
				}}
				cellBorderWidth={1}
				cellBorderColor="rgb(51, 51, 51)"
				labelTextColor="rgb(51, 51, 51)"
				cellHoverOthersOpacity={1}
				cellOpacity={1}
				nanColor="#fff"
				cellShape={({
					data,
					value,
					x,
					y,
					width,
					height,
					color,
					opacity,
					borderWidth,
					borderColor,
					enableLabel,
					textColor,
					onHover,
					onLeave,
					onClick,
					theme
				}) => {
					return (
						<g
							transform={`translate(${x}, ${y})`}
							onMouseEnter={onHover}
							onMouseMove={onHover}
							onMouseLeave={onLeave}
							onClick={e => onClick(data, e)}
							style={{ cursor: 'pointer' }}
						>
							<rect
								x={width * -0.5}
								y={height * -0.5}
								width={width}
								height={height}
								fill={color}
								fillOpacity={opacity}
								strokeWidth={borderWidth}
								stroke={borderColor}
								strokeOpacity={opacity}
							/>
							{enableLabel && (
								<text
									alignmentBaseline="central"
									textAnchor="middle"
									style={{
										...theme.labels.text,
										fill: textColor
									}}
									fillOpacity={opacity}
								>
									{isNaN(value) ? 'NA' : value}
								</text>
							)}
						</g>
					);
				}}
			/>
		</div>
	);
	*/
};

export default Heatmap;
