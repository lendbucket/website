import { extendTheme, HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import { CardComponent } from './card';
import { breakpoints } from './breakpoints';
import { globalStyles } from './styles';

export default extendTheme(
	{ breakpoints }, // Breakpoints
	globalStyles,
	CardComponent // card component
);

export interface CustomCardProps extends HTMLChakraProps<'div'>, ThemingProps {}
