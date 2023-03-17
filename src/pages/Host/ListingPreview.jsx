import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
} from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
export default function UsersTable(props) {
  const theme = useMantineTheme();
  const data = [{ name: 'test', job: 'test', phone: 'test', email: 'test' }];

  const rows = props.vanDetails
    .filter(van => van.host.id === 123)
    .map((van, i) => {
      const ratingArr = [];
      van.reviews.forEach(review => ratingArr.push(review.rating));
      const vanRating =
        ratingArr.reduce((accRating, curRating) => accRating + curRating, 0) /
        ratingArr.length;

      return (
        <tr key={i}>
          <td>
            <Group spacing="sm">
              <Avatar size={50} src={van.imageUrl[0]} radius={30} />
              <Text fz="md" fw={500}>
                {van.name}
              </Text>
            </Group>
          </td>

          <td>
            <Badge
              color={'red'}
              variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
            >
              {van.class}
            </Badge>
          </td>
          <td>
            <Text fz="md" fw={600}>
              ${van.price} /night
            </Text>
          </td>
          <td>
            <Text fz="sm" fw={500}>
              ★ {vanRating}
            </Text>
          </td>
          <td>
            <Group spacing={0} position="right">
              <Link to={`/host/vans/${van.id}/details`}>
                <ActionIcon>
                  <IconPencil size="1rem" stroke={1.5} />
                </ActionIcon>
              </Link>
              <ActionIcon color="red">
                <IconTrash size="1rem" stroke={1.5} />
              </ActionIcon>
            </Group>
          </td>
        </tr>
      );
    });

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Van name</th>
            <th>Details</th>
            <th>Price</th>
            <th>Rating</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
