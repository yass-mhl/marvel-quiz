import React, { Fragment } from 'react'

const ProgressBar = ({idQuestion, maxQuestions}) => {

  const actualQuestion = idQuestion +1

  const getWidth = (totalQuestion, questionId) => {
    return(100 / totalQuestion ) * questionId
  }

  const progressPercent = getWidth(maxQuestions, actualQuestion)

  return (
    <Fragment>
      <div className='percentage'>
        <div className='progessPercent'>{`Question: ${actualQuestion}/${maxQuestions}`}</div>
        <div className='progessPercent'>{`Progression: ${progressPercent}%`}</div>
      </div>
      <div className='progressBar'>
        <div className='progressBarChange' style={{width: `${progressPercent}%`}}>

        </div>

      </div>
    </Fragment>
  )
}

export default React.memo(ProgressBar)
