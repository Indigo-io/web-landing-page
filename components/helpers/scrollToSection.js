export const scrollToSection = (sectionToScroll) => {
  const section = document.getElementById(sectionToScroll);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
