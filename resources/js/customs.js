// get elements form html

const cta = document.getElementById("trigger");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

// give a function to cta button

cta.addEventListener('click',function(){
    modal.style.display = 'flex';
});

close.addEventListener('click',function(){
    modal.style.display = 'none';
});







// get elements form html

var fname = document.getElementById('fname');
var fnameErr = document.getElementById('fnameErr');

var email = document.getElementById('email');
var emailErr = document.getElementById('emailErr');

var subject = document.getElementById('subject');
var subjectErr = document.getElementById('subjectErr');

var message = document.getElementById('message');
var messageErr = document.getElementById('messageErr');

function subm(){
    if(fname.value == ''){
        fname.style.border = "1px solid red";
        fname.focus();
        fnameErr.innerHTML = "Please Enter Your Name";
        return false;
   }

   if(email.value == ''){
    email.style.border = "1px solid red";
    email.focus();
    emailErr.innerHTML = "Please Enter Your Email";
    return false;
   }

   if(subject.value == ''){
    subject.style.border = "1px solid red";
    subject.focus();
    subjectErr.innerHTML = "Specify The Topic";
    return false;
   }

}

function errRemove(){
    if(fname.value != ''){
        fname.style.border = "1px solid black";
        fnameErr.innerHTML = "";
    }

    if(email.value != ''){
        email.style.border = "1px solid black";
        emailErr.innerHTML = "";
    }

    if(subject.value != ''){
        subject.style.border = "1px solid black";
        subjectErr.innerHTML = "";
    }
}

fname.addEventListener('blur',errRemove);
email.addEventListener('blur',errRemove);
subject.addEventListener('blur',errRemove);
