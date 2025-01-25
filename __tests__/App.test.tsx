/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import fs from 'fs';
import path from 'path';
// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App  />);
});

it('check text',()=>{
  const app = renderer.create(<App text={'New Text'}/>)
  let appJson = app.toJSON()
  const filePath = path.join(__dirname, 'AppRenderOutput.json');

  // Write the JSON output to a file
  fs.writeFileSync(filePath, JSON.stringify(appJson, null, 2), 'utf-8');

  console.log(`Render output stored at: ${filePath}`);
})
