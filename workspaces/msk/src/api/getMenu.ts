import menu from '@configs/menu/list.xlsx?sheetjs';
import settings from '@configs/settings.yaml';

export interface MenuContentProps {
	Nama: string;
	'Deskripsi Pendek': string;
	'Deskripsi Panjang': string;
	Harga: string;
	Gambar: string;
}

export const formatToRupiah = (price: string) => {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		maximumFractionDigits: 0,
	}).format(Number(price));
};

export const getMenu = () => {
	if (settings.useLocal) {
		return menu as Record<string, MenuContentProps[]>;
	}
};
