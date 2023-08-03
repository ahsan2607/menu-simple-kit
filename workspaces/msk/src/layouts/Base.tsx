import { Container } from '@mui/material';
import { Hero } from '@components';

export type BaseLayoutProps = {
	children: React.ReactNode;
};

export const BaseLayout = (props: BaseLayoutProps) => {
	return (
		<>
			<Hero backgroundColor="rgb(80,0,40)" />
			<Container>{props.children}</Container>
		</>
	);
};
