function addComment() {
    // Gets the textarea using tbe specified ID.
    const commentInput = document.getElementById("commentInput");
    // Gets the div "comments" using tbe specified ID.
    const commentsDiv = document.getElementById('comments');

    // PlaceHolder for name.
    const username = "Anon";
    // Retrieves the value of the textarea / the user input. 
    const commentText = commentInput.value;

    // Checks if there is a value inside commentText
    if (commentText) {
        const userDiv = document.createElement("div");
        const singleCommentDiv = document.createElement("div")
        singleCommentDiv.className = "singleCommentDiv";
        
        commentsDiv.appendChild(singleCommentDiv)
        
        userDiv.className = "UserInfo";
        userDiv.textContent = (username)
        singleCommentDiv.appendChild(userDiv)

        // Creates a div element.
        const commentDiv = document.createElement("div");
        // Names the div element to "comment"
        commentDiv.className = "comment";
        // Inserts the text inside the div class.
        commentDiv.textContent = (commentText) 
        // Places the "comment" div inside the "comments" parent div.
        singleCommentDiv.appendChild(commentDiv);
        // Clears input
        commentInput.value = '';
    } else {
        alert("Please enter a comment")
    }
 }