import { AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface MenuHorizontalBarProps {
	categories: string;
}

export const MenuHorizontalBar = (props: MenuHorizontalBarProps) => {
	return (
		<AccordionSummary
			expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
			aria-controls="panel1bh-content"
			id="panel1bh-header"
			sx={{
				margin: '20px 0 0 0',
				padding: '0px 3rem 0px 3rem',
				borderRadius: '10px',
				backgroundColor: 'primary.main',
			}}
		>
			<Typography sx={{ color: 'white', fontWeight: '500', fontSize: '100' }}>
				{props.categories}
			</Typography>
		</AccordionSummary>
	);
};
