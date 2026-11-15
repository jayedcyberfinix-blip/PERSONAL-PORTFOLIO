const toggle = document.getElementById ('menu-toggle');
if(toggle){
    toggle.addEventListener('change',
        ()=>{
            document.body.classList.toggle
            ('no-scroll', toggle.checked);
        });
    
}
const words =["CSE Student","Dark Hacker","Web Developer","Programmer","Tech Explorer"];
const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay= 100;
let erasingDelay= 100;
let nextWordDelay= 1000;
const type = () =>{
    const currentword = words[wordIndex];

    if(!isDeleting){
        typingText.textContent = currentword.
        substring(0, charIndex + 1);
        charIndex++;

        if(charIndex === currentword.length) {
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        } else{
            setTimeout(type, typingDelay);
        }
    }else{
        typingText.textContent = currentword.substring(0, charIndex - 1);
        charIndex--;
        if(charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) %
            words.length;
            setTimeout(type, 500);
        }else{
            setTimeout(type, erasingDelay);
        }
    }
};
document.addEventListener
("DOMContentLoaded", () => {
    if (words?.length) type();
});