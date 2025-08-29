function calculateScoreFromData({
  totalWorkingDays,
  uninformedAbsents,
  paidLeaves,
  sickLeaves,
  completedEarly,
  missedDeadlines,
  positiveFeedbacks,
  negativeFeedbacks,
  clientsLost,
  value
}) {
  let scoreData = {
    attendance_score:0,
    project_score:0,
    clientFeedback_score:0,
    upskilling_score:0,
    total_score:100,
    clientsLost_score:0
  };

  if(!paidLeaves && !sickLeaves){
    scoreData.attendance_score += 5;
  }

  if(completedEarly){
    scoreData.project_score += 5;
  }

  if(missedDeadlines > 0){
    scoreData.project_score -= 5 * missedDeadlines;
  }
  
  if(positiveFeedbacks){
    scoreData.clientFeedback_score += 5;
  }
  if(negativeFeedbacks){
    scoreData.clientFeedback_score -= 5;
  }
  if(clientsLost){
    scoreData.clientsLost_score -= 20;
  }
  if(value){
    scoreData.upskilling_score += 5;
  }

  return {...scoreData,total_score:100 + scoreData.attendance_score + scoreData.project_score + scoreData.clientFeedback_score + scoreData.upskilling_score + scoreData.clientsLost_score};
}


export default calculateScoreFromData