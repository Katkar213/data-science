let arr = [
    "Diploma in Data Science With University Certificate",
    "Corporate Training",
    "On Job Training With Live Projects",
    "Diploma in Data Science With University Certificate"
  ];
  let i = 0;
  setInterval(function() {
    document.getElementById("detail-box").innerText = arr[i];
    i = (i + 1) % arr.length;
  }, 2000); // Change text every 3 seconds



