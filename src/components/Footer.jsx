import { createStyles, Container, Text, ActionIcon, rem } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
  footer: {
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor: 'white',
  },

  inner: {
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    maxWidth: '1440px',
    padding: '2rem',
    [theme.fn.smallerThan('xs')]: {
      padding: '0 2rem',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export default function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src="/logo.png" height={34} width={42} alt="Website logo"></img>
          <Text
            sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}
            fz="md"
          >
            VanVenture
          </Text>
        </div>

        <ActionIcon
          title="Github link"
          component="a"
          href="https://github.com/kojitani/vanventure"
          target="_blank"
          size="lg"
        >
          <IconBrandGithub size="2rem" stroke={1.5} />
        </ActionIcon>
      </Container>
    </div>
  );
}
