import _ from 'lodash';

const EXCLUDE_LIST = [
	
];
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigateToPath(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
