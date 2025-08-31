import { 
  Box, 
  Typography, 
  Rating, 
  Button, 
  Container,
  Stack,
  IconButton,
  Select,
  MenuItem,
  Breadcrumbs,
  Link,
  useTheme,
  useMediaQuery
} from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import type { Product } from '../types/product';
import slider0 from '../assets/slider0.png';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.png';
import slider5 from '../assets/slider5.png';
import slider6 from '../assets/slider6.png';
import slider7 from '../assets/slider7.png';
import ImageBackground from '../assets/ImageBackground.png';
import bundle1 from '../assets/bundle1.png';
import bundle2 from '../assets/bundle2.png';
import bundle3 from '../assets/bundle3.png';
import colourclublogo from '../assets/colourclublogo.png';
import { InfoModal } from '../components/InfoModal';
import { SideMenu } from '../components/SideMenu';
import { useState } from 'react';

interface Bundle {
  id: number;
  name: string;
  image: string;
  items: {
    name: string;
    size?: string;
  }[];
}

const bundles: Bundle[] = [
  {
    id: 1,
    name: 'Beauty Bundle',
    image: bundle1,
    items: [
      { name: 'UMF 20+', size: '250g' },
      { name: 'UMF 24+', size: '250g' },
      { name: 'Wooden Spoon' }
    ]
  },
  {
    id: 2,
    name: 'Premium Bundle',
    image: bundle2,
    items: [
      { name: 'UMF 20+', size: '250g' },
      { name: 'UMF 24+', size: '250g' },
      { name: 'Wooden Spoon' }
    ]
  },
  {
    id: 3,
    name: 'Family Bundle',
    image: bundle3,
    items: [
      { name: 'UMF 20+', size: '250g' },
      { name: 'UMF 24+', size: '250g' },
      { name: 'Wooden Spoon' }
    ]
  }
];

