document.addEventListener("DOMContentLoaded", function () {
    // AboutMe Section Particles (already set)
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2 }
        },
        interactivity: { events: { onhover: { enable: true, mode: "repulse" } } }
    });

    // Background Section Particles (Different Effect)
    particlesJS("particles-background", {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 700 } },
            color: { value: "#ff9900" }, // Orange Particles
            shape: { type: "square" },
            opacity: { value: 0.5, random: true },
            size: { value: 4, random: true },
            move: { enable: true, speed: 1 }
        }
    });
});



