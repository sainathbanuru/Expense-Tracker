import React from "react";
import LinearGradient from "react-native-linear-gradient";

const GradientCard = props => {
  return (
    <LinearGradient
      start={{ x: 0.0, y: 0.5 }}
      end={{ x: 0.5, y: 1.0 }}
      locations={[0.5, 1]}
      useAngle
      angle={200}
      angleCenter={{ x: 0.9, y: 0.1 }}
      colors={props.gradientColors}
      {...props}
    >
      {props.children}
    </LinearGradient>
  );
};

export default GradientCard;
