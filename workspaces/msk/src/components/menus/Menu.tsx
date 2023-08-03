import { MenuContentProps } from '@api';
import { MenuElement } from './MenuElement';
import { MenuHorizontalBar } from './MenuHorizontalBar';
import { MenuList } from './MenuList';

interface MenuProps {
	data: MenuContentProps[];
	title: string;
}

export const Menu = (props: MenuProps) => {
	console.log(props.data);
	return (
		<>
			<MenuHorizontalBar categories={props.title} />
			<MenuList>
				{props.data.map((value, index) => (
					<MenuElement
						image={value.Gambar}
						title={value['Nama']}
						shortDescription={value['Deskripsi Pendek']}
						longDescription={value['Deskripsi Panjang']}
						price={value.Harga}
						key={`${value['Nama']}-${index}`}
					/>
				))}
			</MenuList>
		</>
	);
};
