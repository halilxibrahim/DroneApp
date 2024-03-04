import React from 'react';
import { View } from 'react-native';
import { Svg, Path, Circle } from 'react-native-svg';

const PieChart = ({ size = 200, progress = 0 }) => {
  const radius = size / 2;
  const strokeWidth = 10;
  const centerX = size / 2;
  const centerY = size / 2;
  const angle = progress * 3.6; // 360 derece = 100%

  // Dilimin açısını hesapla
  const x1 = centerX + radius * Math.sin((angle - 90) * Math.PI / 180);
  const y1 = centerY + radius * Math.cos((angle - 90) * Math.PI / 180);
  const largeArcFlag = angle <= 180 ? 0 : 1;
  const path = `M ${centerX},${centerY} L ${centerX},${radius} A ${radius},${radius} 0 ${largeArcFlag},1 ${x1},${y1} Z`;

  return (
    <View>
      <Svg width={size} height={size}>
        <Circle
          cx={centerX}
          cy={centerY}
          r={radius - strokeWidth / 2}
          fill="none"
          stroke="#e5e5e5"
          strokeWidth={strokeWidth}
        />
        <Path
          d={path}
          fill="#4287f5"
        />
      </Svg>
    </View>
  );
};

export default PieChart;
