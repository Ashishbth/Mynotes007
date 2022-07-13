console.log('Welcome to project 1 (App note)');

// If users adds a note , add it to local Storage

let addBtn = document.getElementById('addBtn');
showNotes();
addBtn.addEventListener("click" , function(e){
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes==null)
    {
        notesObj = []; 
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value='';
    console.log(notesObj)
    showNotes();
})

// Function To Show Elements From Local Storage 

function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes==null)
    {
        notesObj = []; 
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element , index) {
        html+= ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Notes ${index +1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}"  onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note </button>
                    </div>       
                </div>`
                });
                let notesElm = document.getElementById('notes');
                if(notesObj.length != 0)
                {
                    notesElm.innerHTML = html;
                }
                else{
                    notesElm.innerHTML =` No Notes To Show`; 
                }
}

// Function To Delete a Note
function deleteNote(index){
    // console.log("I Am Deleting This Particular Note " , index);
    let notes = localStorage.getItem("notes");
    if (notes==null)
    {
        notesObj = []; 
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


// Methods For Search Features

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener('input',function(){

    let inputVal = searchTxt.value.toLowerCase();
    // console.log("Input Event Fired! " ,inputVal );
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt= element.getElementsByTagName('p')[0].innerText;
        // console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";

        }

    })
})