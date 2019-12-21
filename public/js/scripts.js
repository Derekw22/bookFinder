function findBook(){
   var userSearch = document.getElementById('userInput').value;
   var bookResult = document.getElementById('result');

   bookResult.innerHTML = "";

   $.ajax({
      type: "GET",
      url: "https://www.googleapis.com/books/v1/volumes?q=" + userSearch,
      dataType: "JSON" ,
      success: function(book){
         console.log(book);
         for(var i = 0; book.items.length; i++){
            var wrapperDiv = document.createElement('div');
            wrapperDiv.className = 'media';
            var image = document.createElement('img');
            image.className = "mr-3";
            image.src = book.items[i].volumeInfo.imageLinks.thumbnail;      
            var div = document.createElement("div");
            div.className = "media-body";
            var header = document.createElement('h5');
            header.className = 'mt-0';
            header.innerHTML = book.items[i].volumeInfo.title;
            div.appendChild(header);
            wrapperDiv.appendChild(image);
            wrapperDiv.appendChild(div);
            // Adding Elements
            var author = document.createElement('p');
            author.innerHTML = "<b>Author:</b>   " + book.items[i].volumeInfo.authors;
            div.appendChild(author);
            //
            var desc = document.createElement('p');
            desc.innerHTML = book.items[i].volumeInfo.description;
            div.appendChild(desc);
            //
            var pageCount = document.createElement('p');
            pageCount.innerHTML = "<b>Page Count:</b>   " + book.items[i].volumeInfo.pageCount;
            div.appendChild(pageCount);
            // line
            var line = document.createElement("hr"); 
            bookResult.appendChild(wrapperDiv);
            bookResult.appendChild(line);
         }
      }
   })
}