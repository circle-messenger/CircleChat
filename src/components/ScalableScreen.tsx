import React, {useState, useEffect} from 'react';
import {Animated, Easing} from 'react-native';
import {useDrawerStatus} from '@react-navigation/drawer';

type Props = {
  children?: React.ReactNode;
};

const ScalableScreen: React.FC<Props> = ({children}) => {
  const status = useDrawerStatus();

  const [scale] = useState(new Animated.Value(1));

  useEffect(() => {
    const isClosed = status === 'closed';

    const animation = Animated.timing(scale, {
      toValue: isClosed ? 1 : 0.96,
      duration: 150,
      easing: Easing.ease,
      useNativeDriver: false,
    });

    animation.start();

    return () => animation.stop();
  }, [status]);

  return (
    <Animated.View
      style={{
        flex: 1,
        transform: [{scale}, {perspective: 1000}],
        transformOrigin: 'right center',
      }}>
      {children}
    </Animated.View>
  );
};

export default ScalableScreen;
