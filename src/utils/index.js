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
        if (Array.isArray(animationClass)) {
          animationClass.forEach(a => entry.target.classList.add(a));
        } else {
          entry.target.classList.add(animationClass);
        }
      }
    });
  });

  observer.observe(document.querySelector(elementToObserve));
};

export const getYearsOfExperience = (startYear, startMonth) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // 1-indexed (January is 1)
  
  let years = currentYear - startYear;
  
  // If the current month is before your start month, you haven't completed that full year yet
  if (currentMonth < startMonth) {
    years--;
  }
  
  return years + "+"; // Outputs "10+" as of July 2026 onwards
}

