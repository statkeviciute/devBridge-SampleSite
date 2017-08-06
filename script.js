const firstName = document.querySelector('[name=first]');
const lastName = document.querySelector('[name=last]');
const message = document.querySelector('[name=message]');
const warningMes = document.querySelectorAll('.warning');

//-------------------------------form validation------------------------
function validate(e) {
  var input = this.value;

  if (input.length <2 ){
    this.nextElementSibling.innerHTML ="Entry is too short";
    e.srcElement.value = " ";
    return false;
  } else if (input.length > 15) {
		this.nextElementSibling.innerHTML ="Entry is too long";
    e.srcElement.value = " ";
    return false;
  } else if (input.includes(' ')) {
    this.nextElementSibling.innerHTML ="Entry should not include spaces";
    e.srcElement.value = " ";
    return false;
  }
  else {
		this.nextElementSibling.innerHTML =" ";
    return true;
	}
}

firstName.addEventListener('change', validate);
lastName.addEventListener('change', validate);

//-------------------------------sticky nav------------------------

const header = document.querySelector('header');
const mainNav = document.querySelector('.main-nav');
const headheight = header.getBoundingClientRect();
const navHeight = mainNav.getBoundingClientRect();

window.addEventListener('scroll', function(e) {
  const totalScrolled = this.scrollY;
  if (totalScrolled >= (navHeight.height)) {
    header.classList.add('sticky-nav');
  } else {
    header.classList.remove('sticky-nav');
  }
})
