document.addEventListener('DOMContentLoaded', function(){
  // For smooth scroll
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    });
  });

  // Contact form validation
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // Basic validation
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(!name || !email || !message){
      formMsg.textContent = "Please fill out all fields.";
      return;
    }
    // Simple email format check
    const emailPattern = /^[^@]+@[^@]+.[^@]+$/;
    if(!emailPattern.test(email)){
      formMsg.textContent = "Please provide a valid email address.";
      return;
    }
    formMsg.textContent = "Thank you for reaching out! (No server setup, so message will not be sent.)";
    form.reset();
  });
});