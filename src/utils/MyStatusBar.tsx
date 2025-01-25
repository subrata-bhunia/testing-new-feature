/*
 * Copyright (c) CodeCaption 2023.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

//import liraries
import React from 'react';
import {ColorValue, StatusBar, StatusBarStyle} from 'react-native';

// import {COLORS} from '../themes/theme.service';
// import {useSelector} from 'react-redux';

interface MyStatusBarProps {
  barStyle: StatusBarStyle;
  translucent?: boolean;
  backgroundColor?: ColorValue;
}

const MyStatusBar = ({
  backgroundColor,
  barStyle = 'dark-content',
  translucent,
  ...props
}: MyStatusBarProps) => {
  return (
    <StatusBar
      translucent={translucent}
      backgroundColor={backgroundColor}
      {...props}
      barStyle={barStyle}
    />
  );
};

export default MyStatusBar;
