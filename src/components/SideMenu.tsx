import { Box, Drawer, IconButton, Typography, List, ListItemButton, ListItemText, Divider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SideMenuProps {
  open: boolean;
  onClose: () => void;
}

export const SideMenu = ({ open, onClose }: SideMenuProps) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true // Better mobile performance
      }}
      PaperProps={{
        sx: {
          width: '85%',
          maxWidth: '320px',
          bgcolor: '#FBF9F6',
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          zIndex: 1300
        }
      }}
      sx={{
        zIndex: 1300,
        '& .MuiBackdrop-root': {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Menu
          </Typography>
          <IconButton onClick={onClose} sx={{ p: 0 }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Shop Section */}
        <Box sx={{ mb: 3 }}>
          <Typography 
            sx={{ 
              fontSize: '0.75rem', 
              fontWeight: 600, 
              color: '#666',
              mb: 1.5 
            }}
          >
            SHOP
          </Typography>
          <List disablePadding>
            {['All Products', 'Manuka Honey', 'Bundles', 'Merchandise'].map((item) => (
              <ListItemButton 
                key={item}
                sx={{ 
                  p: 0,
                  mb: 1,
                  '&:hover': {
                    bgcolor: 'transparent',
                    '& .MuiTypography-root': {
                      color: '#666'
                    }
                  }
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    m: 0,
                    '& .MuiTypography-root': {
                      fontSize: '1rem',
                      color: '#333'
                    }
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* About Section */}
        <Box sx={{ mb: 3 }}>
          <Typography 
            sx={{ 
              fontSize: '0.75rem', 
              fontWeight: 600, 
              color: '#666',
              mb: 1.5 
            }}
          >
            ABOUT
          </Typography>
          <List disablePadding>
            {['Our Story', 'Sustainability', 'Blog'].map((item) => (
              <ListItemButton 
                key={item}
                sx={{ 
                  p: 0,
                  mb: 1,
                  '&:hover': {
                    bgcolor: 'transparent',
                    '& .MuiTypography-root': {
                      color: '#666'
                    }
                  }
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    m: 0,
                    '& .MuiTypography-root': {
                      fontSize: '1rem',
                      color: '#333'
                    }
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* Support Section */}
        <Box sx={{ mb: 3 }}>
          <Typography 
            sx={{ 
              fontSize: '0.75rem', 
              fontWeight: 600, 
              color: '#666',
              mb: 1.5 
            }}
          >
            SUPPORT
          </Typography>
          <List disablePadding>
            {['FAQ', 'Contact Us', 'Shipping', 'Returns'].map((item) => (
              <ListItemButton 
                key={item}
                sx={{ 
                  p: 0,
                  mb: 1,
                  '&:hover': {
                    bgcolor: 'transparent',
                    '& .MuiTypography-root': {
                      color: '#666'
                    }
                  }
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    m: 0,
                    '& .MuiTypography-root': {
                      fontSize: '1rem',
                      color: '#333'
                    }
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* Account Section */}
        <Box sx={{ mt: 4 }}>
          <Typography 
            sx={{ 
              fontSize: '0.75rem', 
              fontWeight: 600, 
              color: '#666',
              mb: 1.5 
            }}
          >
            ACCOUNT
          </Typography>
          <List disablePadding>
            <ListItemButton 
              sx={{ 
                p: 0,
                mb: 1,
                '&:hover': {
                  bgcolor: 'transparent',
                  '& .MuiTypography-root': {
                    color: '#666'
                  }
                }
              }}
            >
              <ListItemText
                primary="Sign In / Register"
                sx={{
                  m: 0,
                  '& .MuiTypography-root': {
                    fontSize: '1rem',
                    color: '#333'
                  }
                }}
              />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};
