import { Animated } from 'react-native';
export declare module Animate {
    const timing: (element: any, obj: any) => Animated.CompositeAnimation;
    const spring: (element: any, obj: any) => Animated.CompositeAnimation;
    const parallel: (elements: any) => Animated.CompositeAnimation;
}
