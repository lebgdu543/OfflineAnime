document.addEventListener('DOMContentLoaded', () => {
  const filterLinks = document.querySelectorAll('.tops-options a');
  const topsItemsOne = document.querySelectorAll('.tops-items-one');

  filterLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = event.target.dataset.filter;

      // Remove "active" class from all links
      filterLinks.forEach(l => l.classList.remove('active'));
      // Add "active" class to the clicked link
      event.target.classList.add('active');

      // Show/hide elements based on the filter
      topsItemsOne.forEach(item => {
        item.classList.toggle('show', filter === 'all' || item.classList.contains(filter));
      });
    });
  });
});

function myFunction() {
  // Get the text field
  var copyText = document.getElementById("myInput");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
