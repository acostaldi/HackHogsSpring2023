// Add this code to the existing results.js file

const savingsRanked = document.getElementById('savings-ranked');

function findSolution(travelLength, raining){
    acceptable = false;
    shortTrav = 5;
    medTrav = 10;

    if(!raining){
        acceptable = true;
    }

    //get location
    //get weather 

    if(acceptable){
        if(travelLength <= shortTrav){
            
        }
        else if(travelLength <= medTrav && travelLength > shortTrav){
            //suggest mediumlength/longlength
        }else{
            //suggest 
        }
    }else{
        //suggest 
    }

}

// Replace the following array with your calculated savings data
const savingsData = [
    { mode: 'Biking', savings: 80 },
    { mode: 'Public Transit', savings: 60 },
    { mode: 'Carpooling', savings: 40 },
];

// Sort the data in descending order based on savings
savingsData.sort((a, b) => b.savings - a.savings);

// Populate the list items
savingsData.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${item.mode} - ${item.savings}% savings`;
    savingsRanked.appendChild(listItem);
});
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-button');

    backButton.addEventListener('click', () => {
        // Navigate back to index.html
        window.location.href = 'index.html';
    });

    // Rest of the code
});
