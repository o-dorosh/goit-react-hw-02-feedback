import React from 'react';

import s from './Feedback.module.css';

class Feedback extends React.Component {
    state={
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positiveFeedback: 0

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
        return(
            <>
            <p className={s.feedback__title}>Please leave feedback</p>
            <div className={s.feedback__btns__area}>
                <button className={s.feedback__btn} name = "good" type="button" onClick={this.handleClick}>good</button>
                <button className={s.feedback__btn} name = "neutral" type="button" onClick={this.handleClick}>neutral</button>
                <button className={s.feedback__btn} name = "bad" type="button" onClick={this.handleClick}>bad</button>
            </div>
            <p>Statistics</p>
            <ul>
                <li>Good: <span>{this.state.good}</span></li>
                <li>Neutral: <span>{this.state.neutral}</span></li>
                <li>Bad: <span>{this.state.bad}</span></li>
                <li>Total: <span>{this.countTotalFeedback()}</span></li>
                <li>Positive Feedback: <span>{this.countPositiveFeedbackPercentage()}%</span></li>
            </ul>

            </>
        )
    }
}

export default Feedback