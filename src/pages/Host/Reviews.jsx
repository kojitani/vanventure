import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  createStyles,
  Text,
  Avatar,
  Group,
  rem,
  Rating,
  Button,
} from '@mantine/core';

const useStyles = createStyles(theme => ({
  body: {
    paddingLeft: rem(30),
    paddingTop: theme.spacing.sm,
  },
}));

export default function HostReviews() {
  const { classes } = useStyles();
  const [allReviews, setAllReviews] = useState(false);
  const vanDetails = useOutletContext();
  const hostReviewsFilter = vanDetails
    .filter(data => data.host.id === 123)
    .flatMap(item => item.reviews);
  const ratingArr = [];
  hostReviewsFilter.forEach(review => ratingArr.push(review.rating));
  const ratingTotal =
    ratingArr.reduce((accRating, curRating) => accRating + curRating, 0) /
    ratingArr.length;
  function showAllReviews() {
    setAllReviews(true);
  }
  console.log(allReviews);
  const reviewElements = hostReviewsFilter
    .slice(0, allReviews ? hostReviewsFilter.length : 3)
    .map((review, i) => {
      return (
        <div key={i}>
          <Group>
            <Avatar
              src={''}
              color="green.9"
              size="lg"
              alt={''}
              radius="md"
              ml={30}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Text size="lg">{review.author}</Text>
              <Text size="lg" color="dimmed">
                {review.postedAt}
              </Text>
              <Rating ml={-3} value={review.rating} fractions={2} readOnly />
            </div>
          </Group>
          <Text className={classes.body} size="lg">
            {review.body}
          </Text>
        </div>
      );
    });
  return (
    <div
      className="reviews-container"
      id="reviews-container"
      style={{ borderTop: 'none' }}
    >
      <div className="reviews-sidebar">
        <h1>Customer reviews </h1>

        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            padding: '0.5rem 0',
          }}
        >
          <Rating
            readOnly
            fractions={4}
            value={ratingTotal.toFixed(2)}
          ></Rating>{' '}
          <p> {ratingTotal.toFixed(2)} out of 5</p>
        </div>
      </div>
      <div className="reviews-list">
        {reviewElements}{' '}
        {!allReviews && (
          <Button variant="default" onClick={() => showAllReviews()}>
            Show {hostReviewsFilter.length} reviews
          </Button>
        )}
      </div>
    </div>
  );
}
