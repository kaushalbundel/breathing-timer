import { useTimer } from "../composables/useTimer";
// "technique" is appended before the id as defined in the available techniques list in the data method of the main (app.js) component
app.component("technique-478", {
  template: "#technique-478-template",
  data() {
    return {
      name: "4-7-8 Breathing",
      minutes: 5, // unless specifed by the user, the default value is 5 minutes
      isActive: false,
      isPaused: false,
      currentPhaseIndex: 0,
      phaseTimeRemaining: 4,
      sessionTimeRemaining: 0,
      timerInterval: null, // stores the timer related logic, is needed so as to clear out the time related information as the timer is stopped in between by the user
      phases: [
        { name: "breathe-in", duration: 4, instruction: "Breathe-in" },
        { name: "hold", duration: 7, instruction: "Hold" },
        { name: "breathe-out", duration: 8, instruction: "Breathe-out" },
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
      //imports time from composable
      const { formatTime } = useTimer();
      return formatTime(seconds);
    },

    playAudio(phaseName) {
      //import from composable
      const { playAudio } = useTimer();
      playAudio(phaseName);
    },
    startTimer() {
      //timer initiation
      this.isActive = true;
      this.isPaused = false;
      this.currentPhaseIndex = 0;
      this.phaseTimeRemaining = this.phases[0].duration;
      this.sessionTimeRemaining = this.minutes * 60;

      // playing music
      //this.playAudio('breathe-in');

      this.timerInterval = setInterval(() => {
        if (this.isPaused) {
          return;
        }

        // decrease session time
        this.sessionTimeRemaining--;

        //decrease the phase time
        this.phaseTimeRemaining--;

        // checking if the phase time is complete and moving to another phase time
        if (this.phaseTimeRemaining <= 0) {
          this.currentPhaseIndex =
            (this.currentPhaseIndex + 1) % this.phases.length;
          this.phaseTimeRemaining = this.currentPhase.duration;

          //play audio for current phase
          // this.playAudio(`${this.currentPhase.name}`);
        }
        //checking if the session time is complete
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
      this.isActive = false;
    },
    togglePause() {
      this.isPaused = !this.isPaused;
    },
  },
});
