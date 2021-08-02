import React, { memo } from 'react';
import {
	ZoomableGroup,
	ComposableMap,
	Geographies,
	Geography,
} from 'react-simple-maps';

const MapChart = ({ countryList, setToolTip, handleSearch, history }) => {
	const geoUrl =
		'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';
	return (
		<>
			<ComposableMap
				data-tip=""
				projectionConfig={{
					scale: 168,
				}}>
				<ZoomableGroup>
					<Geographies geography={geoUrl}>
						{({ geographies }) =>
							geographies.map((geo) => {
								const { NAME } = geo.properties;
								let colorValue;
								let bottles;
								if (countryList[NAME]) {
									if (countryList[NAME] === 1) {
										colorValue = '#e897e8';
										bottles = 1;
									} else if (countryList[NAME] === 2) {
										colorValue = '#d646d6';
										bottles = 2;
									} else if (countryList[NAME] === 3) {
										colorValue = '#992199';
										bottles = 3;
									} else if (countryList[NAME] === 4) {
										colorValue = '#491049';
										bottles = 4;
									} else {
										colorValue = '#210721';
										bottles = countryList[NAME];
									}
								} else {
									colorValue = '#f9e7f9';
									bottles = 0;
								}
								return (
									<Geography
										key={geo.rsmKey}
										geography={geo}
										onClick={() => {
											if (bottles > 0) {
												handleSearch(NAME, 'country');
												history.push('/wines');
											}
										}}
										onMouseEnter={() => {
											setToolTip(`${NAME} - Bottles:${bottles}`);
										}}
										onMouseLeave={() => {
											setToolTip('');
										}}
										style={{
											default: {
												fill: colorValue,
												outline: 'none',
											},
											hover: {
												fill: 'lightblue',
												outline: 'none',
											},
											pressed: {
												fill: '#E42',
												outline: 'none',
											},
										}}
									/>
								);
							})
						}
					</Geographies>
				</ZoomableGroup>
			</ComposableMap>
		</>
	);
};

export default memo(MapChart);
