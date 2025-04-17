import { useTimer } from "../composables/useTimer.js";

export default {
  template: "#technique-box-template",
  data() {
    return {
      name: "Box Breathing",
      minutes: 5,
      isActive: false,
      isPaused: false,
      currentPhaseIndex: 0,
      phaseTimeRemaining: 4,
      sessionTimeRemaining: 0,
      timerInterval: null,
      phases: [
        { name: "breathe-in", duration: 4, instruction: "Breathe In" },
        { name: "hold", duration: 4, instruction: "Hold" },
        { name: "breathe-in", duration: 4, instruction: "Breathe In" },
        { name: "hold", duration: 4, instruction: "Hold" },
      ],
    };
  },
  computed: {
    currentPhase() {
      return this.phases[this.currentPhaseIndex];
    },
  },
  methods: {
    formatTime(seconds) {
      const { formatTime } = useTimer();
      return formatTime(seconds);
    },

    playAudio(phaseName) {
      const { playAudio } = useTimer();
      playAudio(phaseName);
    },

    startTimer() {
      this.isActive = true;
      this.isPaused = false;
      this.currentPhaseIndex = 0;
      this.phaseTimeRemaining = this.phases.duration;
      this.sessionTimeRemaining = this.minutes * 60;

      //play music
      // this.playAudio("breathe-in")

      this.timerInterval = setInterval(() => {
        // if pause is clicked => return
        if (this.isPaused) return;
        // reduce sessionTimeRemaining
        this.sessionTimeRemaining--;
        //reduce phaseTimeRemaining
        this.phaseTimeRemaining--;

        // if phaseTimeRemaining is over then switch to next phase
        if (this.phaseTimeRemaining <= 0) {
          this.currentPhaseIndex =
            (this.currentPhaseIndex + 1) % this.phases.length;
          this.phaseTimeRemaining = this.currentPhase.duration;

          //play audio for current phase
          //this.playAudio(`${this.currentPhase.name}`)
        }

        //if sessionTimeRemaining is over then end the session
        if (this.sessionTimeRemaining <= 0) {
          this.endSession();
          alert("Breathing Session Complete");
        }
      }, 1000);
    },
    endSession() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
      this.inactive = false;
    },
    togglePause() {
      this.togglePause = !this.togglePause;
    },
  },
};
