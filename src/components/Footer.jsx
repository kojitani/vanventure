import { createStyles, Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor: 'white',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
    [theme.fn.smallerThan('2000')]: {
      margin: '0 10%',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
  headerMargin: {},
}));

export default function FooterSocial() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner} m="0 15%" size={'100%'}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src="/logo.png" height={34} width={42} alt="Website logo"></img>
          <p style={{ fontWeight: '600' }}>VanVenture</p>
        </div>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon
            title="Github link"
            component="a"
            href="https://github.com/kojitani/vanventure"
            target="_blank"
            size="lg"
          >
            <IconBrandGithub size="2rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
