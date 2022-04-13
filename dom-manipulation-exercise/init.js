/**
 * Generates a div element with a header, input, button, and paragraph element
 * @param {*} index the index of this element from generate elements
 * @returns the newly created div.
 */
 const createElement = (index) => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.innerHTML = 'Background ' + (index + 1);
    div.appendChild(h3);
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter Color'
    div.appendChild(input);
    const button = document.createElement('button');
    button.innerHTML = "Change Background Color!";
    button.className = 'background-color';
    div.appendChild(button);
    const p = document.createElement('p');
    p.innerHTML = 'Change My Background Color!';
    div.appendChild(p);
    return div;
  }
  /**
   * Populates the DOM with between one and five divs
   */
  const generatePage = () => {
    for(let i = 0; i < Math.floor(Math.random()*5 + 1); i++) {
      document.body.appendChild(createElement(i));
    }
  }
  
  generatePage();

  