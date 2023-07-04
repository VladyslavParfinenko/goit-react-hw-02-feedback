import React,{Component} from "react";
import Statistics from "./Feedback/Statistics/Statistics";
import FeedbackOptions from "./Feedback/FeedbackOptions/FeedbackOptions";
import Section from "./Feedback/SectionTitle/Section";
import Notification from "./Feedback/Notification/Notification";



class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }


goodButton(){
  this.setState(prevState=>({
    good:prevState.good+1
  }))
}
neutralButton(){
  this.setState(prevState=>({
    neutral:prevState.neutral+1
  }))
}
badButton(){
  this.setState(prevState=>({
    bad:prevState.bad+1
  }))
}


onFeedback =(feedback)=>{
  this.setState(prevState=>({
    [feedback]:prevState[feedback] + 1
  }));
};







  countTotalFeedback(){
    const {good,neutral,bad} = this.state;
    return good+neutral+bad;
  }

  countPositiveFeedbackPercentage(){
    const {good} = this.state;
    return Math.round((good/this.countTotalFeedback())*100)
  }


  render(){
    const {good,neutral,bad} = this.state;
  return (
    <div
      style={{
        flexDirection:'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    
      <Section title="Please leave feedback">
      <FeedbackOptions options={['good','neutral','bad']} onLeaveFeedback={this.onFeedback}/>
      </Section>
      <Section title="Statistic">
      {this.countTotalFeedback() === 0 ? (<Notification message="There is no feedback"/> ):(<Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>) }

      
      </Section>
      
    </div>
  );
};
}


export default App;