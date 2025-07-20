function greet() {
      const name = document.getElementById('nameInput').value.trim();
      const greeting = document.getElementById('greeting');

      if (name) {
        greeting.textContent = `Hello, ${name}`;
      } else {
        greeting.textContent = 'Hello';
      }
    }

   
    function BoxColor(id, color) {
      const box = document.getElementById(id);
      box.addEventListener('click', () => {
        box.style.backgroundColor = color.toLowerCase();
      });
    }

    new BoxColor('redBox', 'Red');
    new BoxColor('blueBox', 'Blue');
    new BoxColor('greenBox', 'Green');
    new BoxColor('yellowBox', 'Yellow');