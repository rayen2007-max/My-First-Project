$("#add-note").click(function () {
  var title = $("#note-title").val();
  var content = $("#note-content").val();
  var imageLink = $("#image-link").val();

  if (title.trim() === "" || content.trim() === "") {
    return alert("Please enter a title and content for the note.");
  }

  // Create note elements
  var note = $('<div class="note"></div>');
  var titleElement = $('<div class="note-title">' + title + "</div>");
  var contentElement = $('<div class="note-content">' + content + "</div>");
  var deleteButton = $('<button class="delete-note">X</button>');

  // Add image link
  if (imageLink) {
    var linkElement = $(
      '<a class="note-link" href="' + imageLink + '">View Image</a>'
    );
    note.append(linkElement);
  }

  // Assemble and append note to notes list
  note.append(titleElement, contentElement, deleteButton);
  $(".notes-list").append(note);

  // To clear the box
  $("#note-title").val("");
  $("#note-content").val("");
  $("#image-link").val("");

  // Delete note
  deleteButton.click(function () {
    $(this).parent().remove();
  });
});
