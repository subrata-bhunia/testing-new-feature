import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import {Sheet} from '../../components';

registerSheet('lang-sheet', Sheet);
registerSheet('test-lang-sheet', Sheet);
// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'lang-sheet': SheetDefinition;
    'test-lang-sheet': SheetDefinition;
  }
}

export {};
