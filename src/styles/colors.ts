const SUN_FLOWER = '#f1c40f';
const ASBESTOS = '#7f8c8d';
const MIDNIGHT_BLUE = '#2c3e50';
const EMERALD = '#2ecc71';
const ALIZARIN = '#e74c3c';
const CLOUDS = '#ecf0f1';
const SILVER = '#bdc3c7';
const BLACK = '#000';

export interface ColorsProps {
  PRIMARY: string;
  PRIMARY_VARIANT: string;
  SECONDARY: string;
  SECONDARY_VARIANT: string;
  BACKGROUND: string;
  SURFACE: string;
  SHADOW: string;
  ERROR: string;
  SUCCESS: string;
  TEXT: string;
  TEXT_SECONDARY: string;
  ON_PRIMARY: string;
  ON_SECONDARY: string;
  ON_BACKGROUND: string;
  ON_SURFACE: string;
  ON_ERROR: string;
}

const light = {
  PRIMARY: '#002340',
  BACKGROUND: '#FFFFFF',
  TEXT: '#002340',
  TEXT_SECONDARY: ASBESTOS,
  SHADOW: BLACK,
  PRIMARY_VARIANT: '#C4DFE9',
  SECONDARY: SUN_FLOWER,
  SECONDARY_VARIANT: SUN_FLOWER,
  SURFACE: SUN_FLOWER,
  ERROR: '#DB381D',
  SUCCESS: EMERALD,
  ON_PRIMARY: '#FFFFFF',
  ON_SECONDARY: SUN_FLOWER,
  ON_BACKGROUND: '#F5F5F5',
  ON_SURFACE: SUN_FLOWER,
  ON_ERROR: SUN_FLOWER,
};

const dark = {
  PRIMARY: ALIZARIN,
  BACKGROUND: MIDNIGHT_BLUE,
  TEXT: CLOUDS,
  TEXT_SECONDARY: SILVER,
  SHADOW: BLACK,
  PRIMARY_VARIANT: SUN_FLOWER,
  SECONDARY: SUN_FLOWER,
  SECONDARY_VARIANT: SUN_FLOWER,
  SURFACE: SUN_FLOWER,
  ERROR: ALIZARIN,
  SUCCESS: EMERALD,
  ON_PRIMARY: SUN_FLOWER,
  ON_SECONDARY: SUN_FLOWER,
  ON_BACKGROUND: ASBESTOS,
  ON_SURFACE: SUN_FLOWER,
  ON_ERROR: SUN_FLOWER,
};

export const colors = {light, dark};
