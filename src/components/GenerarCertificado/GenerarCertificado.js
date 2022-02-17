import React, { useEffect, useState } from 'react';

import jsPDF from 'jspdf'

import firmaFXA from '../../assets/images/certificado/firma.jpeg'
import footer from '../../assets/images/certificado/FooterPdf.png'
import { EmpleadoService } from '../../service/EmpleadoService';
/* import convertirNuemroLetras from 'numero-a-letras' */

const GenerarCertificado = () => {

  const serviceEmp = new EmpleadoService()
  const [infoEmp, setInfoEmp] = useState({})

useEffect(() => {
    serviceEmp.getInfoCertificado().then(res=>{
      res.data.fecha_ingreso = res.data.fecha_ingreso.split('-')
      setInfoEmp(res.data)/* 
      convertirNuemroLetras.NumerosALetras() */
      console.log(res.data)
    })

}, []) //eslint-disable-line


  const GeneratePdf = () =>{
        
        let doc = new jsPDF('p','pt')
        doc.setFontSize(12)

        doc.text("LA COORDINACIÓN DE RECURSOS HUMANOS DE LA EMPRESA", 120, 130)

        doc.text(`${infoEmp.empresa.nombre_empresa}`, 280, 200,{align:'center'})
        doc.text(`NIT ${infoEmp.empresa.nit}`, 280, 220,{align:'center'})

        doc.text("CERTIFICA QUE:", 280, 285,{align:'center'})

        doc.text(`El(la) señor(a) ${infoEmp.nombres} ${infoEmp.apellidos}, identificado(a) con ${infoEmp.tipo_identificacion.nombre_tipo_identificacion} No. ${infoEmp.numero_identificacion}, labora en nuestra empresa desde el día ${infoEmp.fecha_ingreso[2]} de ${infoEmp.fecha_ingreso[1]} de ${infoEmp.fecha_ingreso[0]} y vigente a la fecha, con un contrato a término ${infoEmp.tipo_contrato.nombre_tipo_contrato}, desempeñando el cargo de ${infoEmp.cargo.nombre_cargo} y devengando un salario mensual de XXXXXX DE PESOS M/CTE ($XXXXXXX).`, 80, 355,{align:'justify', maxWidth:430})
        
        
        doc.text("La presente certificación se expide a solicitud del interesado el día (XXXXX) de XXXXX de XXXXX en la ciudad de Bogotá.", 80, 460,{align:'justify', maxWidth:430})

        doc.text("Cordialmente,", 80, 525)

        doc.addImage(firmaFXA,'jpeg',80,560,150,80)
        doc.text("KAREN LIZETH MORALES ALVARADO", 80, 645)
        doc.text("Coordinadora de Recursos humanos", 80, 660)
    
        doc.addImage(footer,'jpeg',30,800,550,20)

        doc.save('Certificado Laboral.pdf')
    }
  return <div onClick={GeneratePdf}>
      generar certificado
      </div>;
};

export default GenerarCertificado;
