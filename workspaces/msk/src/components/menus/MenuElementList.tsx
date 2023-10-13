import { Box, Card, CardMedia, Typography, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import placeholderImage from '@assets/images/placeholderImage.jpeg';
import { formatToRupiah } from '@api';
// import { Link } from 'react-router-dom';

interface MenuElementProps {
	image: string;
	title: string;
	shortDescription: string;
	longDescription: string;
	price: string;
}

export const MenuElementList = (props: MenuElementProps) => {
	const [image, setImage] = useState<string>();
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getMenuImage = async () => {
			try {
				const response = await import(
					`../../configs/menu/images/${props.image}.jpg`
				);
				setImage(response.default);
			} catch (err) {
				setImage(placeholderImage);
			} finally {
				setLoading(false);
			}
		};
		getMenuImage();
	});

	return (
		// <Link to={'/detail'} />
		<Grid
			item
			xs={12}
			sm={12}
			md={12}
			lg={12}
			xl={12}
			sx={{ margin: '10px 0 10px 0', padding: '0 4px 0 4px' }}
		>
			<Card
				component={'li'}
				sx={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				{!loading && (
					<CardMedia
						sx={{
							width: '140px',
							height: '140px',
							objectFit: 'cover',
						}}
						component={'img'}
						image={image}
						alt={props.title}
					/>
				)}
				<Box
					sx={{
						paddingRight: '8px',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-end',
					}}
				>
					<Typography fontWeight={600} fontSize={24}>
						{props.title}
					</Typography>
					<Typography>{formatToRupiah(props.price)}</Typography>
					<Typography>{props.shortDescription}</Typography>
				</Box>
			</Card>
		</Grid>
	);
};
