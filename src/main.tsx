import { createRoot } from "react-dom/client"

export const YoutubeVideo = () => {
  return (
    <div>
      <VideoHeader />
      <VideoContent />
      <VideoStatistics />
    </div>
  )
}

const VideoHeader = () => {
  return <div>😀 Заголовок видео</div>
}

const VideoContent = () => {
  return <div>📼 Контент видео</div>
}

const VideoStatistics = () => {
  return <div>📊 Статистика лайков</div>
}

createRoot(document.getElementById("root")!).render(
  <div>
    <YoutubeVideo />
  </div>,
)

// Что нужно написать вместо ❗X, чтобы на экране увидеть:
// 😀 Заголовок видео
// 📼 Контент видео
// 📊 Статистика лайков
// ❗ Ответ дать минимально возможным объёмом кода
