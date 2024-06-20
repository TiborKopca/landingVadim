// console.log("vadim")

const subbtn = document.getElementById("subscribe");
const form = document.getElementById("sib-form-container");

function getNewsletterIntoView(){
    form.scrollIntoView({behavior: "smooth", block: "end"});
}

setTimeout(() => {
subbtn.classList.add("btn-active");
}, 4000);

subbtn.addEventListener("click", () => {
    getNewsletterIntoView();
});


