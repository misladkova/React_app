import React from "react";

const CreateForm = ({handleAdding, title, author, url, setTitle, setAuthor, setUrl, setShowCreate}) => {
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleAdding}>
                <div>
                    title: <input type="text" value={title} onChange={({target}) =>
                    setTitle(target.value)}/>
                </div>
                <div>
                    author: <input type="text" value={author} onChange={({target}) =>
                    setAuthor(target.value)}/>
                </div>
                <div>
                    url: <input type="text" value={url} onChange={({target}) =>
                    setUrl(target.value)}/>
                </div>
                <div>
                    <button type="submit" onClick={()=>setShowCreate(false)}>create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateForm