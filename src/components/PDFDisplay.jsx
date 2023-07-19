import React, { useState } from 'react';
import pdf from '../assets/kainorastis.pdf'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';

import { getFilePlugin } from '@react-pdf-viewer/get-file';
import { printPlugin } from '@react-pdf-viewer/print';
import { zoomPlugin } from '@react-pdf-viewer/zoom';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

const PDFDisplay = () => {
    const worker = import.meta.env.VITE_PDF_WORKER_URL

    const getFilePluginInstance = getFilePlugin();
    const { DownloadButton } = getFilePluginInstance;

    const printPluginInstance = printPlugin();
    const { PrintButton } = printPluginInstance;

    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

    return (
        <>
            <Worker workerUrl={worker}>
            </Worker>
            <div className='overflow-hidden mx-5 my-2'>
                <div
                    style={{
                        alignItems: 'center',
                        backgroundColor: '#eeeeee',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        padding: '4px',
                    }}>
                    <DownloadButton />
                    <PrintButton />
                    <ZoomOutButton />
                    <ZoomPopover />
                    <ZoomInButton />
                </div>
                <div
                    style={{
                        flex: 1,
                        overflow: 'hidden',
                    }}>
                    <Viewer fileUrl={pdf} plugins={[printPluginInstance, getFilePluginInstance, zoomPluginInstance]} />
                </div>
            </div>
        </>
    )
}

export default PDFDisplay
