import React from 'react';
import './dlcalendar.css';


const pdfFileName = 'sbc23calendar.pdf'; 
const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/' + pdfFileName;
    link.download = pdfFileName;
    link.click();
  };

const Dlcalendar = () => (
  <div className='sbc__dlc'>
    <div className="sbc__dlc-content">
    <h3>Check for closings and keep up with our holiday schedule here! <br/>Download our Calendar:</h3>
    </div>
    <div className="sbc__dlc-btn">
    <button onClick={downloadPDF}>Download Here</button>
    </div>
  </div>
);



export default Dlcalendar;
