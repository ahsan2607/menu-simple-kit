import { createTheme } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

const themeCustom = createTheme({
	palette: {
		primary: {
			main: '#c2195f',
			light: '#bd1e60',
			dark: '#851443',
		},
		secondary: {
			main: pink['900'],
		},
	},
});
export default themeCustom;
