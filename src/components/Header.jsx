import {
  createStyles,
  Header,
  Group,
  Button,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Menu,
  Text,
} from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Avatar, Tooltip } from '@mantine/core';

const useStyles = createStyles(theme => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 600,
    fontSize: theme.fontSizes.md,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  headerMargin: {
    [theme.fn.smallerThan('2000')]: {
      padding: '0 10%',
    },
  },
}));

export default function HeaderMegaMenu() {
  const [loginStatus, setLoginStatus] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes } = useStyles();

  useEffect(() => {
    setLoginStatus(localStorage.getItem('loggedin'));
  }, [location]);
  function logOut() {
    console.log('testing');
    localStorage.removeItem('loggedin');
    window.location.reload();
  }
  return (
    <Box>
      <Header height={60} px="md">
        <Group
          position="apart"
          sx={{ height: '100%' }}
          px={'15%'}
          className={classes.headerMargin}
        >
          <Link
            style={{
              textDecoration: 'none',
              color: 'black',
              fontWeight: '600',
            }}
            alt="Homepage"
            to="/"
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src="/logo.png" height={34} alt="Home.logo"></img>
              <p>VanVenture</p>
            </div>
          </Link>

          <Group
            sx={{ height: '100%' }}
            spacing={5}
            className={classes.hiddenMobile}
          >
            <Link to="/host/dashboard" className={classes.link}>
              Host
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="vans" className={classes.link}>
              Vans
            </Link>

            <Menu shadow="md" width={200}>
              <Menu.Target>
                <Avatar
                  variant="filled"
                  color="lime.9"
                  size={40}
                  radius="xl"
                  style={{ cursor: 'pointer' }}
                />
              </Menu.Target>

              <Menu.Dropdown>
                {!loginStatus && (
                  <Link
                    to="login"
                    state={{ type: 'login' }}
                    style={{ textDecoration: 'none' }}
                  >
                    <Menu.Item style={{ fontSize: '1.2rem' }}>Log in</Menu.Item>
                  </Link>
                )}
                {!loginStatus && (
                  <Link
                    to="login"
                    state={{ type: 'register' }}
                    style={{ textDecoration: 'none' }}
                  >
                    <Menu.Item style={{ fontSize: '1.2rem' }}>
                      Sign up
                    </Menu.Item>
                  </Link>
                )}
                {loginStatus && (
                  <Menu.Item
                    style={{ fontSize: '1.2rem' }}
                    onClick={() => logOut()}
                  >
                    Sign out
                  </Menu.Item>
                )}
              </Menu.Dropdown>
            </Menu>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="xl"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <Divider my="sm" color="gray.1" />
          <Link to="/" className={classes.link} onClick={closeDrawer}>
            Home
          </Link>
          <Divider my="sm" color="gray.1" />
          <Link
            to="host/dashboard"
            className={classes.link}
            onClick={closeDrawer}
          >
            Host
          </Link>
          <Divider my="sm" color="gray.1" />
          <Link to="about" className={classes.link} onClick={closeDrawer}>
            About
          </Link>
          <Divider my="sm" color="gray.1" />
          <Link to="vans" className={classes.link} onClick={closeDrawer}>
            Vans
          </Link>

          <Divider my="sm" color="gray.1" />

          {!loginStatus && (
            <Group position="center" grow pb="xl" px="md">
              <Button
                onClick={() => {
                  navigate('/login', { state: { type: 'login' } });
                  closeDrawer();
                }}
                variant="default"
              >
                Log in
              </Button>
              <Button
                onClick={() => {
                  navigate('/login', { state: { type: 'register' } });
                  closeDrawer();
                }}
                color="lime.9"
              >
                Sign up
              </Button>
            </Group>
          )}
          {loginStatus && (
            <Group position="center" grow pb="xl" px="md">
              <Button
                variant="default"
                onClick={() => {
                  localStorage.removeItem('loggedin');
                  window.location.reload();
                }}
              >
                Sign out
              </Button>
            </Group>
          )}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
