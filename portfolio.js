// Portfolio projects data -
const projects = [

  {
      title: "Zikki Website",
      image: "assets/Zikki.png",
      description: "Built a Squarespace e-commerce website using custom code. Worked with their existing brand identity and created structure, design, and content in collaboration. Optimized for accessibility, responsiveness and SEO.",
      link: "https://zikkidesign.com",
       linkText: "Visit Zikki Design",
       note: "*This project has been handed over to the client. Later updates and design changes may differ from the original delivery."
  },
{
  title: "Intention Hub",
  image: "assets/int.png",
  description: "A fully custom-coded website built from scratch without using templates or CMS platforms. A intention hub that helps users set intentions and goals with an AI bot for guidance and a supportive community.",
  link: "https://intentionhub.netlify.app/",
   linkText: "Visit Intention Hub",
   note: "*This project is still being developed and updated."
},
{
  title: "HeidikaYoga",
  image: "assets/heidi1.png",
  description: "Built a Squarespace e-commerce website using custom code. Worked with their existing brand identity and created structure, design, and content in collaboration. Optimized for accessibility, responsiveness, and SEO.",
  link: "https://heidikayoga.com",
   linkText: "Visit Heidikayoga",
  note: "*This project is still being developed. Published soon."
}
];

// Render projects
function renderProjects() {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(project => `
      <div class="project-card">
      <img src="${project.image}" alt="${project.title} preview" class="project-image">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
             ${project.note ? `<p class="project-note" style="font-size: 0.7rem;">${project.note}</p>` : ""}
         
         <a href="${project.link}" target="_blank" rel="noopener noreferrer">${project.linkText}</a>
      
      </div>
  `).join('');
}
// Run when DOM is loaded
if (document.querySelector('.portfolio-projects')) {
  renderProjects();
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});




  