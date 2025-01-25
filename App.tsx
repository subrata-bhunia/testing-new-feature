import './src/utils/helper/i18n';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import StackNavigatior from './src/navigations/stack.navigation';

// This is the default configuration
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});
export default function App() {
  return <StackNavigatior />;
}
