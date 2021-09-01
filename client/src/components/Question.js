import React from 'react'

export default function Question({handleSubmit, questionChosen, displayQuestion, disabled}) {
  return (
    <div>
      {displayQuestion && 
      <form onSubmit={handleSubmit}>
        <p className="question-title">
          <span className="question-number">{`Question ${questionChosen.id}. `}</span>
          {questionChosen.title}
        </p><br/>
        <input className="placeholder" type="radio" id="choice1" name="choices" value={questionChosen.choices[0]} />
        <label htmlFor="choice1">{questionChosen.choices[0]}</label><br/><br/>
        <input type="radio" id="choice2" name="choices" value={questionChosen.choices[1]} />
        <label htmlFor="choice2">{questionChosen.choices[1]}</label><br/><br/>
        <input type="radio" id="choice3" name="choices" value={questionChosen.choices[2]} />
        <label htmlFor="choice3">{questionChosen.choices[2]}</label><br/><br/>
        <input type="radio" id="choice4" name="choices" value={questionChosen.choices[3]} />
        <label htmlFor="choice4">{questionChosen.choices[3]}</label><br/><br/>
        <input type="submit" value="Submit" className="button" disabled={disabled}/>
      </form>}
      
    </div>
  )
}
