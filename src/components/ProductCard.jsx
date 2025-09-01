import { 
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Rating,
  Box,
  Stack
} from '@mui/material';

export const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card 
      sx={{ 
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          boxShadow: 6
        }
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={product.imageUrl}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          UMF™ {product.umf} | MGO {product.mgo}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" mb={1}>
          <Rating value={product.rating} readOnly size="small" />
          <Typography variant="body2" color="text.secondary">
            ({product.reviewCount})
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {product.description.substring(0, 100)}...
        </Typography>
        <Box sx={{ mt: 'auto' }}>
          <Typography variant="h6" gutterBottom>
            ${product.price}
          </Typography>
          <Button 
            variant="contained"
            fullWidth
            onClick={() => onAddToCart(product)}
            sx={{ 
              bgcolor: 'black',
              '&:hover': {
                bgcolor: 'grey.900'
              }
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
