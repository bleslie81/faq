function myFunction(element,label) {
    let x = document.getElementById(element);
    let y = document.getElementById(label);
    if (x.style.display === "none") {
      x.style.display = "block";
      x.style.textAlign = "justify"
      x.style.padding = "10px 0 0 0"
      y.style.fontWeight = "bold";
    } else {
      x.style.display = "none";
      y.style.fontWeight = "normal";
    }
  }