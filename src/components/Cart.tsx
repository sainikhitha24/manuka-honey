import { useCallback } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Stack,
  Button,
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import type { CartItem } from '../types/product';
import { removeItem, updateQuantity, closeCart } from '../store/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  const { items, isOpen } = useSelector((state: RootState) => state.cart);

  const handleClose = () => {
    dispatch(closeCart());
  };

  const handleUpdateQuantity = useCallback((id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  }, [dispatch]);

  const handleRemoveItem = useCallback((id: string) => {
    dispatch(removeItem(id));
  }, [dispatch]);

  const subtotal = items.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        sx: { width: { xs: '100%', sm: 400 } }
      }}
    >
      <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h6">Shopping Cart</Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Stack>

        {/* Cart Items */}
        <Box sx={{ flex: 1, overflow: 'auto' }}>
          {items.length === 0 ? (
            <Typography color="text.secondary" textAlign="center" mt={4}>
              Your cart is empty
            </Typography>
          ) : (
            <Stack spacing={3}>
              {items.map((item) => (
                <Box key={item.id}>
                  <Stack direction="row" spacing={2}>
                    <Box
                      component="img"
                      src={item.imageUrl}
                      alt={item.name}
                      sx={{
                        width: 80,
                        height: 80,
                        objectFit: 'cover',
                        borderRadius: 1
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="subtitle1">{item.name}</Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        UMF™ {item.umf} | MGO {item.mgo}
                      </Typography>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <IconButton
                          size="small"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <RemoveIcon fontSize="small" />
                        </IconButton>
                        <Typography>{item.quantity}</Typography>
                        <IconButton
                          size="small"
                          onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          <AddIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                          size="small"
                          onClick={() => handleRemoveItem(item.id)}
                          sx={{ ml: 'auto' }}
                        >
                          <DeleteOutlineIcon fontSize="small" />
                        </IconButton>
                      </Stack>
                    </Box>
                    <Typography variant="subtitle1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Stack>
                  <Divider sx={{ mt: 2 }} />
                </Box>
              ))}
            </Stack>
          )}
        </Box>

        {/* Footer */}
        <Box sx={{ pt: 2 }}>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="subtitle1">Subtotal</Typography>
              <Typography variant="subtitle1">${subtotal.toFixed(2)} USD</Typography>
            </Stack>
            <Button
              variant="contained"
              size="large"
              disabled={items.length === 0}
              sx={{
                bgcolor: 'black',
                '&:hover': { bgcolor: '#333' },
                '&.Mui-disabled': { bgcolor: '#ccc' }
              }}
            >
              Checkout
            </Button>
          </Stack>
        </Box>
      </Box>
    </Drawer>
  );
};
