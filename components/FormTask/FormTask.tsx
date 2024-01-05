import React, { useState } from 'react'

const FormTask = ({setInputData}) => {
    const [task, setTask] = useState("")
    const [content, setContent] = useState("")

    const handleTaskChange = (event) => {
        setTask(event.target.value)
    }

    const handleContentChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputData((current) => [...current, 
            { task: task, content: content}
        ])
        setTask('')
        setContent('')
    }

  return (
    <div className='col-4 py-5 border sticky-top' style={{height: '100%'}}>
        <form className='mx-5' onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='task'
                className="form-control mb-5" 
                id="task" 
                aria-describedby="task" 
                placeholder='task name'
                onChange={handleTaskChange}
                value={task}
            />
            <textarea 
                name="content" 
                className="form-control mb-5" 
                id="content" 
                cols="30" 
                rows="10" 
                placeholder='content'
                onChange={handleContentChange}
                value={content}
            />
            <button 
                type="submit" 
                className="btn btn-primary">
                    Submit
            </button>
        </form>
    </div>
  )
}

export default FormTask