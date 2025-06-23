import React from 'react';
import Link from 'next/link';
import { Product } from '../../services/productService';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Stack,
    Chip,
    Button,
} from '@mui/material';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Card key={`ProductId-${product.id}`}>
            <Link href={`/product/${product.id}`}>
                <CardMedia
                    component="img"
                    height="250"
                    image={product.image}
                    title={product.title}
                    sx={{
                        padding: '1rem',
                    }}
                />
            </Link>
            <CardContent sx={{ height: '100%' }}>
                <Link href={`/product/${product.id}`}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        component="div"
                        align='justify'
                        color="var(--primary)"
                        textTransform={'uppercase'}
                        fontWeight={'var(--font-weight-stronger)'}
                        fontSize={'.875rem'}
                        overflow={'hidden'}
                        textOverflow={'ellipsis'}
                        display={'-webkit-box'}
                        sx={{
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                        }}
                    >
                        {product.title}
                    </Typography>


                    <Typography
                        variant="body2"
                        color="text.secondary"
                        align='justify'
                        overflow={'hidden'}
                        textOverflow={'ellipsis'}
                        display={'-webkit-box'}
                        sx={{
                            WebkitLineClamp: "3",
                            WebkitBoxOrient: "vertical",
                        }}>
                        {product.description}
                    </Typography>
                    <Stack direction="row" justifyContent={'space-between'} spacing={1} padding={1}>
                        <Chip label={product.category} color="primary" variant="outlined" />
                        <Typography variant="h6" color="text.primary" >
                            {product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                        </Typography>
                    </Stack>
                </Link>
                <Button fullWidth size="medium" variant="outlined" href={`/product/${product.id}`}>VER PRODUTO</Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
