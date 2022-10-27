import { View } from '@react-pdf/renderer';
import React, { useState, useContext} from 'react';
import { Document, Page, pdfjs } from "react-pdf";
// import { ThemeContext } from '../components/theme/ThemeProvider';
// import res from  "./Resume.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  
//PDFjs worker from an external cdn

export const PdfResume = (props) => {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    // setNumPages(numPages);
    // setPageNumber(1);
    // }
    // const { theme, toggleTheme } = useContext(ThemeContext);
    
    const url = new URL("./Resume.pdf", import.meta.url).toString();
    return (
        <>
        <div>
        <Document
            file={url}
            // onLoadSuccess={onDocumentLoadSuccess}
            >
            <div className={
                `${ "bg-gray-100"} 
                bg-opacity-40`}>

            <Page 
            pageNumber = {1} 
            wrap={false} 
            canvasBackground = "transparent" 
            renderTextLayer = {false}
            style={
                {position: "absolute", margin: "auto", width: "50p", alignContent: "center"}
            }
            width = {props.width}/>

            </div>
        </Document>
        </div>
        </>
    );
}
  
