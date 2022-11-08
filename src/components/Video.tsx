import {
  Pause,
  PlayArrow,
  Replay as ReplayIcon,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Video.module.sass";
import { HTMLMotionProps, motion } from "framer-motion";

export interface IVideoProps {
  src: string;
  hasReplay: boolean;
}

interface IReplayProps {
  shown: boolean;
  onReplay: () => any;
}

const transitionValues = {
  duration: 0.3,
};

const fadeInAnimation: HTMLMotionProps<any> = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 20,
  },
  ...transitionValues,
};

const Replay = (props: IReplayProps) => {
  const { shown, onReplay } = props;
  return (
    <motion.button
      onClick={onReplay}
      transition={transitionValues}
      initial={{ opacity: 0, y: 20 }}
      animate={shown ? { opacity: 0.5, y: 0 } : undefined}
      className={styles.replay}
      disabled={!shown}
    >
      <ReplayIcon />
      <div className="font-light">Volver a reproducir</div>
    </motion.button>
  );
};

const Video = (props: IVideoProps) => {
  const { src, hasReplay } = props;

  const [muted, setMuted] = useState(true);
  const [replay, setReplay] = useState(false);
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = (replay?: boolean) => {
    if (videoRef.current) {
      if (replay) {
        videoRef.current.currentTime = 0;
        videoRef.current
          .play()
          .then((a) => console.log(a))
          .catch((e) => console.log(e));
      }
      videoRef.current.play();
      setPlaying(true);
      setReplay(false);
    }
  };

  const handleUnmute = () => {
    if (videoRef.current) {
      if (videoRef.current.muted) {
        videoRef.current.muted = false;
        setMuted(false);
      } else {
        videoRef.current.muted = true;
        setMuted(true);
      }
    }
  };

  const handlePause = () => {
    const video = videoRef.current;
    if (video) {
      const isPlaying = !!(
        video.currentTime > 0 &&
        !video.paused &&
        !video.ended &&
        video.readyState > 2
      );
      if (isPlaying) {
        video.pause();
        setPlaying(false);
      } else {
        handlePlay();
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current) {
        videoRef.current.addEventListener("ended", () => {
          setPlaying(false);
          if (hasReplay) setReplay(true);
        });
      }
    }
  }, [muted, replay, playing, hasReplay]);

  return (
    <div className={styles.root}>
      <div className={styles.videoRoot}>
        <motion.video
          initial={{ filter: "grayscale(100%)" }}
          animate={playing ? { filter: "grayscale(0%)" } : undefined}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
          onClick={handlePause}
          preload="metadata"
          src={src}
          ref={videoRef}
          playsInline
          muted
        >
          Mmmmh, parece que tu navegador no puede reproducir videos (?
        </motion.video>
        <motion.div
          {...fadeInAnimation}
          className={`${styles.controlsRoot} p-3`}
        >
          <IconButton size="medium" onClick={handlePause} color="inherit">
            {playing ? (
              <Pause fontSize="medium" />
            ) : (
              <PlayArrow fontSize="medium" />
            )}
          </IconButton>
          <IconButton size="medium" onClick={handleUnmute} color="inherit">
            {muted ? (
              <VolumeOff fontSize="medium" />
            ) : (
              <VolumeUp fontSize="medium" />
            )}
          </IconButton>
        </motion.div>
      </div>
      {hasReplay && <Replay shown={replay} onReplay={() => handlePlay(true)} />}
    </div>
  );
};

export default Video;
