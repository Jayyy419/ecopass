function setNightModeStyle() {
  const themeLink = document.getElementById("theme-style");
  if (themeLink) {
    themeLink.setAttribute("href", "6B_AboutNightMode.css");
  }
}

function removeNightModeStyle() {
  const themeLink = document.getElementById("theme-style");
  if (themeLink) {
    themeLink.setAttribute("href", "6B_About.css");
  }
}

function toggleNightMode() {
    const currentTheme = document.getElementById("theme-style").getAttribute("href");
    const lightTheme = "6B_About.css";
    const darkTheme = "6B_AboutNightMode.css";
  
    // Check the current theme and switch to the opposite
    const newTheme = currentTheme === lightTheme ? darkTheme : lightTheme;
  
    // Update the theme file link to apply the new theme
    document.getElementById("theme-style").setAttribute("href", newTheme);
  
    // Save the user's preference in Local Storage
    localStorage.setItem("nightMode", newTheme === darkTheme);
  }


// Apply night mode preference on page load
const nightModePref = localStorage.getItem("nightMode");
if (nightModePref === "true") {
  setNightModeStyle();
} else {
  removeNightModeStyle();
}

document.getElementById("nightModeToggleBtn").addEventListener("click", toggleNightMode);
