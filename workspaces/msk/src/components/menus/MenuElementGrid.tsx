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

export const MenuElementGrid = (props: MenuElementProps) => {
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
		<Grid
			item
			xs={6}
			sm={4}
			md={4}
			lg={3}
			xl={3}
			sx={{ margin: '10px 0 10px 0', padding: '0 4px 0 4px' }}
		>
			<Card
				component={'li'}
				sx={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					listStyle: 'none',
					padding: '8px',
				}}
			>
				{!loading && (
					<CardMedia
						sx={{
							width: '100%',
							height: '140px',
							borderRadius: '5px',
							objectFit: 'cover',
						}}
						component={'img'}
						image={image}
						alt={props.title}
					/>
				)}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						color: 'black',
						padding: '10px 0 7.5px 0',
					}}
				>
					<Typography fontWeight={600} fontSize={24}>
						{props.title}
					</Typography>
					<Typography>{formatToRupiah(props.price)}</Typography>
					<Typography>{props.shortDescription}</Typography>
				</Box>
				{/* <Link to={'/detail'}>
					<Button variant="contained" color="secondary">
						Pesan
					</Button>
				</Link> */}
			</Card>
		</Grid>
	);
};
