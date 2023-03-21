import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  rem,
} from '@mantine/core';
import bg from '/contact-bg.svg';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
const useStyles = createStyles(theme => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      display: 'flex',
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: rem(4),
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: rem(-12),
    },

    fieldInput: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: 'flex',

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg,
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: `${rem(1)} solid transparent`,
      padding: theme.spacing.xl,
      flex: `0 0 ${rem(280)}`,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

export default function GetInTouch() {
  const { classes } = useStyles();

  return (
    <>
      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              Contact information
            </Text>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <IconAt size="2rem" color="white" />
              <div style={{ textAlign: 'left' }}>
                <Text fz="lg" fw={300} c="#fff">
                  Email{' '}
                </Text>
                <Text fz="md" fw={500} c="#fff">
                  fake@email.com
                </Text>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <IconPhone size="2rem" color="white" />
              <div style={{ textAlign: 'left' }}>
                <Text fz="lg" fw={300} c="#fff">
                  Phone
                </Text>
                <Text fz="md" fw={500} c="#fff">
                  +49 (800) 335 35 35
                </Text>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <IconMapPin size="2rem" color="white" />
              <div style={{ textAlign: 'left' }}>
                <Text fz="lg" fw={300} c="#fff">
                  Address
                </Text>
                <Text fz="md" fw={500} c="#fff">
                  844 Morris Park avenue
                </Text>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <IconSun size="2rem" color="white" />
              <div style={{ textAlign: 'left' }}>
                <Text fz="lg" fw={300} c="#fff">
                  Working hours
                </Text>
                <Text fz="md" fw={500} c="#fff">
                  8 AM - 11 PM
                </Text>
              </div>
            </div>
          </div>

          <form
            className={classes.form}
            onSubmit={event => event.preventDefault()}
          >
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput label="Your name" placeholder="Your name" />
                <TextInput
                  label="Your email"
                  placeholder="hello@vanventure.com"
                  required
                />
              </SimpleGrid>

              <TextInput
                mt="md"
                label="Subject"
                placeholder="Subject"
                required
              />

              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
              />

              <Group position="right" mt="md">
                <Button type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </>
  );
}
