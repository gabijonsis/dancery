var scrollElements = document.querySelectorAll(".js-scroll");

var elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

var elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

var displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

var hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

var handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


function validateForm(event)
{
    event.preventDefault();
    let name = document.forms["contact-form"]["name"];
    let email = document.forms["contact-form"]["email"];
    let phone = document.forms["contact-form"]["phone"];
    let message = document.forms["contact-form"]["message"];

    if (name.value == "")
    {
        document.getElementById('errorname').innerHTML="Please enter a name";  
        name.focus(); 
        return false; 
    }
    if (email.value == "" && phone.value == "")
    {   
        document.getElementById('erroremail').innerHTML="Please enter an email";  
        name.focus(); 
        return false; 
    }
    if (message.value == "")
    {   
        document.getElementById('errormessage').innerHTML="Please type your message";
    }
    
    return true;
    
}