const app = Vue.createApp({
  data() {
    return {
      currentView: "techniques-list",
      selectedTechnique: null,
      availableTechnique: [
        {
          id: "478",
          name: "4-7-8 Breathing",
          description:
            "Breathe in for 4 secs, Hold Breath for 7 secs, exhale for 8 secs. Helps reduce anxiety.",
        },
        {
          id: "box",
          name: "Box Breathing",
          description:
            "Equal counts of 4 for inhale, hold, exhale and pause. Builds mental focus.",
        },
      ],
    };
  },
  methods: {
    selectedTechnique(techniqueId) {
      (this.selectedTechnique = techniqueId),
        (this.currentView = "timer-setup");
    },
    goToTechniquesList() {
      this.currentView = "techniques-list";
    },
  },
  computed: {
    // computed data
  },
});

// App mount
app.mount("#app");
