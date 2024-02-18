document.addEventListener("DOMContentLoaded", function() {
    const popup = document.querySelector(".popup");
    const input = document.querySelector(".post");
    const addPostButton = document.querySelector(".addpost");
    const Deletebtn = document.querySelector(".delete");
    const Secondinput = document.querySelector(".post2");
    const feed = document.querySelector(".feed");

    input.addEventListener("focus", function() {                    
        popup.style.display = "block";
    });

    Deletebtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    //when i click post post2 will appear as a POP-UP
    addPostButton.addEventListener("click", function() {
        const text = Secondinput.value.trim();            // Get the value of post2 input
        if (text !== "") {                                // Check if the input field is not empty
            const newPostDiv = document.createElement("div"); // Create a new div element for the post
            newPostDiv.classList.add("P"); // Add the "P" class to the new post div
            
            //create h4 element for delete emoji
            const dltemoji = document.createElement("h4");
            dltemoji.textContent = "✖️"; // Set the text content of the h4 to the ✖️ emoji
            
            //DIV FOR Text content of my post
            const newTextElement = document.createElement("div");
            newTextElement.textContent = text; 
            
            //Const for Date 
            const dateSpan = document.createElement("h2");
            dateSpan.textContent = getCurrentDate(); 
            
            
            newPostDiv.appendChild(dltemoji);
            newPostDiv.appendChild(newTextElement);
            newPostDiv.appendChild(dateSpan);
            
            feed.appendChild(newPostDiv); 
            Secondinput.value = ""; 
            
           
            dltemoji.addEventListener("click", function() {
                feed.removeChild(newPostDiv); 
            });
        }
    });

    // Function to get current date in the format "YYYY-MM-DD HH:MM:SS"
    function getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
});
