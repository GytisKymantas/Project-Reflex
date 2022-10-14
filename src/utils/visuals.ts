import office from 'assets/images/office.png';
import team from 'assets/images/team.png';
import teamMobile from 'assets/images/teamMobile.png';

export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
	office,
	team,
	teamMobile,
};
