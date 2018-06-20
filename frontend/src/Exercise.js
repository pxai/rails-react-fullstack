import React, { Component } from 'react';
import './Exercise.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

const classes = {
card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 1,
    paddingBottom: 1,
  },
  playIcon: {
    height: 38,
    width: 38,
  }
};

class Exercise extends Component {

  constructor(props) {
	  super(props);
	  this.setState({ selected: false});
  }

  handleChange(item) {
		console.log('Changed: ', item)	  
  }

  render() {
	  const exercise = this.props.exercise;
    return (
		<div className="Exercise">
<Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="headline">{exercise.name}</Typography>
            <Typography variant="subheading" color="textSecondary">
				{exercise.description}
            </Typography>
          </CardContent>
          <div className={classes.controls}>
			<Switch
			          checked={true}
					            onChange={this.handleChange('checkedA')}
								          value="checkedA"
										          />
            <Typography variant="subheading" color="textSecondary">
			<span><b>Repeat:</b>{exercise.repeat}</span>
			                  <span><b>Duration:</b>{exercise.duration}</span>
			                  <span><b>Calories:</b>{exercise.calories}</span>
            </Typography>
          </div>
        </div>
        <CardMedia
          className={classes.cover}
          image="/static/images/cards/live-from-space.jpg"
          title="Live from space album cover"
        />
      </Card>
		</div>
    );
  }
}

export default Exercise;
