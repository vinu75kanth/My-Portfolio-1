import React from 'react'
function Work(props) {
    const {
        source,
        heading,
        content,
        link
    }=props;
    
    return (
    <div className="work1 mt-8">
        <img src={source} className="block w-full h-full rounded-lg"></img>
        <div className="work2">
            <h1 className='text-2xl mb-4 text-red-500'>{heading}</h1>
            <p className='text-lg'>{content}</p>
            <a href={link} target='_blank' className='mt-8'>⬆️</a>
        </div>
    </div>
  )
}

export default Work;