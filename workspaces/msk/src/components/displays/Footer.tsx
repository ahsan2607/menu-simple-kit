import { AppBar, Box, Toolbar, Button } from '@mui/material';

export const Footer = () => {
	return (
		<>
			<AppBar
				sx={{
					zIndex: 1,
					color: 'primary',
					position: 'fixed',
					top: 'auto',
					bottom: 0,
				}}
			>
				<Toolbar
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Box>
						|<Button sx={{ color: 'white' }}>Order</Button>|
						<Button sx={{ color: 'white' }}>Bill</Button>|
						<Button sx={{ color: 'white' }}>Help</Button>|
					</Box>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
};
