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
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { useDisclosure } from '@mantine/hooks';

import { Link } from 'react-router-dom';
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
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes } = useStyles();

  return (
    <Box>
      <Header height={60} px="md">
        <Group
          position="apart"
          sx={{ height: '100%' }}
          px={'15%'}
          className={classes.headerMargin}
        >
          <Link to="/">
            <MantineLogo size={30} />
          </Link>

          <Group
            sx={{ height: '100%' }}
            spacing={5}
            className={classes.hiddenMobile}
          >
            <Link to="host" className={classes.link}>
              Host
            </Link>
            <Link to="about" className={classes.link}>
              About
            </Link>
            <Link to="vans" className={classes.link}>
              Vans
            </Link>
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
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
          <Link to="host" className={classes.link} onClick={closeDrawer}>
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

          <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
