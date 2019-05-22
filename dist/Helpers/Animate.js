import { Animated } from 'react-native';
export var Animate;
(function (Animate) {
    Animate.timing = (element, obj) => Animated.timing(element, Object.assign({ useNativeDriver: true }, obj));
    Animate.spring = (element, obj) => Animated.spring(element, Object.assign({ useNativeDriver: true }, obj));
    Animate.parallel = (elements) => Animated.parallel(elements);
})(Animate || (Animate = {}));
//# sourceMappingURL=Animate.js.map