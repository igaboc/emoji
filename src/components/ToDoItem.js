import React from 'react'

function ToDoItem({
    description,
    completed = false, // if not passed, default to 'false'
    onToggleCompleted
}) {
    let checkbutton = ''
    if (completed === false) {
        checkbutton = '❌'
    }
    else {
        checkbutton = '✅'
    }
    return (
        <button>
            <label> 
                <input 
                    type='checkbox' 
                    checked={completed} 
                    onChange={
                        (event) => { // Event listener
                            console.log('Clicked checkbox', description)
                            // When user clicks checkbox
                            // Notify the powers above that the concept of completed has changed
                            onToggleCompleted()
                        }
                    }
                />
                {checkbutton}
                { description }
            </label>
        </button>
    )
}

export default ToDoItem