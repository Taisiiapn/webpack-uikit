import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons);
UIkit.notification('Webpack UIKit 3 bundle loaded!');

document.getElementById('close-modal').addEventListener('click', closeModalWindow);
document.getElementById('hide-balance').addEventListener('click', hideBalance);

function closeModalWindow () {
  console.log('jhjhg');
  document.getElementById('modal-center').style.opacity = "0";
}

function hideBalance () {
  document.getElementById('modal-center').style.opacity = "0";
  document.querySelector('.header__card-balance--visible').style.display = "none";
  document.querySelector('.header__card-balance--invisible').style.display = "inline";
}