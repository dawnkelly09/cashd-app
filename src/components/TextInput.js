const TextInput = () => {

    const userInput = "This is test text for the textbox test"
    const onUserChangedText = "Test Text"

    return (
        <div className="prompt-container">
          
          <textarea 
            className="prompt-box"
            placeholder="What can Cash'd help you find today?"
            rows="10" cols="60"
            value={userInput}
            onChange={onUserChangedText} 
            />
        </div>
    )
}

export default TextInput