import { Component } from 'react';

import Statistics from '../Statistics/Statistics'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Section from '../Section/Section'
import Notification from '../Notification/Notification'

class App extends Component {
  state={
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleClick = (e) => {
      const btnName = e.target.name;

      this.setState((prevState) => {
          return { 
             [btnName] : prevState[btnName] + 1,
          }
      })
  }

  countTotalFeedback = () => {
      const arrayOfValues = Object.values(this.state)
      return arrayOfValues.reduce((previousValue, currentItem) => {
          return previousValue + currentItem}, 0)
  }

  countPositiveFeedbackPercentage = () => {
      const numberOfPositiveReply = this.state.good
      const numberOfAllReplies = this.countTotalFeedback()
      return Math.round((numberOfPositiveReply/numberOfAllReplies)*100)
  }

  render(){
    let isFeedback = this.countTotalFeedback()
      return(
          <>
          <Section title="Please leave feedback">
            <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick}/>
          </Section>
          { isFeedback ? <Section title="Statistics">
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
          </Section> : <Notification message="There is no feedback" />}
          </>
      )
  }
}

export default App
