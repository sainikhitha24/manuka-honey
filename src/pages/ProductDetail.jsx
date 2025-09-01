import { useState, useEffect } from 'react';
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
import slider0 from '../assets/slider0.png';
import slider1 from '../assets/slider1.png';
import slider2 from '../assets/slider2.png';
import slider3 from '../assets/slider3.jpg';
import slider4 from '../assets/slider4.png';
import slider5 from '../assets/slider5.png';
import slider6 from '../assets/slider6.png';
import slider7 from '../assets/slider7.png';
import diffitem3 from '../assets/diffitem3.webp';
import diffitem4 from '../assets/diffitem4.webp';
import diffitem5 from '../assets/diffitem5.webp';
import diffitem from '../assets/diffitem.webp';
import diffitem1 from '../assets/diffitem1.webp';
import diffitem2 from '../assets/diffitem2.webp';
import ImageBackground from '../assets/ImageBackground.png';
import bundle1 from '../assets/bundle1.png';
import bundle2 from '../assets/bundle2.png';
import bundle3 from '../assets/bundle3.png';
import colourclublogo from '../assets/colourclublogo.png';
import certification1 from '../assets/certification1.png';
import certification2 from '../assets/certification2.png';
import certification3 from '../assets/certification3.png';
import certification4 from '../assets/certification4.png';
import certification5 from '../assets/certification5.png';
import certification6 from '../assets/certification6.png';
import { InfoModal } from '../components/InfoModal';
import { SideMenu } from '../components/SideMenu';

