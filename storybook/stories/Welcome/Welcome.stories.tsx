import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import Welcome from './Welcome.component';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={() => {linkTo('Button', 'Button')}} />);
