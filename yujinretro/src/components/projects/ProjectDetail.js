import React from 'react'

const ProjectDetail = (props) => {
    const id =props.match.params.id;
  return (
    <div className='container section project-detail'>
    <div className='card z-epth-0'>
    <div className='card-content'>
    <span className='card-title'> Comment Title - {id} </span>
    <p>Paopao is an A-mazing cat! maio!</p>
    </div>
    <div className='card-action grey lighten-4 grey-text'>
    <div>Posted by Awesome cat Paopao</div>
    <div>November midnite eating fish</div>
    </div>
    </div>
      
    </div>
  )
}

export default ProjectDetail

