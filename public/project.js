(function () {
  const projects = {
    tasso: {
      title: "Tasso",
      summary:
        "Tasso turns Google Sheets into API endpoints, and it was built using an AI-assisted workflow with agents, sub-agents, and reusable skills.",
      link: "",
      overview:
        "This project is built around a simple idea: let content creators keep working in a tool they already know, and let developers consume that content in a format they already trust.\n\nThere are two main audiences. The first is the creator, someone who updates content in Google Sheets and wants setup to feel easy and safe. The second is the developer, someone who only cares that the data is clean, reliable, and quick to integrate. The product experience is designed to connect those two people without forcing either one to learn the other's workflow. The goal is to make something that is normally technical feel simple and guided.",
      highlights: [
        "Built the product with Github Copilot, integrating Claude and Codex models with agent and sub-agent workflows that used MCP servers where needed",
        "Tasso's main value is translation: it takes spreadsheet content and turns it into something that feels like a real API.",
        "The product is designed for two very different users: non-technical creators and technical developers.",
        "The creator flow covers the full setup journey, from landing on the site to generating a shareable endpoint.",
        "The developer flow is intentionally short: receive the endpoint, inspect the data, and integrate it.",
      ],
      technology:
        "Next.js, React, TypeScript, Storybook, GitHub Copilot, agents/sub-agents, skills, MCP (Figma, Miro), multi-model AI support",
      image: "images/tasso.webp",
      imageAlt: "Tasso",
    },
    anywhere: {
      title: "Anywhere Real Estate Inc.",
      summary:
        "Ordering platform improvements focused on reliability, backend performance, and reduced agent task friction.",
      link: "https://anywhere.re",
      overview:
        "Contributed to a national internal ordering platform by improving data flow reliability and reducing failure points across ordering workflows.",
      highlights: [
        "Reduced backend error conditions through targeted Node.js and MongoDB updates",
        "Improved key ordering interactions in Angular for faster agent completion",
        "Worked in Agile cycles with product and engineering stakeholders",
      ],
      technology: "Angular, Node.js, Express, MongoDB, AWS",
      image: "images/anywhere.webp",
      imageAlt: "Anywhere Real Estate Inc. project",
    },
    sonnys: {
      title: "Sonny's Enterprises Inc.",
      summary:
        "IoT control software and cloud data pipeline work connecting hardware behavior with Azure-backed diagnostics.",
      link: "https://sonnysdirect.com",
      overview:
        "Built software that bridged mechanical hardware requirements with cloud-based systems so teams could monitor and troubleshoot events in near real time.",
      highlights: [
        "Implemented software logic for IoT dilution control scenarios",
        "Built event logging and diagnostics pathways backed by PostgreSQL",
        "Accelerated iteration loops for hardware-software integration",
      ],
      technology: "JavaScript, Microsoft Azure, PostgreSQL",
      image: "images/sonnys.webp",
      imageAlt: "Sonny's Enterprises Inc. project",
    },
    cardigan: {
      title: "Cardigan Donuts",
      summary:
        "End-to-end e-commerce platform project featuring multi-location ordering, delivery routing, and payment integration.",
      link: "https://cardigandonuts.com",
      overview:
        "Sole-engineered an ecommerce platform tailored to multi-location operations with location-aware inventory, delivery routing, and payment processing.",
      highlights: [
        "Improved online revenue by launching a streamlined customer ordering flow",
        "Implemented location-specific inventory and routing logic",
        "Delivered architecture through production deployment",
        "Used AI-assisted workflows to write and maintain automated tests",
        "Integrated Sentry-driven error reporting with automated fix workflows for faster resolution",
      ],
      technology: "React, Node.js, PostgreSQL, Google Maps API, Square API",
      image: "images/cardigan.webp",
      imageAlt: "Cardigan Donuts project",
    },
    hailscale: {
      title: "Hailscale",
      summary:
        "Lead full-stack project work for claims workflows, intake tooling, and automated inspection data handling.",
      link: "https://hailscale.com",
      overview:
        "Led architecture and implementation for a claims-focused platform to streamline intake, inspections, and reporting workflows.",
      highlights: [
        "Built intake and inspector tooling to reduce repetitive data entry",
        "Developed workflow support for scheduling and report readiness",
        "Owned technical strategy and full-stack implementation",
      ],
      technology: "JavaScript, React, Node.js, cloud-integrated workflows",
      image: "images/hailscale.webp",
      imageAlt: "Hailscale project",
    },
    "ice-docks": {
      title: "ICE Docks",
      summary:
        "Premium marine construction offering freeze-in docks and boardwalks engineered with HDPE pontoons and custom solutions for waterfront properties.",
      link: "https://icedocks.com",
      overview:
        "ICE Docks specializes in innovative dock and boardwalk systems designed to withstand harsh conditions while requiring no seasonal removal. The core technology centers on high-density polyethylene pontoons with proprietary fusion-welded joints stronger than the material itself, backed by a lifetime warranty. Every system is precision-manufactured at their Minnesota facility, rigorously tested, and installed by expert technicians. The company serves diverse applications from golf course bridges to fishing piers, residential waterfront, and park amenities.",
      highlights: [
        "HDPE pontoon technology with lifetime warranty and proprietary fusion-welded joints",
        "Freeze-in dock system allows docks to remain in water year-round without seasonal removal",
        "Precision manufacturing and quality testing at Minnesota facility before installation",
        "Expert installation and winterization services tailored to property needs",
        "Eco-friendly, rot-proof materials safe for water environments",
        "Customizable decking options with adjustable designs for changing water levels",
        "Applications span golf courses, fishing piers, residential, parks, boardwalks, and island bridges",
      ],
      technology: "Wordpress",
      image: "images/ice_docks.webp",
      imageAlt: "ICE Docks project",
    },
  };

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = id && projects[id];

  const titleEl = document.getElementById("projectTitle");
  const summaryEl = document.getElementById("projectSummary");
  const overviewEl = document.getElementById("projectOverview");
  const highlightsEl = document.getElementById("projectHighlights");
  const technologyEl = document.getElementById("projectTechnology");
  const linkEl = document.getElementById("projectLink");
  const imageEl = document.getElementById("projectImage");

  if (titleEl) {
    titleEl.textContent = project.title;
    document.title = project.title + " | Justus Witmer";
  }
  if (summaryEl) {
    summaryEl.textContent = project.summary;
  }
  if (overviewEl) {
    overviewEl.style.whiteSpace = "pre-line";
    overviewEl.textContent = project.overview;
  }
  if (technologyEl) {
    technologyEl.textContent = project.technology;
  }
  if (linkEl) {
    if (project.link) {
      linkEl.href = project.link;
      linkEl.style.display = "inline-block";
    } else {
      linkEl.style.display = "none";
    }
  }
  if (imageEl) {
    imageEl.src = project.image;
    imageEl.alt = project.imageAlt;
  }

  if (highlightsEl) {
    highlightsEl.innerHTML = "";
    project.highlights.forEach(function (highlight) {
      const li = document.createElement("li");
      li.textContent = highlight;
      highlightsEl.appendChild(li);
    });
  }
})();
