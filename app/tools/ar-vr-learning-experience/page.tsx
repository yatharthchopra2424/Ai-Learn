'use client';
import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';

const ArVrLearningExperience = () => {
  const [models, setModels] = useState<string[]>([]);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<'prompt' | 'granted' | 'denied'>('prompt');
  const [errorDetails, setErrorDetails] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const modelFiles = ['realistic_human_heart.glb'];
    setModels(modelFiles);
    if (modelFiles.length > 0) {
      setSelectedModel(modelFiles[0]);
    }
  }, []);

  const requestCameraPermission = async () => {
    try {
      console.log('Requesting camera permission...');
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log('Camera permission granted.');
      setPermissionStatus('granted');
      setCameraStream(stream);
      setErrorDetails('');
    } catch (err: any) {
      console.error("Camera permission failed:", err);
      setPermissionStatus('denied');
      setErrorDetails(`Error: ${err.name} - ${err.message}`);
    }
  };

  useEffect(() => {
    if (cameraStream && videoRef.current) {
      videoRef.current.srcObject = cameraStream;
    }
  }, [cameraStream]);

  return (
    <>
      <Script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js" />
      <div className="flex h-screen">
        <div className="w-1/4 bg-white p-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">3D Models</h2>
          <ul>
            {models.map((model) => (
              <li
                key={model}
                className={`p-2 cursor-pointer rounded-md ${
                  selectedModel === model ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
                }`}
                onClick={() => setSelectedModel(model)}
              >
                {model.replace('.glb', '').replace(/_/g, ' ')}
              </li>
            ))}
          </ul>
          <hr className="my-4" />
          <div className="space-y-2">
              <h3 className="text-lg font-semibold">Camera Status</h3>
              {permissionStatus === 'prompt' && (
                  <button onClick={requestCameraPermission} className="w-full bg-blue-500 text-white p-2 rounded">
                      Request Camera Access
                  </button>
              )}
              <p>Status: <span className={`font-bold ${permissionStatus === 'granted' ? 'text-green-500' : 'text-red-500'}`}>{permissionStatus}</span></p>
              {errorDetails && <p className="text-red-500 text-sm">{errorDetails}</p>}
          </div>
        </div>
        <div className="w-3/4 h-full relative bg-black">
          {permissionStatus === 'granted' && cameraStream ? (
            <>
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              {selectedModel && (
                <model-viewer
                  src={`/models-ar-vr/${selectedModel}`}
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  camera-controls
                  enable-pan
                  touch-action="pan-y"
                  alt="A 3D model"
                  shadow-intensity="1"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'unset',
                    zIndex: 10
                  }}
                >
                  <button slot="ar-button" id="ar-button" style={{backgroundColor: 'white', borderRadius: '4px', border: 'none', position: 'absolute', top: '16px', right: '16px' }}>
                      View in your space
                  </button>
                </model-viewer>
              )}
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-white">
                {permissionStatus === 'denied' ? 'Camera access was denied.' : 'Awaiting camera permission...'}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ArVrLearningExperience;
