

function letsGo() {
  validate();
  makeForm();
}

function makeForm() {
  $('main').html(
    `
    <div class='all'>
    <div class='impossible'>
    <p>Note: This Is Impossible</p>
    </div>
    <form>
    <legend>Can You See The Words?</legend>
    <label>Answer:</label>
    <input type="text" class='attempt' required>
    <input type="submit" id="submit" name="submit" value="submit">
  </form>
  <p class='impossible'>
    Only an impeccable Inspector can see the words.
  </p>
  </div>
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
    `
    <div class='final'>
    <p>Goddess on the mountain top//<br>
    Burning like a silver flame//<br>
    A summit of Beauty in Love//<br>
    AND DAMSEL WAS HER NAME</p>
    <img src='damsel.png' alt='ALWAYS WATCHING'>
    <img src='damsel2.png' alt='The Northern Group Is Dead And It Is My Fault'>
    <img src='damselLocation.png' alt='Keep Your Distance Or It Will Get You Too'>
    <img src='combination1.png' alt='left side'>
    </div>
    `

  );
}

$(letsGo);