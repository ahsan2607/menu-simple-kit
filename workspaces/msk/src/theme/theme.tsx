import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const themeCustom = createTheme({
	palette: {
		primary: {
			main: pink['A700'],
		},
		secondary: {
			main: pink['900'],
		},
	},
});
export default themeCustom;
