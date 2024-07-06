import {useState} from 'react'

function TextArea () {

    const [currentContent, setContent] = useState('')

    return (
        <>
            <div>
                <textarea name="entradaDados" id="entradaDados" value={currentContent} onChange={(e) => setContent(e.target.value)} ></textarea>
            </div>
            <p>{currentContent}</p>
        </>
    )
}

export default TextArea