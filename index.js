console.log(document.getElementById('hero'));
const git = document.getElementById('git')

function alertMe() {
   console.log("clicked!!!") 
}

git.addEventListener('click', alertMe)

// code above logs "clicked" when selecting the Github url link