const ProductDetail = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [currentBundleIndex, setCurrentBundleIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prev => Math.max(1, prev - 1));
  };

  const handleNextBundle = () => {
    setCurrentBundleIndex((prev) => (prev + 1) % bundles.length);
  };

  const handlePrevBundle = () => {
    setCurrentBundleIndex((prev) => (prev - 1 + bundles.length) % bundles.length);
  };

  const currentBundle = bundles[currentBundleIndex];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderImages = [slider0, slider1, slider2, slider3, slider4, slider5, slider6, slider7];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const product: Product = {
    id: '1',
    name: 'Manuka Honey',
    umf: '24+',
    mgo: '1122+',
    price: 149.99,
    rating: 5,
    reviewCount: 425,
    description: 'For those times in life when quality comes first. This pure UMF™ 24+ Manuka Honey is powerfully active, sourced from wild and rugged locations around Aotearoa New Zealand and great for almost all uses. It has a full, delicious flavour and your body will love you for it.',
    imageUrl: sliderImages[currentImageIndex],
    category: 'premium'
  };

  return (
    <Box sx={{ minHeight: '100vh', width: '100%' }}>
      <SideMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {isMobile && (
        <Box sx={{ 
          px: 2, 
          py: 1.5, 
          borderBottom: '1px solid #eee',
          bgcolor: 'white'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <IconButton 
              onClick={handleMenuClick}
              sx={{ p: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
              Manuka Honey
            </Typography>
          </Box>
          <Box 
            onClick={handleMenuClick}
            sx={{ cursor: 'pointer' }}
          >
            <Breadcrumbs
              separator="›"
              aria-label="breadcrumb"
              sx={{
                '& .MuiBreadcrumbs-separator': {
                  mx: 1,
                  color: '#666'
                }
              }}
            >
              <Link
                component="span"
                sx={{ 
                  fontSize: '0.875rem',
                  color: '#666',
                  textDecoration: 'none'
                }}
              >
                Home
              </Link>
              <Link
                component="span"
                sx={{ 
                  fontSize: '0.875rem',
                  color: '#666',
                  textDecoration: 'none'
                }}
              >
                Shop
              </Link>
              <Typography 
                sx={{ 
                  fontSize: '0.875rem',
                  color: '#333'
                }}
              >
                Manuka Honey UMF™ 24+
              </Typography>
            </Breadcrumbs>
          </Box>
        </Box>
      )}
      <Container maxWidth="lg" sx={{ pt: { xs: 2, md: 8 }, pb: 4 }}>
        <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gap={2}>
        {/* Left Column - Product Image */}
        <Box>
          <Box sx={{ 
            border: '1px solid #00A651',
            borderRadius: 1,
            bgcolor: '#FBF9F6',
            position: 'relative',
            aspectRatio: '1/1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
            ...(currentImageIndex === 0 && {
              backgroundImage: `url(${ImageBackground})`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            })
          }}>
            <IconButton 
              onClick={handlePrevImage}
              sx={{ 
                position: 'absolute', 
                left: 2, 
                top: '50%',
                transform: 'translateY(-50%)',
                bgcolor: 'white',
                boxShadow: 1,
                '&:hover': { bgcolor: 'white' }
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>
            <Box 
              component="img"
              src={product.imageUrl}
              alt={product.name}
              sx={{ 
                width: '90%',
                height: '90%',
                objectFit: 'contain',
                filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.1))'
              }}
            />
            <IconButton 
              onClick={handleNextImage}
              sx={{ 
                position: 'absolute', 
                right: 2,
                top: '50%',
                transform: 'translateY(-50%)', 
                bgcolor: 'white',
                boxShadow: 1,
                '&:hover': { bgcolor: 'white' }
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
          
          {/* Image Preview Grid */}
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            columnGap: 0.25,
            rowGap: 0.25,
            mt: 0.25,
            px: 0
          }}>
            {sliderImages.slice(1).map((image, index) => (
              <Box
                key={index + 1}
                onClick={() => setCurrentImageIndex(index + 1)}
                sx={{
                  width: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  opacity: currentImageIndex === index + 1 ? 1 : 0.7,
                  '&:hover': {
                    opacity: 1
                  }
                }}
              >
                <Box
                  component="img"
                  src={image}
                  alt={`Preview ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    backgroundColor: '#FBF9F6'
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right Column - Product Details */}
        <Box>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Product Title */}
            <Typography 
              variant="h1"
              sx={{ 
                fontSize: '2.5rem',
                fontWeight: 400,
                color: '#333',
                mb: 2,
                alignSelf: 'flex-start'
              }}
            >
              {product.name}
            </Typography>

            {/* UMF and MGO */}
            <Box sx={{ mb: 2 }}>
              <Typography 
                variant="h2"
                sx={{ 
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: '#333',
                  mb: 1
                }}
              >
                UMF™ {product.umf}
              </Typography>
              <Typography 
                variant="h2"
                sx={{ 
                  fontSize: '2rem',
                  fontWeight: 400,
                  color: '#333',
                  mb: 1
                }}
              >
                MGO {product.mgo}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Button
                  startIcon={<InfoOutlinedIcon />}
                  onClick={(event) => {
                    setAnchorEl(event.currentTarget);
                    setInfoModalOpen(true);
                  }}
                  sx={{
                    bgcolor: '#f5f5f5',
                    color: '#666',
                    textTransform: 'none',
                    fontSize: '0.875rem',
                    '&:hover': {
                      bgcolor: '#e0e0e0'
                    }
                  }}
                >
                  What is UMF and MGO?
                </Button>
              </Box>

              <InfoModal 
                open={infoModalOpen}
                anchorEl={anchorEl}
                onClose={() => {
                  setInfoModalOpen(false);
                  setAnchorEl(null);
                }}
              />
            </Box>

            <Typography 
              sx={{ 
                fontSize: '1.1rem',
                color: '#666',
                mb: 2,
                alignSelf: 'start'
              }}
            >
              The Optimiser
            </Typography>

            {/* Reviews */}
            <Box sx={{ mb: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Rating 
                  value={product.rating} 
                  readOnly 
                  sx={{ color: '#FFB800', alignSelf: 'flex-end' }}
                />
                <Typography 
                  sx={{ 
                    color: '#666',
                    fontSize: '0.875rem'
                  }}
                >
                  {product.reviewCount} REVIEWS
                </Typography>
              </Stack>
            </Box>

            <Typography 
              sx={{ 
                color: '#333',
                lineHeight: 1.8,
                mb: 4,
                textAlign: '-webkit-left'
              }}
            >
              {product.description}
            </Typography>

            <Box sx={{ mt: 'auto', justifyContent: 'flex-start' }}>
              <Typography 
                sx={{ 
                  color: '#666',
                  mb: 1,
                  fontSize: '0.75rem',
                }}
              >
                PAYMENT OPTIONS (SELECT ONE)
              </Typography>
              <Box
                sx={{
                  bgcolor: '#f7f7f7',
                  p: 2,
                  borderRadius: 1,
                  mb: 3
                }}
              >
                <Stack 
                  direction="row" 
                  spacing={2}
                  sx={{ mb: 2 }}
                >
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: '#FFB800',
                      color: 'white',
                      textTransform: 'none',
                      flexDirection: 'column',
                      py: 1,
                      borderRadius: '30px',
                      '&:hover': { 
                        bgcolor: '#F5B000'
                      }
                    }}
                  >
                    <Typography sx={{ mb: 0.25, fontSize: '0.9rem' }}>One-time purchase</Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>$55.88 USD</Typography>
                  </Button>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ 
                      color: '#333',
                      textTransform: 'none',
                      bgcolor: 'white',
                      flexDirection: 'column',
                      py: 1,
                      borderRadius: '30px',
                      boxShadow: 'none',
                      border: '1px solid #ddd',
                      '&:hover': {
                        bgcolor: 'white',
                        borderColor: '#999',
                        boxShadow: 'none'
                      }
                    }}
                  >
                    <Typography sx={{ mb: 0.25, fontSize: '0.9rem' }}>Subscribe & save</Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>$44.70 USD</Typography>
                  </Button>
                </Stack>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <Button
                    startIcon={<InfoOutlinedIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      color: '#666',
                      textTransform: 'none',
                      fontSize: '0.8rem',
                      p: 0,
                      minWidth: 'auto',
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: '#333'
                      }
                    }}
                  >
                    What is a Subscription?
                  </Button>
                </Box>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography 
                  sx={{ 
                    color: '#666',
                    mb: 1,
                    fontSize: '0.75rem',
                    textAlign: 'left'
                  }}
                >
                  SELECT QUANTITY
                </Typography>
                <Box sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center'
                }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    bgcolor: '#F5B000',
                    borderRadius: '30px',
                    width: '140px',
                    py: 1,
                    px: 2
                  }}>
                    <Button
                      onClick={handleDecreaseQuantity}
                      disabled={quantity <= 1}
                      sx={{ 
                        minWidth: 'auto',
                        p: 0,
                        color: 'white',
                        '&.Mui-disabled': {
                          color: 'rgba(255, 255, 255, 0.5)'
                        }
                      }}
                    >
                      -
                    </Button>
                    <Typography sx={{ color: 'white', fontWeight: 500 }}>
                      {quantity}
                    </Typography>
                    <Button
                      onClick={handleIncreaseQuantity}
                      sx={{ 
                        minWidth: 'auto',
                        p: 0,
                        color: 'white'
                      }}
                    >
                      +
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: 'black',
                      color: 'white',
                      borderRadius: '30px',
                      py: 1.5,
                      flexGrow: 1,
                      '&:hover': { 
                        bgcolor: '#333'
                      }
                    }}
                  >
                    ADD TO CART
                  </Button>
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Box sx={{ 
                  bgcolor: '#f7f7f7',
                  p: 2,
                  borderRadius: 1
                }}>
                  {/* Bundle Navigation */}
                  <Box sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 2
                  }}>
                    <ArrowBackIosNewIcon 
                      sx={{ 
                        fontSize: 16,
                        color: '#666',
                        cursor: 'pointer'
                      }}
                      onClick={handlePrevBundle}
                    />
                    <Typography sx={{ 
                      color: '#333',
                      fontSize: '0.9rem'
                    }}>
                      {currentBundle.name}
                    </Typography>
                    <ArrowForwardIosIcon 
                      sx={{ 
                        fontSize: 16,
                        color: '#666',
                        cursor: 'pointer'
                      }}
                      onClick={handleNextBundle}
                    />
                  </Box>

                  {/* Bundle Content Container */}
                  <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 4
                  }}>
                    {/* Bundle Items */}
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4
                    }}>
                      {currentBundle.items.map((item, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            position: 'relative'
                          }}
                        >
                          <Box
                            component="img"
                            src={index === 0 ? bundle1 : index === 1 ? bundle2 : bundle3}
                            alt={item.name}
                            sx={{ 
                              width: 80,
                              height: 80,
                              objectFit: 'contain',
                              mb: 1,
                              bgcolor: 'white',
                              p: 1,
                              borderRadius: 2
                            }}
                          />
                          <Typography sx={{ 
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            mb: 0.5
                          }}>
                            {item.name}
                          </Typography>
                          {item.size && (
                            <Select
                              value={item.size}
                              onChange={() => {}}
                              size="small"
                              sx={{
                                minWidth: '80px',
                                height: '32px',
                                '.MuiOutlinedInput-notchedOutline': {
                                  borderColor: '#ddd'
                                },
                                '.MuiSelect-select': {
                                  py: 0.5,
                                  fontSize: '0.75rem'
                                }
                              }}
                            >
                              <MenuItem value="250g">250g</MenuItem>
                              <MenuItem value="500g">500g</MenuItem>
                            </Select>
                          )}
                          {index < currentBundle.items.length - 1 && (
                            <Box
                              sx={{
                                position: 'absolute',
                                right: '-2rem',
                                top: '40%',
                                transform: 'translateY(-50%)',
                                width: '24px',
                                height: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <Typography sx={{ 
                                fontSize: '1.5rem',
                                color: '#666',
                                lineHeight: 1
                              }}>
                                +
                              </Typography>
                            </Box>
                          )}
                        </Box>
                      ))}
                    </Box>

                    {/* Price and Add to Cart */}
                    <Box sx={{ 
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 1,
                      minWidth: '200px'
                    }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography 
                          sx={{ 
                            textDecoration: 'line-through',
                            color: '#666',
                            fontSize: '0.875rem'
                          }}
                        >
                          $478.75 USD
                        </Typography>
                        <Typography sx={{ 
                          fontSize: '1rem',
                          fontWeight: 500
                        }}>
                          $430.88 USD
                        </Typography>
                        <Typography 
                          sx={{ 
                            color: '#00A651',
                            fontSize: '0.75rem',
                            fontWeight: 500
                          }}
                        >
                          Save 10%
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          bgcolor: '#333',
                          color: 'white',
                          '&:hover': { bgcolor: '#000' },
                          textTransform: 'none',
                          py: 1.5,
                          borderRadius: '30px',
                          fontSize: '0.875rem'
                        }}
                      >
                        ADD BUNDLE TO CART
                      </Button>
                    </Box>
                  </Box>
                </Box>
                </Box>

                {/* Additional Info Section */}
                <Box sx={{ mt: 4 }}>
                  {/* Colourclub Points */}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1.5,
                    mb: 4
                  }}>
                    <Box
                      component="img"
                      src={colourclublogo}
                      alt="Colourclub"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 0.5 }}>
                      <Typography sx={{ fontSize: '0.875rem', color: '#333' }}>
                        Colourclub members earn up to
                      </Typography>
                      <Typography sx={{ 
                        color: '#F5B000', 
                        fontWeight: 600,
                        fontSize: '1.125rem',
                        mx: 0.5
                      }}>
                        56
                      </Typography>
                      <Typography sx={{ fontSize: '0.875rem', color: '#333' }}>
                        reward points when buy this item.
                      </Typography>
                      <Typography 
                        sx={{ 
                          fontSize: '0.875rem',
                          color: '#333',
                          textDecoration: 'underline', 
                          cursor: 'pointer',
                          '&:hover': { color: '#666' },
                          ml: 0.5
                        }}
                      >
                        Sign up or log in
                      </Typography>
                    </Box>
                  </Box>

                  {/* Delivery Information */}
                  <Box sx={{ mb: 4 }}>
                    <Typography sx={{ 
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      mb: 1.5,
                      color: '#333'
                    }}>
                      DELIVERY
                    </Typography>
                    <Box>
                      <Typography sx={{ 
                        fontSize: '0.875rem',
                        color: '#333',
                        mb: 1
                      }}>
                        FREE DELIVERY ON ORDERS OVER $30
                      </Typography>
                      <Box sx={{ 
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 1
                      }}>
                        <Typography sx={{ 
                          fontSize: '0.875rem', 
                          color: '#333'
                        }}>
                          ESTIMATED DELIVERY DATE:
                        </Typography>
                        <Typography sx={{ 
                          fontSize: '0.875rem',
                          color: '#333'
                        }}>
                          Jun 9 - Jun 13
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Afterpay */}
                  <Box sx={{ mb: 4 }}>
                    <Typography sx={{ 
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      mb: 1.5,
                      color: '#333'
                    }}>
                      AFTER PAY
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      gap: 1
                    }}>
                      <Typography sx={{ fontSize: '0.875rem', color: '#333' }}>
                        or 4 interest-free payments of $13.97 with
                      </Typography>
                      <Box
                        component="img"
                        src="/afterpay-logo.svg"
                        alt="Afterpay"
                        sx={{ height: 20 }}
                      />
                      <InfoOutlinedIcon 
                        sx={{ 
                          fontSize: 16,
                          color: '#666',
                          cursor: 'pointer'
                        }} 
                      />
                    </Box>
                  </Box>

                  {/* UMF Scale */}
                  <Box sx={{ mb: 4 }}>
                    <Typography sx={{ 
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      mb: 2,
                      color: '#333'
                    }}>
                      UMF™ SCALE
                    </Typography>
                    <Box sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      justifyContent: 'space-between'
                    }}>
                      {['10+', '15+', '20+', '24+', '26+', '28+', '30+'].map((umf) => (
                        <Box
                          key={umf}
                          sx={{
                            fontSize: '0.75rem',
                            color: umf === '24+' ? 'white' : '#666',
                            bgcolor: umf === '24+' ? '#333' : 'transparent',
                            py: 0.75,
                            px: 1.5,
                            borderRadius: '20px',
                            minWidth: '70px',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          UMF™ {umf}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Taste Profile */}
                  <Box sx={{ mb: 4 }}>
                    <Typography sx={{ 
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      mb: 2,
                      color: '#333'
                    }}>
                      TASTE PROFILE
                    </Typography>
                    <Box sx={{ 
                      position: 'relative',
                      height: 2,
                      bgcolor: '#e0e0e0',
                      borderRadius: 4,
                      width: '100%',
                      mb: 2
                    }}>
                      <Box sx={{ 
                        position: 'absolute',
                        left: '80%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        bgcolor: '#333',
                        border: '3px solid white',
                        boxShadow: '0 0 0 1px #333'
                      }} />
                    </Box>
                    <Box sx={{ 
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      <Typography sx={{ 
                        fontSize: '0.75rem', 
                        color: '#666',
                        fontWeight: 500
                      }}>
                        Clean & Intense
                      </Typography>
                      <Typography sx={{ 
                        fontSize: '0.75rem', 
                        color: '#666',
                        fontWeight: 500
                      }}>
                        Bold & Intense
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetail;