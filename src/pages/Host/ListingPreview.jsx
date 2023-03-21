import {
  Avatar,
  Table,
  Group,
  Text,
  ActionIcon,
  ScrollArea,
} from '@mantine/core';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
export default function UsersTable(props) {
  const rows = props.vanDetails
    .filter(van => van.host.id === 123)
    .map((van, i) => {
      const ratingArr = [];
      van.reviews.forEach(review => ratingArr.push(review.rating));
      const vanRating =
        ratingArr.reduce((accRating, curRating) => accRating + curRating, 0) /
        ratingArr.length;

      return (
        <tr key={i} style={{ whiteSpace: 'nowrap' }}>
          <td>
            <Group spacing="sm" style={{ flexWrap: 'nowrap' }}>
              <Avatar size={50} src={van.imageUrl[0]} radius={30} />
              <Text fz="lg" fw={500}>
                {van.name}
              </Text>
            </Group>
          </td>

          <td>
            <Text fz="lg" fw={600}>
              ${van.price} /night
            </Text>
          </td>
          <td>
            <Text fz="lg" fw={500}>
              ★ {vanRating}
            </Text>
          </td>
          <td>
            <Text fz="lg" fw={600}>
              Public
            </Text>
          </td>
          <td>
            <Group spacing={0} position="right">
              <Link to={`/host/vans/${van.id}/details`}>
                <ActionIcon>
                  <IconPencil size="2rem" stroke={1.5} />
                </ActionIcon>
              </Link>
              <ActionIcon color="red">
                <IconTrash size="2rem" stroke={1.5} />
              </ActionIcon>
            </Group>
          </td>
        </tr>
      );
    });

  return (
    <ScrollArea type="auto">
      <Table
        highlightOnHover
        withBorder
        verticalSpacing="sm"
        horizontalSpacing="sm"
      >
        <thead>
          <tr>
            <th>Van name</th>

            <th>Price</th>
            <th>Rating</th>
            <th>Visibility</th>
            <th />
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
