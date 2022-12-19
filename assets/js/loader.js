if (window.location.pathname == "/") {
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.visibility = "hidden";
    console.log("yo");
  });
}
