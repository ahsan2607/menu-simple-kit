import { Box, Typography } from '@mui/material';
import { Image } from 'mui-image';
import { useEffect, useState } from 'react';
import defaultLogo from '@assets/images/msk.png';
import settings from '@configs/settings.yaml';

interface HeroProps {
	logo?: string;
	logoHeight?: number;
	logoWidth?: number;
	backgroundImage?: string;
	backgroundPosition?: string;
	color?: string;
	backgroundColor?: string;
	marginBottom?: string;
}

export const Hero = (props: HeroProps) => {
	const [image, setImage] = useState<string>();
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const response = await import(`../../configs/logo/${props.logo}.png`); // change relative path to suit your needs
				setImage(response.default);
			} catch (err) {
				setImage(defaultLogo);
			} finally {
				setLoading(false);
			}
		};

		fetchImage();
	}, [props.logo]);

	if (image)
		return (
			<Box
				sx={{
					backgroundColor: props.backgroundColor ?? 'grey.800',
					color: props.color ?? 'white',
					display: 'flex',
					flexDirection: 'column',
					minHeight: '500px',
					alignItems: 'center',
					justifyContent: 'center',
					mb: props.marginBottom ?? 4,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: props.backgroundPosition ?? 'center',
					backgroundImage: `url(${props.backgroundImage})`,
					padding: '80px 0 80px 0',
				}}
			>
				<Image
					showLoading={loading}
					width={props.logoWidth ?? '150px'}
					height={props.logoHeight ?? '150px'}
					src={image}
					alt={`${settings.namaRestoran}-logo`}
				/>
				<Box>
					<Typography component="h2" variant="h1" align="center">
						{settings.namaRestoran}
					</Typography>
					<Typography component="h2" variant="h3" align="center">
						{settings.detailRestoran}
					</Typography>
				</Box>
			</Box>
		);
	return null;
};
