import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  IconButton, 
  Badge,
  Stack,
  styled
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store';
import { toggleCart } from '../store/cartSlice';
import Logo from '../assets/Logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  background: 'white',
  color: 'black'
});

const NavButton = styled(Button)({
  color: 'black',
  textTransform: 'none',
  fontSize: '1rem',
  '&:hover': {
    background: 'transparent',
    color: '#666'
  }
});

export const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartItemCount = cartItems.reduce((sum: number, item) => sum + item.quantity, 0);

  const handleCartClick = () => {
    dispatch(toggleCart());
  };

  return (
    <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid #eee' }}>
      <StyledToolbar>
        {/* Left Navigation */}
        <Stack direction="row" spacing={3}>
          <NavButton>Shop</NavButton>
          <NavButton>Explore</NavButton>
        </Stack>

        {/* Logo */}
        <Box 
          component="img"
          src={Logo}
          alt="New Zealand Honey Co."
          sx={{ height: 45, cursor: 'pointer' }}
        />

        {/* Right Navigation */}
        <Stack direction="row" spacing={2} alignItems="center">
          <NavButton>About</NavButton>
          <NavButton>Rewards</NavButton>
          <NavButton>Contact</NavButton>
          <IconButton>
            <PersonOutlineIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton onClick={handleCartClick}>
            <Badge badgeContent={cartItemCount} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Stack>
      </StyledToolbar>
    </AppBar>
  );
};
