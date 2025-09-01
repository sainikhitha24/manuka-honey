import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  IconButton, 
  Badge,
  Typography,
  styled
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/cartSlice';
import Logo from '../assets/Logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';

export const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid #eee' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem' }}>
        {/* Left Navigation */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Button
            variant="outlined"
            sx={{
              border: '1px solid #000',
              color: '#000',
              borderRadius: '50px',
              padding: '8px 20px',
              textTransform: 'none',
              whiteSpace: 'nowrap',
              '&:hover': {
                border: '1px solid #666',
                color: '#666',
                backgroundColor: 'transparent'
              },
            }}
          >
            WHICH MANUKA IS FOR ME?
          </Button>
          <Link to="/shop" style={{ textDecoration: 'none' }}>
            <Typography sx={{ color: '#000', '&:hover': { color: '#666' } }}>
              Shop
            </Typography>
          </Link>
          <Link to="/explore" style={{ textDecoration: 'none' }}>
            <Typography sx={{ color: '#000', '&:hover': { color: '#666' } }}>
              Explore
            </Typography>
          </Link>
        </Box>

        {/* Center - Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/">
            <img src={Logo} alt="New Zealand Honey Co." style={{ height: '60px' }} />
          </Link>
        </Box>

        {/* Right Navigation */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Typography sx={{ color: '#000', '&:hover': { color: '#666' } }}>
              About
            </Typography>
          </Link>
          <Link to="/rewards" style={{ textDecoration: 'none' }}>
            <Typography sx={{ color: '#000', '&:hover': { color: '#666' } }}>
              Rewards
            </Typography>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Typography sx={{ color: '#000', '&:hover': { color: '#666' } }}>
              Contact
            </Typography>
          </Link>
          <IconButton>
            <PersonOutlineIcon sx={{ color: '#000' }} />
          </IconButton>
          <IconButton>
            <SearchIcon sx={{ color: '#000' }} />
          </IconButton>
          <IconButton onClick={handleCartClick}>
            <Badge badgeContent={cartItemCount} color="primary">
              <ShoppingCartIcon sx={{ color: '#000' }} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
