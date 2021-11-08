export const tourOptions = {
  defaultStepOptions: {
    classes: "shepherd-theme-custom",
    cancelIcon: {
      enabled: true,
      label: "×",
    },
  },
  useModalOverlay: true,
};

export const steps: any = [
  {
    id: "intro",
    arrow: false,
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back",
      },
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next",
      },
    ],
    highlightClass: "highlight",
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: "Welcome To The Algorithm Visualizer!",
    text: ["<p>Thanks for taking the time to check it out :)</p>"],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      },
    },
  },
  {
    id: "algorithm-type",
    attachTo: { element: "#type-selector", on: "bottom" },
    beforeShowPromise: function () {
      return new Promise<void>(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back",
      },
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next",
      },
    ],
    classes: "custom-class-name-1 custom-class-name-2",
    highlightClass: "highlight",
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: "Select Algorithm Type",
    text: [
      "This controller allows you to select different algorithm types. As of right now, only sorting algorithms are available.",
    ],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      },
    },
  },
  {
    id: "algorithm-selector",
    attachTo: { element: "#selector", on: "bottom" },
    beforeShowPromise: function () {
      return new Promise<void>(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back",
      },
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next",
      },
    ],
    classes: "custom-class-name-1 custom-class-name-2",
    highlightClass: "highlight",
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: "Algorithm Selector",
    text: ["This controller allows you to change the current algorithm"],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      },
    },
  },
  {
    id: "array size",
    attachTo: { element: "#create-grid", on: "bottom" },
    beforeShowPromise: function () {
      return new Promise<void>(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back",
      },
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next",
      },
    ],
    classes: "custom-class-name-1 custom-class-name-2",
    highlightClass: "highlight",
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: "Array Size",
    text: [
      "This controller allows you to change the current array size in real time. The array size has a maximum.",
    ],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      },
    },
  },
  {
    id: "complexity",
    attachTo: { element: "#complexity", on: "bottom" },
    beforeShowPromise: function () {
      return new Promise<void>(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back",
      },
      {
        classes: "shepherd-button-primary",
        text: "Next",
        type: "next",
      },
    ],
    classes: "custom-class-name-1 custom-class-name-2",
    highlightClass: "highlight",
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: "Complexity",
    text: [
      "This field shows you the time and space complexity of the current algorithm (worst case)",
    ],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      },
    },
  },
  {
    id: "visualize",
    attachTo: { element: "#visualization-button", on: "bottom" },
    beforeShowPromise: function () {
      return new Promise<void>(function (resolve) {
        setTimeout(function () {
          window.scrollTo(0, 0);
          resolve();
        }, 500);
      });
    },
    buttons: [
      {
        classes: "shepherd-button-primary",
        text: "Back",
        type: "back",
      },
      {
        classes: "shepherd-button-primary",
        text: "Finish",
        type: "next",
      },
    ],
    classes: "custom-class-name-1 custom-class-name-2",
    highlightClass: "highlight",
    scrollTo: false,
    cancelIcon: {
      enabled: true,
    },
    title: "Visualization Button",
    text: ["This button starts the visualization (obviously!)"],
    when: {
      show: () => {
        console.log("show step");
      },
      hide: () => {
        console.log("hide step");
      },
    },
  },
];
