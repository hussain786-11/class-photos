import { useState } from 'react';
import './App.css';

function App() {
  const [rollNumber, setRollNumber] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [showImage, setShowImage] = useState(false);

  const handleSubmit = () => {
    if (
      rollNumber.length !== 12 ||
      (!rollNumber.startsWith('2411it0100') && !rollNumber.startsWith('2411IT0100'))
    ) {
      alert('Please enter a valid roll number in the format 2411it0100(1-80)');
      setShowImage(false);
      return;
    }

    const imgNum = rollNumber.substring(10);
    setImageSrc(`${imgNum}.png`);
    setShowImage(true);
  };
  const open=()=>{
    const open=document.querySelector('.nav-icons')
   
      open.style.display='flex'
    }
    const close=()=>{
      const close=document.querySelector('.nav-icons')
        close.style.display='none'

    }
  


  return (
    <div className="container">
      {/* Header with nav and logo */}
      <div className="header">
          <div className="hussain">Hussain</div>
        <div className="nav-links">
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
        <div className='manu'>
          <svg onClick={open} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </div>
        <div className="nav-icons">
         <svg onClick={close} className='b' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
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
        
      </div>

      {/* Form Section */}
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
              alt="Roll Image"
              style={{ maxWidth: '300px' }}
            />
          )}
        </center>
      </div>
    </div>
  );
}

export default App;
