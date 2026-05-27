import { useEffect, useState } from 'react';
import { GestureRecognizer, FilesetResolver } from '@mediapipe/tasks-vision';

export const useGestureControl = (videoElementRef) => {
  const [gesture, setGesture] = useState(null);
  const [recognizer, setRecognizer] = useState(null);

  useEffect(() => {
    const initializeGestureRecognizer = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"
      );
      const gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
          delegate: "GPU"
        },
        runningMode: "VIDEO"
      });
      setRecognizer(gestureRecognizer);
    };
    
    initializeGestureRecognizer();
  }, []);

  useEffect(() => {
    if (!recognizer || !videoElementRef.current) return;
    
    let animationFrameId;
    const predictWebcam = () => {
      const nowInMs = Date.now();
      const results = recognizer.recognizeForVideo(videoElementRef.current, nowInMs);
      
      if (results.gestures.length > 0) {
        setGesture(results.gestures[0][0].categoryName); // e.g., "Closed_Fist", "Open_Palm", "Thumb_Up"
      }
      animationFrameId = requestAnimationFrame(predictWebcam);
    };
    
    predictWebcam();
    return () => cancelAnimationFrame(animationFrameId);
  }, [recognizer, videoElementRef]);

  return gesture;
};