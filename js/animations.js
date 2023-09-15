// This function shows hidden elements by adding the show class.
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  
  // This function gets all the elements with the hidden class and adds them to the observer.
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((element) =>  observer.observe(element));