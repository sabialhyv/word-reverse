//first solution - without auxiliary function  (reverse function)
document.querySelector('#reverseBtn').addEventListener('click', function () {
    let text = document.querySelector('input').value.trim()
    // Notify user if input is empty
    if(!text){
        alert('Please enter a word.')
        return;
    }
    
    // Clear the input field after every click.
    document.querySelector('#wordInput').value = "";
    
    // Reverse the input text. 
    let reversed = ""
     let letters = text.split('')
     for (let i = letters.length - 1; i >= 0; i--) {
         reversed += letters[i]
     }
     
     // Display the reversed text in the span element.
     document.querySelector('#wordOutput').innerText = reversed;
});