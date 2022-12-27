import { useState } from 'react';

const TextInput = () => {
    const [userInput, setUserInput] = useState('');

    //const userInput = "This is test text for the textbox test"
    const onUserChangedText = (event) => {
        //for testing of text box
        //console.log(event.target.value)
        setUserInput(event.target.value)
    }

    return (
        <div className="prompt-container">
          
          <textarea 
            className="prompt-box"
            placeholder="What can Cash'd help you find today? You can write about desired effects or symptoms you'd like to improve."
            rows="10" cols="60"
            value={userInput}
            onChange={onUserChangedText} 
            />
        </div>
    )
}

export default TextInput