const bundles = [
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

export default function ProductDetail() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  useEffect(() => {
    document.body.style.backgroundColor = '#FBF9F6';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentBundleIndex, setCurrentBundleIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const handleMenuClick = () => setIsMenuOpen(true);
  const handleIncreaseQuantity = () => setQuantity(q => q + 1);
  const handleDecreaseQuantity = () => setQuantity(q => Math.max(1, q - 1));
  const handleNextBundle = () => setCurrentBundleIndex(i => (i + 1) % bundles.length);
  const handlePrevBundle = () => setCurrentBundleIndex(i => (i - 1 + bundles.length) % bundles.length);
  const currentBundle = bundles[currentBundleIndex];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDiffImage, setSelectedDiffImage] = useState(null);
  const originalSliderImages = [slider0, slider1, slider2, slider3, slider4, slider5, slider6, slider7];
  const [sliderImages, setSliderImages] = useState(originalSliderImages);
  const diffImages = [diffitem, diffitem1, diffitem2, diffitem3, diffitem4, diffitem5];
  const handleNextImage = () => {
    if (selectedDiffImage) {
      setSelectedDiffImage(null);
      setSliderImages(originalSliderImages);
    }
    setCurrentImageIndex(i => (i + 1) % sliderImages.length);
  };
  const handlePrevImage = () => setCurrentImageIndex(i => (i - 1 + sliderImages.length) % sliderImages.length);
  const product = {
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
    <Box sx={{ minHeight: '100vh', width: '100%', bgcolor: '#FBF9F6' }}>
      <SideMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      {isMobile && (
        <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid #eee', bgcolor: '#FBF9F6' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <IconButton onClick={handleMenuClick} sx={{ p: 0 }}>
              <MenuIcon />
            </IconButton>
            <Typography sx={{ fontSize: '1rem', fontWeight: 500 }}>
              Manuka Honey
            </Typography>
          </Box>
          <Box onClick={handleMenuClick} sx={{ cursor: 'pointer' }}>
            <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ '& .MuiBreadcrumbs-separator': { mx: 1, color: '#666' } }}>
              <Link component="span" sx={{ fontSize: '0.875rem', color: '#666', textDecoration: 'none' }}>Home</Link>
              <Link component="span" sx={{ fontSize: '0.875rem', color: '#666', textDecoration: 'none' }}>Shop</Link>
              <Typography sx={{ fontSize: '0.875rem', color: '#333' }}>Manuka Honey UMF™ 24+</Typography>
            </Breadcrumbs>
          </Box>
        </Box>
      )}
      <Container maxWidth="lg" sx={{ pt: { xs: 2, md: 8 }, pb: 4 }}>
        <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={2}>
          {/* Left Column - Product Image */}
          <Box>
            <Box sx={{ border: '1px solid #00A651', borderRadius: 1, bgcolor: '#FBF9F6', position: 'relative', aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, ...(currentImageIndex === 0 && { backgroundImage: `url(${ImageBackground})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }) }}>
              <IconButton onClick={handlePrevImage} sx={{ position: 'absolute', left: 2, top: '50%', transform: 'translateY(-50%)', bgcolor: '#FBF9F6', boxShadow: 1, '&:hover': { bgcolor: '#FBF9F6' } }}>
                <ArrowBackIosNewIcon />
              </IconButton>
              <Box component="img" src={product.imageUrl} alt={product.name} sx={{ width: '90%', height: '90%', objectFit: 'contain', filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.1))' }} />
              <IconButton onClick={handleNextImage} sx={{ position: 'absolute', right: 2, top: '50%', transform: 'translateY(-50%)', bgcolor: '#FBF9F6', boxShadow: 1, '&:hover': { bgcolor: '#FBF9F6' } }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
            {/* Image Preview Grid */}
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', columnGap: 0.25, rowGap: 0.25, mt: 0.25, px: 0 }}>
              {sliderImages.slice(1).map((image, index) => (
                <Box key={index + 1} onClick={() => setCurrentImageIndex(index + 1)} sx={{ width: '100%', cursor: 'pointer', transition: 'all 0.2s ease', opacity: currentImageIndex === index + 1 ? 1 : 0.7, '&:hover': { opacity: 1 } }}>
                  <Box component="img" src={image} alt={`Preview ${index + 1}`} sx={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover', backgroundColor: '#FBF9F6' }} />
                </Box>
              ))}
            </Box>
          </Box>
          {/* Right Column - Product Details */}
          <Box>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              {/* Product Title */}
              <Typography variant="h1" sx={{ fontSize: '2.5rem', fontWeight: 400, color: '#333', mb: 2, textAlign: 'left', width: '100%' }}>{product.name}</Typography>
              {/* UMF and MGO */}
              <Box sx={{ mb: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 400, color: '#333', mb: 1, textAlign: 'left' }}>UMF™ {product.umf}</Typography>
                <Typography variant="h2" sx={{ fontSize: '2rem', fontWeight: 400, color: '#333', mb: 2, textAlign: 'left' }}>MGO {product.mgo}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                  <Button startIcon={<InfoOutlinedIcon />} onClick={e => { setAnchorEl(e.currentTarget); setInfoModalOpen(true); }} sx={{ bgcolor: '#f5f5f5', color: '#666', textTransform: 'none', fontSize: '0.875rem', '&:hover': { bgcolor: '#e0e0e0' } }}>What is UMF and MGO?</Button>
                </Box>
                <InfoModal open={infoModalOpen} anchorEl={anchorEl} onClose={() => { setInfoModalOpen(false); setAnchorEl(null); }} />
              </Box>
              <Typography sx={{ fontSize: '1.1rem', color: '#666', mb: 2, alignSelf: 'start' }}>The Optimiser</Typography>
              {/* Reviews */}
              <Box sx={{ mb: 3 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Rating value={product.rating} readOnly sx={{ color: '#FFB800', alignSelf: 'flex-end' }} />
                  <Typography sx={{ color: '#666', fontSize: '0.875rem' }}>{product.reviewCount} REVIEWS</Typography>
                </Stack>
              </Box>
              <Typography sx={{ color: '#333', lineHeight: 1.8, mb: 4, textAlign: '-webkit-left' }}>{product.description}</Typography>
              {/* Certifications */}
              <Box sx={{ mt: 4, mb: 2, width: '100%' }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  width: '100%',
                  flexWrap: 'nowrap',
                  gap: 1
                }}>
                  {[certification1, certification2, certification3, certification4, certification5, certification6].map((cert, index) => (
                    <Box 
                      key={index} 
                      component="img" 
                      src={cert} 
                      alt={`Certification ${index + 1}`} 
                      sx={{ 
                        height: 70,
                        width: 'auto',
                        objectFit: 'contain',
                        mx: 0.5
                      }} 
                    />
                  ))}
                </Box>
              </Box>
              {/* Different Views Section */}
              <Box sx={{ mb: 4 }}>
                <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, mb: 0.5, color: '#333', textAlign: 'left' }}>SIZE (SELECT ONE)</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: '#666', mb: 1, textAlign: 'left', fontWeight: 400 }}>Variant: 125g | 4.4oz</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1 }}>
                  {diffImages.map((image, index) => (
                    <Box key={index} onClick={() => { setCurrentImageIndex(0); setSelectedDiffImage(image); setSliderImages([image, ...originalSliderImages.slice(1)]); }} sx={{ border: '1px solid #eee', borderRadius: 1, cursor: 'pointer', aspectRatio: '1/1', overflow: 'hidden' }}>
                      <Box component="img" src={image} alt={`View ${index + 1}`} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={{ mt: 'auto', justifyContent: 'flex-start' }}>
                <Typography sx={{ color: '#666', mb: 1, fontSize: '0.75rem', textAlign: 'left' }}>PAYMENT OPTIONS (SELECT ONE)</Typography>
                <Box sx={{ bgcolor: '#f7f7f7', p: 2, borderRadius: 1, mb: 3 }}>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Button variant="contained" fullWidth sx={{ bgcolor: '#FFB800', color: 'white', textTransform: 'none', flexDirection: 'column', py: 1, borderRadius: '30px', '&:hover': { bgcolor: '#F5B000' } }}>
                      <Typography sx={{ mb: 0.25, fontSize: '0.9rem' }}>One-time purchase</Typography>
                      <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>$55.88 USD</Typography>
                    </Button>
                    <Button variant="contained" fullWidth sx={{ color: '#333', textTransform: 'none', bgcolor: '#FBF9F6', flexDirection: 'column', py: 1, borderRadius: '30px', boxShadow: 'none', border: '1px solid #ddd', '&:hover': { bgcolor: '#FBF9F6', borderColor: '#999', boxShadow: 'none' } }}>
                      <Typography sx={{ mb: 0.25, fontSize: '0.9rem' }}>Subscribe & save</Typography>
                      <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>$44.70 USD</Typography>
                    </Button>
                  </Stack>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <Button startIcon={<InfoOutlinedIcon sx={{ fontSize: 16 }} />} sx={{ color: '#666', textTransform: 'none', fontSize: '0.8rem', p: 0, minWidth: 'auto', '&:hover': { bgcolor: 'transparent', color: '#333' } }}>What is a Subscription?</Button>
                  </Box>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography sx={{ color: '#666', mb: 1, fontSize: '0.75rem', textAlign: 'left' }}>SELECT QUANTITY</Typography>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: '#F5B000', borderRadius: '30px', width: '140px', py: 1, px: 2 }}>
                      <Button onClick={handleDecreaseQuantity} disabled={quantity <= 1} sx={{ minWidth: 'auto', p: 0, color: 'white', '&.Mui-disabled': { color: 'rgba(255, 255, 255, 0.5)' } }}>-</Button>
                      <Typography sx={{ color: 'white', fontWeight: 500 }}>{quantity}</Typography>
                      <Button onClick={handleIncreaseQuantity} sx={{ minWidth: 'auto', p: 0, color: 'white' }}>+</Button>
                    </Box>
                    <Button variant="contained" sx={{ bgcolor: 'black', color: 'white', borderRadius: '30px', py: 1.5, flexGrow: 1, '&:hover': { bgcolor: '#333' } }}>ADD TO CART</Button>
                  </Box>
                </Box>

                {/* Bundles Section */}
                <Box sx={{ mb: 3, position: 'relative' }}>
                  <IconButton 
                    onClick={handlePrevBundle} 
                    sx={{ 
                      position: 'absolute', 
                      left: -16, 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      bgcolor: 'white',
                      boxShadow: 1,
                      '&:hover': { bgcolor: 'white' }
                    }}
                  >
                    <ArrowBackIosNewIcon sx={{ fontSize: '1rem' }} />
                  </IconButton>
                  <Box sx={{ 
                    bgcolor: '#f7f7f7', 
                    borderRadius: 1,
                    p: 2
                  }}>
                    <Typography sx={{ color: '#666', fontSize: '0.875rem', mb: 2 }}>
                      {currentBundle.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                      {/* Products */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                        <Box sx={{ flex: 1, textAlign: 'center' }}>
                          <Box component="img" src={bundle1} alt="UMF 20+" sx={{ width: 100, height: 100, objectFit: 'contain' }} />
                          <Typography sx={{ fontSize: '0.875rem', color: '#666', mt: 1 }}>250g</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '1.5rem', color: '#666' }}>+</Typography>
                        <Box sx={{ flex: 1, textAlign: 'center' }}>
                          <Box component="img" src={bundle2} alt="UMF 24+" sx={{ width: 100, height: 100, objectFit: 'contain' }} />
                          <Typography sx={{ fontSize: '0.875rem', color: '#666', mt: 1 }}>250g</Typography>
                        </Box>
                        <Typography sx={{ fontSize: '1.5rem', color: '#666' }}>+</Typography>
                        <Box sx={{ flex: 1, textAlign: 'center' }}>
                          <Box component="img" src={bundle3} alt="Wooden Spoon" sx={{ width: 100, height: 100, objectFit: 'contain' }} />
                          <Typography sx={{ fontSize: '0.875rem', color: '#666', mt: 1 }}>Wooden Spoon</Typography>
                        </Box>
                      </Box>

                      {/* Button Column */}
                      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1, minWidth: '180px' }}>
                        <Box>
                          <Typography sx={{ fontSize: '0.75rem', color: '#666', textDecoration: 'line-through' }}>
                            $478.75 USD
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography sx={{ fontSize: '1rem', fontWeight: 600, color: '#333' }}>
                              $430.88 USD
                            </Typography>
                            <Typography sx={{ fontSize: '0.875rem', color: '#00A651' }}>
                              Save 10%
                            </Typography>
                          </Box>
                        </Box>
                        <Button 
                          variant="contained" 
                          sx={{ 
                            width: '100%',
                            bgcolor: '#333', 
                            color: 'white', 
                            borderRadius: '30px',
                            textTransform: 'none',
                            py: 1,
                            '&:hover': { bgcolor: '#000' }
                          }}
                        >
                          ADD BUNDLE TO CART
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  <IconButton 
                    onClick={handleNextBundle} 
                    sx={{ 
                      position: 'absolute', 
                      right: -16, 
                      top: '50%', 
                      transform: 'translateY(-50%)',
                      bgcolor: 'white',
                      boxShadow: 1,
                      '&:hover': { bgcolor: 'white' }
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: '1rem' }} />
                  </IconButton>
                </Box>

                {/* Rewards Points */}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  mb: 3,
                  bgcolor: '#FFF',
                  p: 1.5,
                  borderRadius: 1
                }}>
                  <Box 
                    component="img" 
                    src={colourclublogo} 
                    alt="Colourclub" 
                    sx={{ height: 24, objectFit: 'contain' }} 
                  />
                  <Typography sx={{ fontSize: '0.875rem', color: '#333', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    Colourclub members earn up to <Box component="span" sx={{ color: '#FF4D00', fontWeight: 600 }}>56</Box> reward points when buy this item.
                    <Box 
                      component="span" 
                      sx={{ 
                        color: '#00A651',
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        ml: 0.5
                      }}
                    >
                      Sign up or log in
                    </Box>
                  </Typography>
                </Box>

                {/* Delivery Section */}
                <Box sx={{ mb: 3 }}>
                  {/* Delivery Header */}
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#333',
                      mb: 2,
                      textTransform: 'uppercase'
                    }}
                  >
                    DELIVERY
                  </Typography>

                  {/* Delivery Info Grid */}
                  <Box sx={{ 
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 2,
                    mb: 2
                  }}>
                    {/* Free Delivery */}
                    <Box>
                      <Typography 
                        sx={{ 
                          fontSize: '0.875rem', 
                          color: '#333'
                        }}
                      >
                        FREE DELIVERY ON ORDERS OVER $30
                      </Typography>
                    </Box>

                    {/* Estimated Delivery */}
                    <Box>
                      <Typography 
                        sx={{ 
                          fontSize: '0.875rem', 
                          color: '#666',
                          mb: 0.5
                        }}
                      >
                        ESTIMATED DELIVERY DATE:
                      </Typography>
                      <Typography 
                        sx={{ 
                          fontSize: '0.875rem', 
                          color: '#333'
                        }}
                      >
                        Jun 9 - Jun 13 to
                      </Typography>
                    </Box>
                  </Box>

                  {/* Horizontal Line */}
                  <Box 
                    sx={{ 
                      height: '1px', 
                      bgcolor: '#E0E0E0',
                      my: 3
                    }} 
                  />

                  {/* After Pay */}
                  <Typography 
                    variant="h3" 
                    sx={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 600, 
                      color: '#333', 
                      mb: 1.5, 
                      textTransform: 'uppercase' 
                    }}
                  >
                    AFTER PAY
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontSize: '0.875rem', 
                      color: '#333', 
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    or 4 interest-free payments of $13.97 with 
                    <Box 
                      component="img" 
                      src={colourclublogo} 
                      alt="Afterpay" 
                      sx={{ 
                        height: 16,
                        mt: '1px'
                      }} 
                    />
                  </Typography>
                </Box>

                {/* UMF Scale */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h3" sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#333', mb: 1, textTransform: 'uppercase' }}>
                    UMF™ SCALE
                  </Typography>
                  <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 1,
                    border: '1px solid #E0E0E0',
                    p: 2
                  }}>
                    <Box sx={{ 
                      width: '100%',
                      height: 2,
                      background: 'linear-gradient(to right, #FF8C00, #FF0000, #FF1493, #800080, #0000FF, #008000, #000080)',
                      mb: 1
                    }} />
                    <Box sx={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      px: 0.5,
                      position: 'relative'
                    }}>
                      {['10+', '15+', '20+', '24+', '26+', '28+', '30+'].map((rating) => (
                        <Box
                          key={rating}
                          sx={{ 
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative'
                          }}
                        >
                          {rating === '24+' && (
                            <Box 
                              sx={{ 
                                position: 'absolute',
                                top: -8,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: 1,
                                height: 4,
                                bgcolor: '#800080'
                              }} 
                            />
                          )}
                          <Typography 
                            sx={{ 
                              fontSize: '0.75rem',
                              color: rating === '24+' ? '#800080' : '#666',
                              fontWeight: rating === '24+' ? 600 : 400
                            }}
                          >
                            {`UMF™ ${rating}`}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>

                {/* Taste Profile */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h3" sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#333', mb: 1, textTransform: 'uppercase' }}>
                    TASTE PROFILE
                  </Typography>
                  <Box sx={{ 
                    border: '1px solid #E0E0E0',
                    borderRadius: 1,
                    p: 2
                  }}>
                    <Box sx={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      mb: 1.5
                    }}>
                      <Typography sx={{ fontSize: '0.75rem', color: '#666' }}>Clean & Intense</Typography>
                      <Typography sx={{ fontSize: '0.75rem', color: '#666' }}>Bold & Intense</Typography>
                    </Box>
                    <Box sx={{ 
                      position: 'relative',
                      height: 2,
                      background: 'linear-gradient(to right, #FF8C00, #FF0000, #FF1493, #800080, #0000FF, #008000, #000080)',
                      borderRadius: 1
                    }}>
                      <Box 
                        sx={{ 
                          position: 'absolute',
                          left: '70%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: '#000',
                          border: '2px solid white',
                          boxShadow: '0 0 0 1px #666'
                        }}
                      />
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
}
