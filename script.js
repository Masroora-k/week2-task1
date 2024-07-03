
let availablekeywords = [
    'Alappyy',
    'Calicut',
    'Kochi',
    'Malappuram',
    'Kalpetta',
    'Palakkad'
];

// Location input field

const resultsBox1 = document.querySelector(".result-box");
const resultList1 = document.getElementById("result-list");
const inputBox1 = document.getElementById("input-box1");

// Display the result-box only when click on the input-box1
inputBox1.onfocus = function() {
    if (inputBox1.value.length) {
        resultsBox1.style.display = 'block';
    }
};


// If type anything in inputBox this function will be executed.
inputBox1.onkeyup = function(){
    // result[] stores all filted keywords in the availablekeywords.
    let result = []; 

    // input stores the values available in the inputBox.
    let input = inputBox1.value;

    // if input have some value it valid and store the filtered data in the result.
    if(input.length){
        result = availablekeywords.filter((keyword)=>{
            // first it convert the input value into lowecase.
            // Then it converts the array data into lowercase.
            // Check whether it is includes in the input keyword. Then return the result.
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
         
        console.log(result);
    }

    display(result);
}
inputBox1.onfocus = function() {
    if (inputBox1.value.length) {
        resultsBox1.style.display = 'block';
    }
};

function display(result){
     // Check if there are any results to display.
    if (result.length) {
         // Map over the result array and create an HTML string for each item
        // Each item is wrapped in an <li> element with an onClick handler that calls selectInput
        const content = result.map((list) => {
            // the map function iterate over each element (list) in the result array.
             // Create an <li> element with an onClick event to select the clicked item
            return "<li onClick='selectInput(this)'>" + list + "</li>";
        }).join('');  // Join all the <li> elements into a single string

        
        //  assigns the generated content string to the innerHTML property of the resultList element.
        resultList1.innerHTML = content;

        // If have any result display the result-box.
        resultsBox1.style.display = 'block';
    } else {
        // If there are no results, hide the result-Box
        resultsBox1.style.display = 'none';
    }
    
    
}
function selectInput(list) {
    inputBox1.value = list.innerHTML;

     // Hide the resultsBox after an item is selected
    resultsBox1.style.display = 'none';
}


// Event listener to hide the resultsBox1 when clicking outside of it and the inputBox1
document.addEventListener('click', function(event) {
    if (!resultsBox1.contains(event.target) && !inputBox1.contains(event.target)) {
        resultsBox1.style.display = 'none';
    }
});

// Destiantion input field


let destinationkeywords = [
    'Mavoor',
    'Idappalli',
    'Varkala',
    'Meppadi',
    'Lakkidi',
    'Pala'
];



const resultsBox2 = document.querySelector(".destination");
const resultList2 = document.getElementById("destination-list");
const inputBox2 = document.getElementById("input-box2");

inputBox2.onfocus = function() {
    if (inputBox2.value.length) {
        resultsBox2.style.display = 'block';
    }
};

inputBox2.onkeyup = function(){
   
    let place = []; 

    let  text= inputBox2.value;

    if(text.length){
        place = destinationkeywords.filter((code)=>{
           
            return code.toLowerCase().includes(text.toLowerCase());
        });
         
        console.log(place);
    }

    displayDest(place);
}


function displayDest(place){
   
   if (place.length) {
       
       const content = place.map((list) => {
           
           return "<li onClick='selectInput2(this)'>" + list + "</li>";
       }).join(''); 

       resultList2.innerHTML = content;

       resultsBox2.style.display = 'block';
   } else {
      
       resultsBox2.style.display = 'none';
   }
   
   
}
function selectInput2(list) {
   inputBox2.value = list.innerHTML;
   resultsBox2.style.display = 'none';
}


// Event listener to hide the resultsBox2 when clicking outside of it and the inputBox2
document.addEventListener('click', function(event) {
    if (!resultsBox2.contains(event.target) && !inputBox2.contains(event.target)) {
        resultsBox2.style.display = 'none';
    }
});