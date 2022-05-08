import {useRef, useEffect} from "react";
import {Animated} from "react-native";
import type {TimingAnimationConfig} from "react-native/Libraries/Animated/animations/TimingAnimation";

const useAnimation = (value: number, options: TimingAnimationConfig, type = "timing") => {
  const anim = useRef(new Animated.Value(value)).current;

  useEffect(() => {
    Animated[type](anim, {
      useNativeDriver: false,
      ...options,
    }).start();
  }, [anim]);

  return anim;
};

export default useAnimation;
