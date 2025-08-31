import {
  Popover,
  Button,
  Typography,
  Box,
  Paper
} from '@mui/material';

interface InfoModalProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

export const InfoModal = ({ open, anchorEl, onClose }: InfoModalProps) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      elevation={2}
      sx={{
        '& .MuiPaper-root': {
          maxWidth: 400,
          p: 3,
          bgcolor: '#ffffffff'
        }
      }}
    >
      {/* UMF Section */}
      <Box sx={{ mb: 3, bgcolor: '#f1f1f1', p: 2, borderRadius: 1 }}>
        <Typography sx={{ mb: 1, fontWeight: 500 }}>
          UMF is the strength and purity rating of Manuka honey.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          {['10+', '15+', '20+', '24+', '26+', '28+', '30+'].map((value, index) => (
            <Box key={value} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ 
                width: '100%', 
                height: 4,
                bgcolor: index === 0 ? '#FF8C00' :
                        index === 1 ? '#FF0000' :
                        index === 2 ? '#FF1493' :
                        index === 3 ? '#800080' :
                        index === 4 ? '#0000FF' :
                        index === 5 ? '#008000' :
                        '#000080'
              }} />
              <Typography sx={{ fontSize: '0.75rem', mt: 0.5 }}>
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
          The higher the number, the greater the potency and rarity of Manuka honey.
        </Typography>
      </Box>

      {/* MGO Section */}
      <Box sx={{ bgcolor: '#f1f1f1', p: 2, borderRadius: 1 }}>
        <Typography sx={{ mb: 1, fontWeight: 500 }}>
          MGO is the key natural compound that gives Manuka honey its special antibacterial strength.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          {['263+', '514+', '829+', '1122+', '1282+', '1450+', '1620+'].map((value, index) => (
            <Box key={value} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{ 
                width: '100%', 
                height: 4,
                bgcolor: index === 0 ? '#FFA500' :
                        index === 1 ? '#FF0000' :
                        index === 2 ? '#FF1493' :
                        index === 3 ? '#800080' :
                        index === 4 ? '#0000FF' :
                        index === 5 ? '#008000' :
                        '#000080'
              }} />
              <Typography sx={{ fontSize: '0.75rem', mt: 0.5 }}>
                {value}
              </Typography>
            </Box>
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
          The higher the number, the higher the antibacterial properties in the honey.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button 
          onClick={onClose}
          sx={{ 
            color: '#000',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.04)'
            }
          }}
        >
          Close
        </Button>
      </Box>
    </Popover>
  );
};
