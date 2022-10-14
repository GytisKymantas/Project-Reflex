import styled from 'styled-components/macro';
import { compose, layout, LayoutProps, space, SpaceProps } from 'styled-system';
import { Theme ,theme} from 'styles/theme';

const defaultButtonProps = compose(layout, space);

export interface DefaultButtonProps
	extends SpaceProps<Theme>,
		LayoutProps<Theme> {
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
}

export type ButtonStyles = Pick<
	DefaultButtonProps,
	'margin' | 'width' | 'padding'
>;

export const BaseButton = styled.button<ButtonStyles>`
	display: block;
	background-color: ${theme.colors.secondary};
	color:${theme.colors.primary};
	border:none;
	padding: '8px 16px';
	width: 100%;
	font-weight: ${({ theme }) => theme.fontWeights.fw700};

	&& {
		${defaultButtonProps}
	}
`;
