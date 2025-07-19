
export default function scrollNavigation() {
    const sectionMap = {
      Home: "hero",
      "Work Spaces": "work-spaces",
      "About Us": "about-section",
      "Our Mission": "mission-vision-section",
      Services: "services-section",
      Events: "events-section",
      "Honor List": "honor-section",
      "Contact Us": "contact-section",
      "Data Policy": "policy-section",
      Workspace: "work-spaces", 
    };
  
    for (const key in sectionMap) {
      const id = sectionMap[key];
      const section = document.querySelector("." + id);
      if (section && !section.id) {
        section.id = id;
      }
    }
  
    const navLinks = document.querySelectorAll(".nav-links a, .footer-link");
    navLinks.forEach((link) => {
      const text = link.textContent.trim();
      if (sectionMap[text]) {
        link.href = "#" + sectionMap[text];
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.getElementById(sectionMap[text]);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
          }
        });
      }
    });
  
    const workspaceBtns = document.querySelectorAll(".workspace-btn");
    workspaceBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const workspacesSection = document.getElementById("work-spaces");
        if (workspacesSection) {
          workspacesSection.scrollIntoView({ behavior: "smooth", block: "start" });
          workspacesSection.setAttribute("tabindex", "-1");
          workspacesSection.focus({ preventScroll: true });
        }
      });
    });
  
    const policyBtn = document.querySelector(".policy-btn");
    if (policyBtn) {
      policyBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const home = document.getElementById("hero");
        if (home) {
          home.scrollIntoView({ behavior: "smooth", block: "start" });
          home.setAttribute("tabindex", "-1");
          home.focus({ preventScroll: true });
        }
      });
    }
  }
  