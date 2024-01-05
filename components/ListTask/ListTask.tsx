import React from 'react'

const ListTask = ({inputData}) => {
    console.log("first", inputData)
    return (
        <div className='col border'>
            <div className='row row-cols-2 my-5'>
                {inputData.map((task, index) => (
                    <div style={{width: '45.5%'}} key={index} className='card mb-4 ms-4 py-5'>
                        <h1>{task.task}</h1>
                        <p>{task.content}.</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListTask