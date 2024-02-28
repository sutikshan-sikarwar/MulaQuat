import React, { useState, useEffect, useRef } from 'react';

const VideoMicControls = () => {
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [micEnabled, setMicEnabled] = useState(false);
  const [stream, setStream] = useState(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();
  const audioContext = useRef();
  const analyser = useRef();

  useEffect(() => {
    if (!stream) {
      // Get user media (camera and microphone)
      navigator.mediaDevices.getUserMedia({ video: videoEnabled, audio: micEnabled })
        .then(mediaStream => {
          setStream(mediaStream);
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
          }
          // Initialize audio context and analyzer
          audioContext.current = new AudioContext();
          analyser.current = audioContext.current.createAnalyser();
          const source = audioContext.current.createMediaStreamSource(mediaStream);
          source.connect(analyser.current);
          // Start microphone activity detection
          detectMicrophoneActivity();
        })
        .catch(error => {
          console.error('Error accessing user media:', error);
        });
    } else {
      // Toggle video and microphone tracks
      stream.getTracks().forEach(track => {
        if (track.kind === 'video') {
          track.enabled = videoEnabled;
        } else if (track.kind === 'audio') {
          track.enabled = micEnabled;
        }
      });
    }

    // Cleanup function to stop media stream and audio context
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        setStream(null);
      }
      if (audioContext.current) {
        audioContext.current.close();
      }
    };
  }, [videoEnabled, micEnabled]);

  const toggleVideo = () => {
    setVideoEnabled(prev => !prev);
  };

  const toggleMic = () => {
    setMicEnabled(prev => !prev);
  };

  const detectMicrophoneActivity = () => {
    const bufferLength = analyser.current.fftSize;
    const dataArray = new Uint8Array(bufferLength);

    const detect = () => {
      analyser.current.getByteTimeDomainData(dataArray);
      const average = Array.from(dataArray).reduce((acc, val) => acc + val, 0) / bufferLength;
      setIsSpeaking(average > 128); // Adjust threshold as needed
      requestAnimationFrame(detect);
    };

    detect();
  };

  return (
    <div>
      <button onClick={toggleVideo}>{videoEnabled ? 'Disable Video' : 'Enable Video'}</button>
      <button onClick={toggleMic}>{micEnabled ? 'Mute Mic' : 'Unmute Mic'}</button>
      {/* Display video stream if enabled */}
      {videoEnabled && <video ref={videoRef} autoPlay muted />}
      {/* Display microphone activity animation */}
      {micEnabled && isSpeaking && <canvas ref={canvasRef} width={50} height={50} style={{ backgroundColor: 'red' }} />}
    </div>
  );
}

export default VideoMicControls;
