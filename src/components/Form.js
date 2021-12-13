import React, {useState, useEffect} from "react"
import Notes from "./Notes"

function Form() {
    let [note, setNote] = useState({title: "", body:""})
    let [data, setData] = useState(JSON.parse(localStorage.getItem("entries")) || [])
    let notes = ""
    
    useEffect(() => {
        if (data) {
            renderNotes()
        }
    }, [])

    renderNotes()

    useEffect(()=> {
        localStorage.setItem("entries", JSON.stringify(data))
        renderNotes()
    }, [data])
    

    function changeHandler(event){
        setNote(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event) {
        event.preventDefault()
        setData(prevState => ([
            ...prevState,
            note
        ])
        )
        setNote({title: "", body:""})
    }


    function renderNotes() {

        notes = data.reverse().map(i => {
            return (
            <div className="note" key={i.title}>
                <h2 className="note-title">{i.title}</h2>
                <p className="note-body">{i.body}</p>
            </div>
            )
        })

    }

    function clearNotes() {
        localStorage.clear()
        setData([])
        renderNotes()
    }

    return (
        <div className="form-container">
            <form onSubmit={submitHandler}>
                <label>
                    <input
                    name="title" 
                    className="title-input"
                    type="text"
                    placeholder="enter note title"
                    onChange={changeHandler}
                    value={note.title}
                    />
                </label>   
                <label>
                    <textarea
                    name="body"
                    className="body-input" 
                    type="text"
                    placeholder="enter note"
                    onChange={changeHandler}
                    value={note.body}
                    />
                </label>
                <button
                className="btn"
                >Add note</button>           
            </form>
            <div className="all-notes-container">
                <button onClick={clearNotes} className="btn btn-small">Clear</button>
                <div className="notes-container">{notes}</div>
            </div>
        </div>
    )
}

export default Form