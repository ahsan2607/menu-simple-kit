import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import themeCustom from './theme/theme';

import '@assets/fonts/roboto';

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<CssBaseline />
		<ThemeProvider theme={themeCustom}>
			{/* <Router> */}
			<App />
			{/* </Router> */}
		</ThemeProvider>
	</StrictMode>
);
