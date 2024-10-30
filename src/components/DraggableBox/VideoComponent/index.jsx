// import React, { useEffect, useRef } from 'react'
// import styles from './index.module.scss';

// const VideoComponent = ({
//   currentVideo,
//   muted,
//   setMuted,
//   isClosed,
//   isMenu,
//   setIsMenu
//   , }) => {
//   const videoRef = useRef(null);

//   const handleVideoEnd = () => {
//     // setIsClosed(false);
//     videoRef.current.pause();

//   };
//   const handleUnmute = () => {
//     if (videoRef.current) {
//       setMuted(false)

//       videoRef.current.play();
//       if (muted === true) {
//         // videoRef.current.muted = false;
//       }

//     }
//   };



//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = muted;
//       videoRef.current.play().catch((error) => {
//         console.error('Autoplay failed:', error);
//       });



//       // if (isClosed === false) {
//       //   videoRef.current.pause();
//       // }

//       //   videoRef.current.pause();
//       // }


//       if (isMenu === true) {
//         videoRef.current.pause();
//       }


//     }

//   }, [currentVideo, muted, isClosed,]);





//   return (
//     <>
//       <div className={styles.video_container} onClick={handleUnmute}>
//         <video
//           key={currentVideo}
//           ref={videoRef}
//           className={styles.videoElement}
//           src={currentVideo}
//           controls
//           autoPlay
//           playsInline
//           onEnded={handleVideoEnd}
//         />
//       </div>

//     </>
//   )
// }

// export default VideoComponent



// // +++++++++++++++++++++++++++++++




import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss';

const VideoComponent = ({ currentVideo, muted
  , setMuted, isClosed, setIsClosed, showElements,
  showNewMenu, setShowNewMenu
  , }) => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    videoRef.current.pause();
  };
  const handleUnmute = () => {
    if (videoRef.current) {
      setMuted(false)

      videoRef.current.play();
      if (muted === true) {
        // videoRef.current.muted = false;
      }

    }
  };



  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
      videoRef.current.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });



      // if (isClosed === false) {
      //   videoRef.current.pause();
      // }

      // if (showElements === true) {
      //   videoRef.current.pause();
      // }
      if (showNewMenu === true) {
        videoRef.current.pause();
      }


      if (showElements === true) {
        videoRef.current.pause();
      }


    }

  }, [currentVideo, muted, isClosed, showElements, showNewMenu]);







  return (
    <>
      <div className={styles.video_container} onClick={handleUnmute}>
        <video
          key={currentVideo}
          ref={videoRef}
          className={styles.videoElement}
          src={currentVideo}
          controls
          autoPlay
          playsInline
          onEnded={handleVideoEnd}
        />
      </div>
    </>
  )
}

export default VideoComponent



