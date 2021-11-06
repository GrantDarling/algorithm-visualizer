import { useContext } from "react";
import { ShepherdTour, ShepherdTourContext } from "react-shepherd";

const tourOptions = {
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
      label: "×",
    },
  },
  useModalOverlay: true,
};

function Button() {
  const tour: any = useContext(ShepherdTourContext);

  return (
    <button className="button dark" onClick={tour.start}>
      Take The Tour!
    </button>
  );
}

const steps: any = [
  {
    id: "intro",
    arrow: false,
    attachTo: { element: ".first-element", on: "bottom" },
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
    attachTo: { element: ".fStzJL", on: "bottom" },
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
    attachTo: { element: ".kWtcMl", on: "bottom" },
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
    attachTo: { element: ".VkvmM", on: "bottom" },
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
    attachTo: { element: ".rgmXX", on: "bottom" },
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
    attachTo: { element: ".hAcwKo", on: "bottom" },
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

export const Tours = () => {
  return (
    <>
      <ShepherdTour steps={steps} tourOptions={tourOptions}>
        <Button />
      </ShepherdTour>
    </>
  );
};
