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
const hiddenElements = document.querySelectorAll('.fadeLeftOnLoad');
hiddenElements.forEach((element) =>  observer.observe(element));

document.addEventListener('DOMContentLoaded', function() {
  var loadMoreItems = document.querySelectorAll('.loadMoreItems');

  for (var i = 0; i < 8; i++) {
      if (loadMoreItems[i]) {
          loadMoreItems[i].classList.remove('loadMoreItems');
          loadMoreItems[i].style.display = 'flex';
      }
  }
});

// When button loadMoreButton is clicked it will remove class some from element
document.addEventListener('DOMContentLoaded', function() {
  var loadMoreButton = document.querySelector('.loadMoreButton');

  loadMoreButton.addEventListener('click', function() {
      var divsWithClass = document.querySelectorAll('.loadMoreItems');

      // Remove class some from first 4 elements
      for (var i = 0; i < 4 && i < divsWithClass.length; i++) {
          divsWithClass[i].classList.remove('loadMoreItems');
          divsWithClass[i].style.display = 'flex';
      }

      var divsWithClassAfterRemoval = document.querySelectorAll('.loadMoreItems');

      if (divsWithClassAfterRemoval.length === 0) {
          loadMoreButton.style.display = 'none';
      }
  });
});


// Lazy loading images
const blurredImageDiv = document.querySelectorAll(".blur-load")
blurredImageDiv.forEach(div => {
  const img = div.querySelector("img")
  function loaded() {
    div.classList.add("loaded")
  }
  
  if (img.complete) {
    loaded()
  } else {
    img.addEventListener("load", loaded)
  }
});