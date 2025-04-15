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
      return this.phase[this.currentPhaseIndex];
    },
  },
  methods: {
    startTimer() {
      //timer initiation
      this.isActive = true;
      this.isPaused = false;
      this.currentPhaseIndex = 0;
      this.phaseTimeRemaining = this.phases[0].duration;
      this.sessionTimeRemaining = this.minutes * 60;

      // playing music
      //this.playAudio('breathe-in');
    },
  },
});
