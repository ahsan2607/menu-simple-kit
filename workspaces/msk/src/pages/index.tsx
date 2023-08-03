import { BaseLayout } from '@layouts';
import { useAtomValue } from 'jotai';
import { menuAtom } from '@store';
import { Menu } from '@components';

export default function Home() {
	const menu = useAtomValue(menuAtom);

	if (menu) {
		return (
			<BaseLayout>
				{Object.keys(menu).map((value, index) => {
					return (
						<Menu
							data={menu[value]}
							title={Object.keys(menu)[index]}
							key={`${menu[index]}-${index}`}
						/>
					);
				})}
			</BaseLayout>
		);
	}
	return null;
}
