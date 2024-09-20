import React, { useRef, useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa'; // Importing download icon

const VideoCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImages, setCapturedImages] = useState([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const captureLimit = 30; 

  useEffect(() => {
    let captureInterval;
    let captureCount = 0;

    const captureImage = () => {
      if (captureCount >= captureLimit) {
        setIsCapturing(false); 
        return;
      }

      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const imageDataUrl = canvas.toDataURL('image/jpeg');
      const sketchDataUrl = convertToBlackAndWhiteSketch(canvas);

      setCapturedImages(prevImages => [...prevImages, { original: imageDataUrl, sketch: sketchDataUrl }]);
      captureCount++;
    };

    if (isCapturing) {
      captureInterval = setInterval(captureImage, 2000); 
    }

    return () => {
      if (captureInterval) {
        clearInterval(captureInterval);
      }
    };
  }, [isCapturing]);

  const convertToBlackAndWhiteSketch = (sourceCanvas) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = sourceCanvas.width;
    canvas.height = sourceCanvas.height;


    ctx.drawImage(sourceCanvas, 0, 0);


    removeBackgroundAndSetWhite(ctx, canvas);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

 
    applyBlackAndWhiteSketchEffect(imageData, canvas.width, canvas.height);
    ctx.putImageData(imageData, 0, 0);


    return canvas.toDataURL('image/png');
  };

  const removeBackgroundAndSetWhite = (ctx, canvas) => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];


      if (r > 200 && g > 200 && b > 200) {
        data[i] = 255;    
        data[i + 1] = 255; 
        data[i + 2] = 255;
        data[i + 3] = 255; 
      }
    }

    ctx.putImageData(imageData, 0, 0);
  };

  const applyBlackAndWhiteSketchEffect = (imageData, width, height) => {
    const grayscale = new Uint8ClampedArray(imageData.data.length / 4);


    for (let i = 0; i < grayscale.length; i++) {
      const r = imageData.data[i * 4];
      const g = imageData.data[i * 4 + 1];
      const b = imageData.data[i * 4 + 2];
      grayscale[i] = (r + g + b) / 3;
    }


    const threshold = 128;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        const grayValue = grayscale[y * width + x];


        const color = grayValue > threshold ? 255 : 0;
        imageData.data[idx] = color;    
        imageData.data[idx + 1] = color;
        imageData.data[idx + 2] = color;
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      videoRef.current.src = videoUrl;
    }
  };

  const toggleCapture = () => {
    setIsCapturing(!isCapturing);
    if (!isCapturing) {
      setCapturedImages([]); 
    }
  };

  const downloadImage = (imageDataUrl, filename) => {
    const link = document.createElement('a');
    link.href = imageDataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <video 
        ref={videoRef} 
        controls 
        style={{ display: 'block', maxWidth: '100%', marginBottom: '10px' }}
      />
      <button onClick={toggleCapture}>
        {isCapturing ? 'Stop Capturing' : 'Start Capturing'}
      </button>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {capturedImages.map((img, index) => (
          <div key={index} style={{ margin: '10px', textAlign: 'center' }}>
            <img 
              src={img.original} 
              alt={`Original ${index}`} 
              style={{ width: '200px', marginBottom: '5px' }} 
            />
            <FaDownload
              onClick={() => downloadImage(img.original, `original-${index}.jpg`)}
              style={{ cursor: 'pointer', fontSize: '20px', marginBottom: '10px' }}
              title="Download Original"
            />
            <img 
              src={img.sketch} 
              alt={`Sketch ${index}`} 
              style={{ width: '200px', marginTop: '10px', marginBottom: '5px' }} 
            />
            <FaDownload
              onClick={() => downloadImage(img.sketch, `sketch-${index}.png`)}
              style={{ cursor: 'pointer', fontSize: '20px', marginBottom: '10px' }}
              title="Download Sketch"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCapture;
