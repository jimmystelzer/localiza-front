import { Box, Breadcrumbs, Button, Card, CardContent, CardHeader, CardMedia, Chip, Grid, Link, Stack, Typography } from '@mui/material';
import React from 'react';

interface ProductProps {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const Product: React.FC<ProductProps> = ({ id, title, description, category, price, image }) => {
    return (
        <Grid margin={3}>
            <div className="headline_container headline">
                <div>
                    Informações detalhadas
                </div>
            </div>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Typography sx={{ color: 'text.primary' }}>Home</Typography>
                <Link underline="hover" color="inherit" href="/">
                    Produtos
                </Link>
                <Typography sx={{ color: 'text.primary' }}>Produto</Typography>
                <Link underline="hover" color="inherit" href={`/product/${id}`}>
                    {title}
                </Link>
            </Breadcrumbs>

            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(min(500px, 100%), 1fr))',
                    gap: 2,
                }}
                marginTop={4}
            >
                <Card>
                    <CardHeader title={title} subheader={category} />
                    <CardMedia
                        component="img"
                        height="600"
                        image={image}
                        alt={title}
                    />
                    <CardContent>
                        <Box display={'flex'} flexWrap={'wrap'} gap={2}>
                            <Button variant="contained" fullWidth size='large' href='#'>Quero esse produto</Button>
                            <Button variant="outlined" fullWidth size='large' href="/">Quero ver outros</Button>
                        </Box>
                    </CardContent>
                </Card>
                <Box padding={4}>
                    <Stack direction="row" justifyContent={'space-between'} spacing={1} padding={1}>
                        <Chip label={category} color="primary" variant="outlined" />
                        <Typography variant="h5" color="text.primary" >
                            {price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                        </Typography>
                    </Stack>
                    <Typography variant="body1" color="var(--primary)" marginTop={5}>
                        {description}
                    </Typography>
                </Box>

            </Box>
        </Grid>
    );
};

export default Product;
