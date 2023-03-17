import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
  rem,
} from '@mantine/core';
import image from '/public/hostvan.jpg';
import { Link } from 'react-router-dom';
const useStyles = createStyles(theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.xl} * 2)`,
    paddingRight: 0,
    paddingLeft: 0,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '1000%',
    borderRadius: '0.5rem',
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },
}));

export default function HostOffer() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Own an RV?</Title>

        <Text c="dimmed" fz="xl" mb={5}>
          Make some extra income on days you're not using your adventure mobile.
          We will take care of the hard stuff, you just sit back and enjoy the
          passive income. Contact us down below for more information.
        </Text>

        <div className={classes.controls}>
          <Link to={'/login'} state={{ type: 'register' }}>
            <Button size="md" className={classes.control}>
              Create an account
            </Button>
          </Link>
        </div>
      </div>
      <Image
        src={image}
        alt="Host your van section"
        className={classes.image}
      />
    </div>
  );
}
