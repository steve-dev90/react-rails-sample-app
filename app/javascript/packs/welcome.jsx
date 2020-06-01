import React from 'react'
// Only use ReactDOM when inserting React into DOM
import ReactDOM from 'react-dom'

const Welcome = props => {
  return (
    <div>
      <h1>Welcome from BigNOGG</h1>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Welcome />,
    document.getElementById('welcome'),
  )
})