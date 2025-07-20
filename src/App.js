import { useState } from 'react';
import './App.css';

function App() {
  const [rollNumber, setRollNumber] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [showImage, setShowImage] = useState(false);

  const handleSubmit = () => {
    if (
      rollNumber.length !== 12 ||
      !rollNumber.startsWith('2411it0100') && !rollNumber.startsWith('2411IT0100')
    ) {
      alert('Please enter a valid roll number in the format 2411it0100(1-80)');
      setShowImage(false);
      return;
    }

    const imgNum = rollNumber.substring(10);
    
    setImageSrc(`${imgNum}.png`);
    setShowImage(true);
  };

  return (
    <div className="container">
      <div className="hussain">
        <h1>Hussain</h1>
      </div>

      <div className="a">
        <a className="b" href="https://www.instagram.com/d.hussain_786?igsh=MncyeWhlZmltN3d5">
          Instagram
        </a>
        <a className="b" href="https://www.facebook.com/share/1CghLrLP1n/">
          Facebook
        </a>
        <a className="b" href="https://wa.me/qr/S2EJIPAJNQQUG1">
          WhatsApp
        </a>
      </div>

      <div className="form-section">
        <center>
          <h2>Enter the roll number to view the image</h2>
          <br />
          <input
            type="text"
            id="numberInput"
            placeholder="2411it01001"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
          <br />
          <br />
          {showImage && (
            <img
              id="myImage"
              src={process.env.PUBLIC_URL + `/${imageSrc}`}
              alt="Your Image"
              style={{ maxWidth: '300px' }}
            />
          )}
        </center>
      </div>
    </div>
  );
}

export default App;