// PUT REQ FOR HELPFULNESS

import access from '../../../config.js';
import axios from 'axios';



const [answerHelpfulness, setAnswerHelpfulness] = useState(props.answer.helpfulness);
const [firstVote, setFirstVote] = useState(true)
let answerId = props.answer.id;


// Update Answer Helpful Number
let newAnswerObj = {
  id: answerHelpfulness,
}

const addHelpfulness = () => {
  if (firstVote) {
    const addOne = props.answer.helpfulness + 1;
    setAnswerHelpfulness(addOne);
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${answerId}/helpful`, newAnswerObj, {
      headers: { 'Authorization': `${access.TOKEN}` }
    });
    setFirstVote(false);
  } else {
    console.log('You already voted!')
  }
}



<div className="q_a_footer_item">Helpful? <div className="q_a_footer_item_yes" onClick={addHelpfulness}><u>Yes</u></div> ({answerHelpfulness})</div>