import office from 'assets/images/office.png';
import team from 'assets/images/team.png';


export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
	office,
	team,
};
