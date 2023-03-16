import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin } from '@tabler/icons-react';

const mockdata = [
  {
    title: '#VANLIFE IN A BOX',
    description: `Everything you need to hit the road and start camping. Our vans are recertified before each trip to ensure your travel plans
    can go off without a hitch.`,
    icon: IconTruck,
  },

  {
    title: 'EASY TO HANDLE',
    description:
      'Our vans are extremely user-friendly. Due to its smaller size compared to other RVs, you will have no trouble adapting in the drivers seat.',
    icon: IconCertificate,
  },
  {
    title: 'AFFORDABLE PRICING',
    description:
      'Our campervan rentals are economical and easy to drive, giving you the freedom to get off the beaten path into places that are inaccessible to larger motorhomes and RVs—and no stress driving through the city.',
    icon: IconCoin,
  },
];

const useStyles = createStyles(theme => ({
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(24),
    },
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = mockdata.map(feature => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="md" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container fluid py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Why VanVenture?
      </Title>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
