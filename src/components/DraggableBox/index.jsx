


import React, { useState } from 'react';
import styles from './index.module.scss';
import BottomSheet from './BottomSheet';
import VideoComponent from './VideoComponent';
import Menu from './Menu';
import Menu2 from './Menu2';


const DraggableBox = () => {
  const [isClosed, setIsClosed] = useState(true);
  const [currentVideo, setCurrentVideo] = useState('https://toot.one/rawai/ar/1.mp4');
  const [muted, setMuted] = useState(true);
  const [showElements, setShowElements] = useState(false);

  const [showNewMenu, setShowNewMenu] = useState(false);
  // NEW LOGIC

  const [isMenu, setIsMenu] = useState(true);


  return (
    <div className={styles.main_container}>


      {showNewMenu !== true && showElements !== true &&
        <div className={styles.openShowMenu} onClick={() => setShowNewMenu(true)}>
          <img src="/assets/imgs/003.png" alt="" />
        </div>
      }

      <VideoComponent
        muted={muted}
        setMuted={setMuted}
        isClosed={isClosed}
        currentVideo={currentVideo}
        setIsClosed={setIsClosed}



        showNewMenu={showNewMenu}
        setShowNewMenu={setShowNewMenu}



        isMenu={isMenu}
        setIsMenu={setIsMenu}
      />

      <Menu
        isMenu={isMenu}
        setIsMenu={setIsMenu}
        showElements={showElements}
        setShowElements={setShowElements}
        setCurrentVideo={setCurrentVideo}
        setMuted={setMuted}

      />

      <Menu2
        showNewMenu={showNewMenu}
        setShowNewMenu={setShowNewMenu}
        setIsClosed={setIsClosed}
        setCurrentVideo={setCurrentVideo}
        setMuted={setMuted}
        currentVideo={currentVideo}
      />






      {/* <BottomSheet
        isClosed={isClosed}
        setIsClosed={setIsClosed}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
        setMuted={setMuted}
      /> */}

    </div>
  );
};

export default DraggableBox;