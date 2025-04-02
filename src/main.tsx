import { createRoot } from "react-dom/client"

const VideoHeader = (props: { videoName: string }) => {
  return <div>😀 {props.videoName}</div>
}

const VideoContent = (props: { videoContent: string }) => {
  return (
    <div>
      📼 <a href={props.videoContent}>{props.videoContent}</a>
    </div>
  )
}

const VideoDescription = (props: { videoDescription: string }) => {
  return <div>📑 {props.videoDescription}</div>
}

export const YoutubeVideo = (props: any) => {
  return (
    <div>
      <VideoHeader videoName={video.title} />
      <VideoContent videoContent={video.link} />
      <VideoDescription videoDescription={video.description} />
    </div>
  )
}

export const App = () => {
  const video = {
    title: "Samurai way",
    link: "https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8",
    description: "Best free react-course",
  }

  return <YoutubeVideo video={video} />
}

createRoot(document.getElementById("root")!).render(<App />)

// Что нужно написать вместо xxx yyy zzz, чтобы увидеть ожидаемый результат?
// Ответ дайте через пробел, пример: a={12} b={video.id} c={'hello'}
