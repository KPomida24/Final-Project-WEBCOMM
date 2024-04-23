
document.getElementById('scrollToTopBtn').addEventListener('click', function() {
  // Scroll to the top of the page smoothly
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

document.getElementById('scrollToBottomBtn').addEventListener('click', function() {
  // Scroll to the top of the page smoothly
  window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
  });
});

function sanityCheck() {
  console.log('!Sanity check: all good!');
}

sanityCheck();