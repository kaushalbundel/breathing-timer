// composables
// functions that are basically helper functions used throughout the application

export function useTimer() {
  // format data and time in the format HH:MM
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  //plays audio for different phases
  function playAudio(phaseName) {
    const audio = new Audio(`assets/${phaseName}.mp3`);
    audio.play().catch((e) => console.log("Audio play error:", e));
  }

  //clearning timer reference
  function clearTimer(timerRef) {
    if (timerRef) {
      clearTimer(timerRef);
      return null;
    }
    return timerRef;
  }

  return {
    useTimer,
    playAudio,
    clearTimer,
  };
}
