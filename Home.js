



const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".text", {
    strings: ["Java Developer", "Full Stack Developer", "Angular Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });
});

const form = document.getElementById("contactForm");

const formMessage =
document.getElementById("formMessage");

// EMAILJS PUBLIC KEY
emailjs.init("ABcDe12345XYZ");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  // INPUT VALUES
  const name =
  document.getElementById("name").value.trim();

  const email =
  document.getElementById("email").value.trim();

  const subject =
  document.getElementById("subject").value.trim();

  const message =
  document.getElementById("message").value.trim();

  // VALIDATION
  if(name === "" || email === "" || message === "") {

    formMessage.style.color = "red";

    formMessage.innerText =
    "Please fill all required fields.";

    return;
  }

  // SEND EMAIL
  emailjs.send(
     "service_abcd123",
  "template_xyz456",

    {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    }
  )

  .then(function() {

    formMessage.style.color = "#6c63ff";

    formMessage.innerText =
    "Message Sent Successfully!";

    form.reset();

  })

  .catch(function(error) {

    console.log(error);

    formMessage.style.color = "red";

    formMessage.innerText =
    "Failed to send message.";

  });

});
/*// DOM Elements
const navbar = document.getElementById("navbar")
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const navLinks = document.querySelectorAll(".nav-link")
const contactForm = document.getElementById("contactForm")
const downloadBtn = document.getElementById("downloadResume")

// Mobile Navigation Toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Active Navigation Link Highlighting
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section")
  const scrollPos = window.scrollY + 100

  sections.forEach((section) => {
    const top = section.offsetTop
    const bottom = top + section.offsetHeight
    const id = section.getAttribute("id")
    const navLink = document.querySelector(`.nav-link[href="#${id}"]`)

    if (scrollPos >= top && scrollPos <= bottom) {
      navLinks.forEach((link) => link.classList.remove("active"))
      if (navLink) {
        navLink.classList.add("active")
      }
    }
  })
}

window.addEventListener("scroll", updateActiveNavLink)

// Smooth Scrolling for Navigation Links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    const targetId = link.getAttribute("href")
    const targetSection = document.querySelector(targetId)

    if (targetSection) {
      const offsetTop = targetSection.offsetTop - 70
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Scroll Animation for Elements
function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in-up")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("visible")
    }
  })
}

window.addEventListener("scroll", animateOnScroll)

// Add fade-in-up class to elements that should animate
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = [
    ".hero-content",
    ".about-content",
    ".skill-category",
    ".project-card",
    ".resume-content",
    ".contact-content",
  ]

  animatedElements.forEach((selector) => {
    const elements = document.querySelectorAll(selector)
    elements.forEach((element) => {
      element.classList.add("fade-in-up")
    })
  })

  // Initial check for visible elements
  animateOnScroll()
})

// Typing Animation for Hero Subtitle
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    } else {
      element.classList.add("typing-animation")
    }
  }

  type()
}

// Initialize typing animation
document.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.querySelector(".hero-subtitle")
  const text = " Full Stack Developer | Web Enthusiast "
  setTimeout(() => {
    typeWriter(subtitle, text, 50)
  }, 1000)
})

// ----------------- Contact Form Validation + Submission -----------------
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault()
  clearErrors()

  const formData = new FormData(contactForm)
  const name = formData.get("name").trim()
  const email = formData.get("email").trim()
  const message = formData.get("message").trim()
  let isValid = true

  if (name === "") {
    showError("nameError", "Name is required")
    isValid = false
  } else if (name.length < 2) {
    showError("nameError", "Name must be at least 2 characters")
    isValid = false
  }

  if (email === "") {
    showError("emailError", "Email is required")
    isValid = false
  } else if (!isValidEmail(email)) {
    showError("emailError", "Please enter a valid email address")
    isValid = false
  }

  if (message === "") {
    showError("messageError", "Message is required")
    isValid = false
  } else if (message.length < 10) {
    showError("messageError", "Message must be at least 10 characters")
    isValid = false
  }

  if (isValid) {
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    submitBtn.disabled = true

    try {
      const response = await fetch("https://formspree.io/f/xojanroa", { // replace mnqlwxyz
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData
      })

      if (response.ok) {
        contactForm.reset()
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
        submitBtn.style.background = "#10b981"
        showNotification("Thank you for your message! I'll get back to you soon.", "success")
      } else {
        submitBtn.innerHTML = originalText
        showNotification("Oops! Something went wrong. Please try again.", "info")
      }
    } catch (error) {
      console.error(error)
      submitBtn.innerHTML = originalText
      showNotification("Network error. Please try again later.", "info")
    } finally {
      setTimeout(() => {
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false
        submitBtn.style.background = ""
      }, 3000)
    }
  }
})

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId)
  errorElement.textContent = message
  errorElement.style.display = "block"
}

function clearErrors() {
  const errorElements = document.querySelectorAll(".error-message")
  errorElements.forEach((element) => {
    element.textContent = ""
    element.style.display = "none"
  })
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
// ----------------- End Contact Form -----------------

// Resume Download Handler
downloadBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const originalText = downloadBtn.innerHTML
  downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing Download...'
  downloadBtn.disabled = true

  setTimeout(() => {
    showNotification("Resume download started!", "success")
    downloadBtn.innerHTML = originalText
    downloadBtn.disabled = false
  }, 1500)
})

// Notification System
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
        <span>${message}</span>
        <button class="notification-close">&times;</button>
    `
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "#10b981" : "#6366f1"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `
  document.body.appendChild(notification)
  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.addEventListener("click", () => notification.remove())
  setTimeout(() => { if (notification.parentNode) notification.remove() }, 5000)
}

// Notification CSS
const style = document.createElement("style")
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    .notification-close {
        background: none; border: none; color: white; font-size: 1.2rem; cursor: pointer; padding: 0; margin-left: auto;
    }
`
document.head.appendChild(style)

// Skill Cards Hover
document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card")
  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", () => card.style.transform = "translateY(-5px) scale(1.02)")
    card.addEventListener("mouseleave", () => card.style.transform = "translateY(0) scale(1)")
  })
})

// Project Cards Hover
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)"
      card.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.2)"
    })
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)"
      card.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)"
    })
  })
})

// Parallax Hero
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero")
  if (hero) hero.style.transform = `translateY(${window.pageYOffset * -0.5}px)`
})

// DOM Loaded Init
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loading")
  window.addEventListener("load", () => document.body.classList.remove("loading"))
  updateActiveNavLink()
})

// Intersection Observer for animations
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible") })
}, observerOptions)

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in-up")
  animatedElements.forEach(el => observer.observe(el))
})*/
