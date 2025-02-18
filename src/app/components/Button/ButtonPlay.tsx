"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaPause, FaPlay } from "react-icons/fa6";

export const ButtonPlay = (props: any) => {
  const { item, className } = props;

  const handlePlay = () => {
    const audio = item.audio;
    const elementPlayAudio: any = document.querySelector(".play-audio");

    if (elementPlayAudio) {
      // Phát nhạc
      const elementAudio = elementPlayAudio.querySelector(".inner-audio");
      const elementSource = elementAudio?.querySelector("source");
      if (elementSource) {
        elementSource.src = audio;
      }
      if (elementAudio) {
        if (elementAudio.src !== audio) {
        
          elementAudio.load();
        }
        
        // Bật mute trước khi play để tránh bị chặn
        elementAudio.muted = true;
        const playPromise = elementAudio.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              elementAudio.muted = false; // Bật lại âm thanh
            })
            .catch((error:any) => {
              console.warn("Autoplay bị chặn, yêu cầu tương tác từ người dùng:", error);
            });
        }
      }

      // Hiển thị khối Play
      elementPlayAudio.classList.remove("hidden");

      // Hiển thị ảnh
      const elementImage = elementPlayAudio.querySelector(".inner-image");
      elementImage.src = item.image;
      elementImage.alt = item.title;

      // Hiển thị tiêu đề
      const elementTitle = elementPlayAudio.querySelector(".inner-title");
      elementTitle.innerHTML = item.title;

      // Hiển thị tên ca sĩ
      const elementSinger = elementPlayAudio.querySelector(".inner-singer");
      elementSinger.innerHTML = item.singer;

      // Hiển thị nút pause
      const elementButtonPlay = elementPlayAudio.querySelector(".inner-button-play");
      elementButtonPlay.classList.add("play");

      // Lấy ra tổng thời gian
      const elementPlayTimeCurrent = elementPlayAudio.querySelector(".inner-play-time .inner-current");
      const elementPlayTimeTotal = elementPlayAudio.querySelector(".inner-play-time .inner-total");
      elementAudio.onloadedmetadata = () => {
        const totalTime = Math.floor(elementAudio.duration);
        elementPlayTimeTotal.max = totalTime;

        // Lấy ra thời gian hiện tại
        elementAudio.ontimeupdate = () => {
          const currentTime = elementAudio.currentTime;
          const percent = (currentTime * 100) / totalTime;
          elementPlayTimeCurrent.style.width = `${percent}%`;
          elementPlayTimeTotal.value = currentTime;
        };
        elementAudio.onended = () => {
          elementButtonPlay.classList.remove("play"); // Chuyển nút pause về play
        };
      };

      // Xóa class active cho bài hát trước đó đang phát
      const elementSongOld = document.querySelector(`[song-id].active`);
      if (elementSongOld) {
        elementSongOld.classList.remove("active");
      }

      // Thêm class active cho bài hát
      const elementSong = document.querySelector(`[song-id="${item.id}"]`);
      const elementPause = elementSong?.querySelector(".inner-element-pause");
      const elementPlay = elementSong?.querySelector(".inner-element-play");

      if (elementPause?.classList.contains("hidden")) {
        elementPause.classList.remove("hidden");
        elementPlay?.classList.add("hidden");
        elementButtonPlay.classList.add("play");

        // Kiểm tra xem audio có đang phát hay không trước khi play
        if (elementAudio.paused) {
          const playPromise = elementAudio.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                elementAudio.muted = false; // Bật lại âm thanh sau khi play thành công
              })
              .catch((error:any) => {
                console.warn("Autoplay bị chặn, yêu cầu tương tác từ người dùng:", error);
              });
          }
        }
      } else {
        elementPause?.classList.add("hidden");
        elementPlay?.classList.remove("hidden");
        elementButtonPlay.classList.remove("play");
        elementAudio.pause();
        
      }
      elementSong?.classList.add("active");
    }
  };

  return (
    <>
      <button className={className} onClick={handlePlay}>
        <FaPlay className="inner-element-play" />
        <FaPause className="inner-element-pause hidden" />
      </button>
    </>
  );
};
