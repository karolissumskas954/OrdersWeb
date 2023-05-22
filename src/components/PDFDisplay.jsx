import React, { useState } from 'react';
import pdf from '../assets/kainorastis.pdf'
// import { Document, Page } from "react-pdf";
// import { pdfjs } from 'react-pdf/dist/esm/entry.vite';
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';

import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { printPlugin } from '@react-pdf-viewer/print';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';




const PDFDisplay = () => {

    const getFilePluginInstance = getFilePlugin();
    const { DownloadButton } = getFilePluginInstance;

    const printPluginInstance = printPlugin();
    const { PrintButton } = printPluginInstance;

    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            </Worker>

            <div className='overflow-hidden mx-5 my-2'>
                {/* <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={1} renderTextLayer={false} />
                </Document> */}
                <div
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#eeeeee',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        padding: '4px',
                    }}
                >
                    {/* <DownloadButton />
                    <PrintButton /> */}
                    <Toolbar />
                </div>
                <div
                    style={{
                        flex: 1,
                        overflow: 'hidden',
                    }}
                >
                    <Viewer fileUrl={pdf} plugins={[toolbarPluginInstance]} />
                </div>

            </div>
        </>

    )
}

export default PDFDisplay
