export type Colors = keyof typeof colors;

const colors = {
	primary: '#FFFFFF',
	secondary: '#23A6AE',
	lightDark: '#0A1F20',
	Dark: '#0F0F0F',
};

export const theme = {
	colors,
	fontFamily: { primary: 'Roboto Slab',
secondary:'Open Sans' },
	fontSizes: {
		fs16: '1rem',
		fs20:'1.25rem',
		fs28:'1.75rem',
	},
	fontWeights: {
		fw700: 700,
	},
	lineHeight: {
		lh: '1rem',
		lh38:'2.375rem',
	},
	breakpoints: ['24rem', '47rem', '90rem'] as unknown as Breakpoints,
	space: {
		s0:"0",
		auto:"auto",
		s16: '1rem',
		s40: '40px',
		s60: '60px',
		s85:"85px",
		s105:"105px",
		s110:"110px",
		s115:"115px",
		s120:"120px",
		s125:"125px",
		s135:"135px",
		s150:"150px",
		s180:'11.25rem',
		s200:"200px",
		s210:"210px",
		s360:"360px",

	},
	typography: {
		h1: {
			fontSize: '48px',
			lineHeight: '4rem',
			fontSizeMobile: '34px',
			fontWeight: 400,
		},
		h2: {
			fontSize: '64px',
			lineHeight: '84.41px',
			fontSizeMobile: '4rem',
			fontWeight: 400,
		},
		h3: {
			fontSize: '5rem',
			lineHeight: '6.5',
			fontSizeMobile: '4rem',
			fontWeight: 700,
		},
		h4: {
			fontSize: '5rem',
			lineHeight: '6.5',
			fontSizeMobile: '4rem',
			fontWeight: 700,
		},
		h5: {
			fontSize: '5rem',
			lineHeight: '6.5',
			fontSizeMobile: '4rem',
			fontWeight: 700,
		},
		h6: {
			fontSize: '5rem',
			lineHeight: '6.5',
			fontSizeMobile: '4rem',
			fontWeight: 700,
		},
		caption12: {
			fontSize: '20px',
			lineHeight: '27.24px',
			fontSizeMobile: '14px',
			fontWeight: 400,
		},
	},
} as const;

export type Theme = typeof theme;

const Breakpoints = theme.breakpoints as any;
Breakpoints.lmobile = Breakpoints[0];
Breakpoints.ltablet = Breakpoints[1];
Breakpoints.desktop = Breakpoints[2];

type Breakpoints<T = string> = {
	_: T;
	lmobile: T;
	ltablet: T;
	desktop: T;
};
