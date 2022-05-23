import React from 'react'
import batman from '../../images/batman.png'

const ErrorPage = () => {

  const centerh2 = {
    textAlign: 'center',
    marginTop: '50px',
  }

  return (
    <div className='quiz-bg'>
      <div className="container">
        <h2 style={centerh2}>Oups, cette page n'existe pas</h2>
        <img src={batman} alt='error page'/>
      </div>
    </div>
  )
}

export default ErrorPage
