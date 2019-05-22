import { Animated } from 'react-native';

export module Animate {
	export const timing = (element, obj) => Animated.timing(element, { useNativeDriver: true, ...obj });
	export const spring = (element, obj) => Animated.spring(element, { useNativeDriver: true, ...obj });
	export const parallel = (elements) => Animated.parallel(elements);
}
