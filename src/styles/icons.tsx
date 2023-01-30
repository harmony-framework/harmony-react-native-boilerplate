import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIconsI from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIconsI from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeI from 'react-native-vector-icons/FontAwesome';
import FontAwesomeI5 from 'react-native-vector-icons/FontAwesome5';
import FoundationI from 'react-native-vector-icons/Foundation';
import EvilIconsI from 'react-native-vector-icons/EvilIcons';
import OcticonsI from 'react-native-vector-icons/Octicons';
import IoniconsI from 'react-native-vector-icons/Ionicons';
import FeatherI from 'react-native-vector-icons/Feather';
import EntypoI from 'react-native-vector-icons/Entypo';
import ZocialI from 'react-native-vector-icons/Zocial';
import AntDesignI from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';

const Icons: Record<IconsType, any> = {
  MaterialCommunity: MaterialCommunityIconsI,
  SimpleLine: SimpleLineIconsI,
  Material: MaterialIconsI,
  FontAwesome: FontAwesomeI,
  Foundation: FoundationI,
  Evil: EvilIconsI,
  Ion: IoniconsI,
  Oct: OcticonsI,
  Feather: FeatherI,
  Entypo: EntypoI,
  Zocial: ZocialI,
  AntDesign: AntDesignI,
  FontAwesome5: FontAwesomeI5,
};
export type IconsType =
  | 'SimpleLine'
  | 'MaterialCommunity'
  | 'Material'
  | 'FontAwesome'
  | 'Evil'
  | 'Foundation'
  | 'Ion'
  | 'Oct'
  | 'Feather'
  | 'Entypo'
  | 'Zocial'
  | 'AntDesign'
  | 'FontAwesome5';

export interface AppIconsProps extends IconProps {
  type: IconsType;
}
const AppIcons = (props: AppIconsProps) => {
  const {type, ...rest} = props;
  const Icon = Icons[type];
  return <Icon {...rest} />;
};

export default AppIcons;
