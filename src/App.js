import React, { useState } from 'react'; // import React library
import './App.css'; // import CSS file

function App() {
  // State to manage the image URL or text description entered by the user
  const [imageURL, setImageURL] = useState(''); 

  // Funtion to handle the button for image analysis
  const handleImageAnalysis = () => {
    // Placeholder code to log the image analysis action(to be implemented later)
    console.log('Analyzing image', imageURL);  
  };

  // Funtion to handle the button click for image generation
  const handleImageGeneration = () => {
    // Placeholder code to log the image generation action(to be implemented later)
    console.log('Generating image from text', imageURL);  
  };

  // JSX representing the structure of the aplicattion's UI
  return (
    <div className="App-container">
      <h1>Computer Vision Web App</h1>
      {/* Input for the user to enter the image URL or text description */}
      <div>
        <label>Image URL or Text Description</label>
        <input  // Input element
          type="text"  // Type of input
          value={imageURL}  // Value of the input
          onChange={e => setImageURL(e.target.value)}  // OnChange event handler
        />
      </div>
      {/* Buttons to trigger image analysis and generation */}
      <div>
        <button onClick={handleImageAnalysis}>Analyze Image</button>  
        <button onClick={handleImageGeneration}>Generate Image</button> 
      </div>
    </div>
  );

}

export default App;
