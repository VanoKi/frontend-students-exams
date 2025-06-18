type Status = "Stopped" | "Playing" | "Paused"

type PlayerState = {
  volume: number // in percents
  trackUrl: string // 'https://blabla.com/track01.mp3',
  currentPlayPosition: number // milliseconds,
  status: Status
}

export const playerReducer = (state: PlayerState, action: any) => {
  switch (action.type) {
    case XXX:
      return {
        ...state,
        trackUrl: action.url,
      }
    default:
      return state
  }
}

export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })

// Какой тип должен быть вместо XXX?
