

function letsGo() {
  validate();
  makeForm();
}

function makeForm() {
  $('main').html(
    `<form>
    <legend>This Is Impossible</legend>
    <label>Answer:</label>
    <input type="text" required>
    <input type="submit" id="submit" name="submit" value="submit">
  </form>
  <p>
    Only an impeccable Inspector can see the words.
  </p>
  <!-- The Answer Is "damsel"-->`
  );
}

function validate() {
  $('main').on('click', '#submit', event => {
    event.preventDefault();
    const correct = 'damsel';
    let answer = $('input').val();
    if (answer !== correct) {
      makeForm();
    }
    else if (answer === correct) {
      final();
    }
 
  });
}


function final() {
  $('main').html(
    `<p>Goddess on the mountain top//<br>
    Burning like a silver flame//<br>
    A summit of Beauty in Love//<br>
    AND DAMSEL WAS HER NAME</p>`

  );
}

$(letsGo);