import React, { useState } from 'react';

import jsPDF from 'jspdf'



const GenerarCertificado = () => {
    const [documento, setDocumento] = useState('')
    const GeneratePdf = () =>{
        
        let doc = new jsPDF('p','pt')
    
        doc.text(20, 20, 'This is the first title.')
    
        doc.setFont('helvetica')
        doc.text(20, 60, 'This is the second title.')
    
        doc.setFont('helvetica')
        doc.text(20, 100, 'This is the thrid title.')    
        
        setDocumento(doc)
      /* 
        doc.save('demo.pdf') */
    }
  return <div onClick={GeneratePdf}>
      generar certificado
      {documento}
      </div>;
};

export default GenerarCertificado;
