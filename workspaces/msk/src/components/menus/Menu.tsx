import * as React from 'react';
import { Accordion, AccordionDetails } from '@mui/material';
import { MenuContentProps } from '@api';
import { MenuElementGrid } from './MenuElementGrid';
import { MenuElementList } from './MenuElementList';
import { MenuHorizontalBar } from './MenuHorizontalBar';
import { MenuList } from './MenuList';

interface MenuProps {
	data: MenuContentProps[];
	disp: number;
	title: string;
}

export const Menu = (props: MenuProps) => {
	const [expanded, setExpanded] = React.useState<string | false>('panel1');

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};
	return (
		<>
			<Accordion
				expanded={expanded === 'panel1'}
				onChange={handleChange('panel1')}
				sx={{ borderRadius: '10px' }}
			>
				<MenuHorizontalBar categories={props.title} />
				<AccordionDetails>
					<MenuList>
						{props.data.map((value, index) => {
							if (props.disp === 0) {
								return (
									<MenuElementGrid
										image={value.Gambar}
										title={value['Nama']}
										shortDescription={value['Deskripsi Pendek']}
										longDescription={value['Deskripsi Panjang']}
										price={value.Harga}
										key={`${value['Nama']}-${index}`}
									/>
								);
							} else {
								return (
									<MenuElementList
										image={value.Gambar}
										title={value['Nama']}
										shortDescription={value['Deskripsi Pendek']}
										longDescription={value['Deskripsi Panjang']}
										price={value.Harga}
										key={`${value['Nama']}-${index}`}
									/>
								);
							}
						})}
					</MenuList>
				</AccordionDetails>
			</Accordion>
		</>
	);
};
