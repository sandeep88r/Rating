import * as React from 'react';
import {Rating} from '@fluentui/react';

export interface RatingProps {
  ratingvalue: number;
  onRatingChange: (rating: number) => void;
}

export interface RatingState {
  currentRating: number;
}

export class Ratings extends React.Component<RatingProps, RatingState> {
  constructor(props: RatingProps) {
    super(props);
    this.state = {
      currentRating: props.ratingvalue,
    };
  }

  private onRatingChange = (event: React.FormEvent<HTMLElement>, rating?: number) => {
    if (rating !== undefined) {
      this.setState({currentRating: rating});
      this.props.onRatingChange(rating);
      console.log("current rating",rating);
    }
  }

  public render(): React.ReactNode {
    return (
      <><div style={{display:'flex',alignItems:'center'}}><Rating
        rating={this.state.currentRating}
        max={5}
        onChange={this.onRatingChange}
      />
      <span style={{marginLeft:10}}>{this.state.currentRating}</span></div></>
    )
  }
}
