import { createStyles, Container, Text, ActionIcon, rem } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
  footer: {
    height: '60px',
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor: 'white',
    padding: '0 2rem',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1440px',
    height: '100%',
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
      <Container className={classes.inner} p={0}>
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
