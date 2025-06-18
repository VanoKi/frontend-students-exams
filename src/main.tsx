type Status = "Stopped" | "Playing" | "Paused"

type PlayerState = {
  volume: number // in percents
  trackUrl: string // 'https://blabla.com/track01.mp3',
  currentPlayPosition: number // milliseconds,
  status: Status
}

const playerReducer = (state: PlayerState, action: any) => {
  switch (action.type) {
    case "TRACK-STATUS-CHANGED":
      return {
        ...state,
        status: action.status,
      }
    default:
      return state
  }
}

export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })

const state: PlayerState = {
  status: "Stopped",
  currentPlayPosition: 1213,
  trackUrl: "https://blabla.com/track01.mp3",
  volume: 100,
}

const newState = playerReducer(state, XXX)
console.log(newState.status === "Paused")

// Напишите вместо XXX правильный вызов правильного AC, чтобы в консоли было true
