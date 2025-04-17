import { createApp } from "https://unpkg.com/vue@3.3.4/dist/vue.esm-browser.js";
import Technique478 from "./components/technique-478.js";
import TechniqueBox from "./components/technique-box.js";
const app = createApp({
  data() {
    return {
      currentView: "techniques-list",
      selectedTechnique: null,
      availableTechniques: [
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
    selectTechnique(techniqueId) {
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

// register components
app.component("technique-478", Technique478);
app.component("technique-box", TechniqueBox);

// App mount
app.mount("#app");
