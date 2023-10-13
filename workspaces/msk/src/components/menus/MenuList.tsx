import { ReactNode } from 'react';
import { Grid } from '@mui/material';

interface MenuListProps {
	children: ReactNode;
}

export const MenuList = (props: MenuListProps) => {
	return <Grid container>{props.children}</Grid>;
};
