 const texts = ["Learning...", "Building...", "Growing...", "Creating..."];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const speed = 100;
    const pause = 1000;
    const typingElement = document.getElementById("box");

    function type() {
      const currentText = texts[textIndex];
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      typingElement.textContent = currentText.slice(0, charIndex);

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, pause);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }

      setTimeout(type, isDeleting ? speed / 2 : speed);
    }

    type();