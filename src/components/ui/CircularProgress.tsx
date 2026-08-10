import * as React from "react";
import { Animated, Easing, StyleSheet, TextInput, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";
import { Text } from "./Text";

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function CircularProgress({
  value = 75,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = "tomato",
  delay = 0,
  textColor = "#000",
  max = 100,
}) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const rectRef = React.useRef<React.ElementRef<typeof Circle> | null>(null);
  const inputRef = React.useRef<React.ElementRef<typeof TextInput> | null>(
    null,
  );
  const circumference = 2 * Math.PI * radius;

  const animation = (toValue: number) => {
    return Animated.timing(animated, {
      delay,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  React.useEffect(() => {
    animation(value);

    animated.addListener((v) => {
      const maxPerc = (100 * v.value) / max;
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;

      if (inputRef?.current) {
        inputRef.current?.setNativeProps({
          text: Math.round(v.value).toString(),
        });
      }
      if (rectRef?.current) {
        rectRef.current?.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      animated.removeAllListeners();
    };
  }, [max, value]);

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${(radius + strokeWidth) * 2} ${
          (radius + strokeWidth) * 2
        }`}
      >
        <G
          rotation="-90"
          origin={`${radius + strokeWidth}, ${radius + strokeWidth}`}
        >
          <Circle
            ref={rectRef}
            cx="50%"
            cy="50%"
            r={radius}
            strokeDashoffset={circumference}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".2"
          />
        </G>
      </Svg>
      <View
        style={[
          { position: "absolute", top: 0, left: 0, right: 0, bottom: 10 },
          { justifyContent: "center" },
        ]}
      >
        <AnimatedTextInput
          ref={inputRef}
          underlineColorAndroid="transparent"
          editable={false}
          defaultValue="0"
          className="pb-0"
          style={[
            { fontSize: radius / 2, color: textColor ?? color },
            styles.text,
          ]}
        />
        <Text className="text-center text-primary">OF {max}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontWeight: "900", textAlign: "center" },
});
