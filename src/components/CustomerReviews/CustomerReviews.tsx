import * as React from "react"
import { useTheme, useMediaQuery, Paper, Stack } from '@mui/material/';
import { Card, QuoteMarks, ReviewAuthorName, Root } from "./CustomerReview.styles";
import { reviews } from "../../constants";

export interface CustomerReviewCard {
  reviewText?: string,
  reviewerName?: string,
}

const CustomerReviews: React.FC<{}> = ({
    
}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) 
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobileOrTablet = isMobile || isTablet;

  const getComposedCard = (text: string, author: string) => {
    return (
      <Card>
        <QuoteMarks>"</QuoteMarks>
        {text}
        <ReviewAuthorName>{author}</ReviewAuthorName>
      </Card>
    )
  }

  return (
    <Root >
      <Stack direction="row" spacing={2}>
        {reviews.map((review) => (
          getComposedCard(review.reviewText ?? "", review.reviewerName ?? "")
        ))}
      </Stack>
    </Root>
  )
}


export default CustomerReviews;
