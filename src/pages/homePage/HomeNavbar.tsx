/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { NavbarDropdown } from 'components';
import { Button as MyButton } from 'components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, store } from 'app/store';

const pages = ['خانه', 'برنامه غذایی', 'سوالات متداول', 'ثبت تیکت'];
const settings = [
  { title: 'اطلاعات کاربری', path: '/Customer/Home/Profile' },
  { title: 'سفارش‌های من', path: '/Customer/Ordering' },
  { title: 'کیف پول من', path: '/Customer/Wallet' },
  { title: 'تیکت‌های من', path: '/Customer/Ticket' },
  { title: 'بازنشانی کلمه عبور', onclick: '' },
  { title: 'خروج', path: '/Login', onclick: '' },
];

const orderSettings = [
  { title: 'سفارش همه روزها', path: '/Customer/Ordering/Create' },
  { title: 'سفارش انتخابی', path: '/Customer/Ordering/CreateSelective' },
];

const HomeNavbar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (): void => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const user = useSelector((store: RootState) => store.session.user);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            کترینگ فود
          </Typography>

          <div className="flex items-center">
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
                MenuListProps={{
                  disablePadding: true,
                }}
              >
                <MenuItem dense key={pages[0]} onClick={handleCloseNavMenu}>
                  <Link to="/Customer">{pages[0]}</Link>
                </MenuItem>
                <MenuItem dense key={pages[1]} onClick={handleCloseNavMenu}>
                  <Link to="/Customer/FoodCalendar">{pages[1]}</Link>
                </MenuItem>
                <NavbarDropdown
                  title="سفارش ماهانه"
                  options={orderSettings}
                  icon={false}
                  menuClassname="right-5 w-full mr-24"
                />
                <MenuItem dense key={pages[2]} onClick={handleCloseNavMenu}>
                  <Link to="/Customer/Home/FAQ">{pages[2]}</Link>
                </MenuItem>
                <MyButton
                  key={pages[3]}
                  type="grey"
                  onClick={handleCloseNavMenu}
                  className="text-black xs:block h-max rounded-md w-5/6 mx-auto my-1"
                >
                  {pages[3]}
                </MyButton>
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              کترینگ فود
            </Typography>
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="/Customer">
              <Button
                key={pages[0]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {pages[0]}
              </Button>
            </Link>
            <Link to="/Customer/FoodCalendar">
              <Button
                key={pages[1]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {pages[1]}
              </Button>
            </Link>
            <NavbarDropdown
              title="سفارش ماهانه"
              options={orderSettings}
              icon={false}
            />
            <Link to="/Customer/Home/FAQ">
              <Button
                key={pages[2]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {pages[2]}
              </Button>
            </Link>
            <MyButton
              key={pages[3]}
              type="grey"
              onClick={handleCloseNavMenu}
              className="text-black xs:block mr-3 h-max my-auto rounded-md"
            >
              {pages[3]}
            </MyButton>
          </Box>

          <div className="flex justify-end w-full md:w-fit">
            <Box sx={{ flexGrow: 0 }}>
              <NavbarDropdown
                title={user?.fullName ? user.fullName : '-'}
                options={settings}
                icon={true}
              />
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HomeNavbar;
