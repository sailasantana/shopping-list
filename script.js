//starting off with a function that adds an item to shopping list

function addItemToList() {
    //event listener 1: we need to target the form and listen for a submit
  
    $('#js-shopping-list-form').submit( function(event){
      //we need to store the text that gets submitted and assign it to a varirable (so we can refer to it later if need be)
     const listEntry = $('#shopping-list-entry').val()
     //going to add a preventDefault method avoid default behaviour of forms. 
     event.preventDefault()
     console.log(listEntry); 
    //just a test
     console.log('event listener 1 is working!');
  $('ul').append(`<li>
          <span class="shopping-item">${listEntry}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`)
    
    })
  }
  
  
  //Now I need to create a function that creates html for each submitted listEntry.
  
  
  
  //function for adding .shopping-item__checked class to checked shopping items. 
  function checkItems(){
  //event listener that targets the check button and listen for a click 
  
  //Similar to the "Add a Pet" example, I'm going to utilize event delegation here. This will ensure that the event listener + callback function will fire for any descendent items that are added after the html has loaded initially. 
  
  
  $('.shopping-list').on('click','.shopping-item-toggle', function(){
    //testing event listener
    console.log('event listener 2 is working!')
    $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked")
  })
  }
  
  //function that deletes shopping items
  function deleteItems(){
  //event listener that targets the delete button and listens for a click
  $(".shopping-list").on('click',".shopping-item-delete" , function(){
    //testing event listener
    console.log('event listener 3 is working!');
    $(this).closest('li').remove(); //i have a question about this that I'd like to go over during session.
    
  
  })
  
  }
  
  //a final function - it will call all the functions above
  function runAllFuncs() {
    addItemToList();
    checkItems();
    deleteItems();
  }
  
  // Another event listener : when the page loads, call handleShoppingList
  $(runAllFuncs);
  