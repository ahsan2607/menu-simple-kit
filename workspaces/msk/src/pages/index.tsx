import { IconButton, Box } from '@mui/material';
import { GridViewSharp } from '@mui/icons-material';
import { List } from '@mui/icons-material';
import { useAtomValue } from 'jotai';
import { useState } from 'react';
// import axios from 'axios';
import { BaseLayout } from '@layouts';
import { menuAtom } from '@store';
import { Menu, UptoTop } from '@components';
import { jsonServer } from '@api';

export default function Home() {
	const menu = useAtomValue(menuAtom);
	const [disp, setDisp] = useState(0);

	if (menu) {
		return (
			<BaseLayout>
				<UptoTop />
				<IconButton
					onClick={() => {
						disp === 0 ? setDisp(1) : setDisp(0);
					}}
					sx={{
						backgroundColor: 'primary.main',
					}}
				>
					{disp === 1 ? (
						<GridViewSharp sx={{ color: 'white' }} />
					) : (
						<List sx={{ color: 'white' }} />
					)}
				</IconButton>
				{Object.keys(menu).map((value, index) => {
					return (
						<Menu
							disp={disp}
							data={menu[value]}
							title={Object.keys(menu)[index]}
							key={`${menu[index]}-${index}`}
						/>
					);
				})}
				<Box sx={{ height: '36px' }} />
			</BaseLayout>
		);
	}
	return null;
}
