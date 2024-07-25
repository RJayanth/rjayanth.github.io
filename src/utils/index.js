/**
 * An utility function to add animation class to target element. The animation class gets added When the the elements instersects the view.
 * @param {*} elementToObserve A classname string to observe 
 * @param {*} customClass A custom class 
 */
export const elementOnScrollObserver = (elementToObserve, animationClass) => {
  const observer = new IntersectionObserver((entries) => {
    // Loop over the entries
    entries.forEach((entry) => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add(animationClass);
      }
    });
  });

  observer.observe(document.querySelector(elementToObserve));
};
