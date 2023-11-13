export default function BookList() {
   let pageTitle = 'List of Books to Read';
   let book1 = "https://images.booksense.com/images/314/310/9780316310314.jpg";
   let book2 = "https://m.media-amazon.com/images/I/516bDcIYHDL.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51OazXen1ZL.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Cruel Prince" />
         <img src={book2} alt="Of Mice and Men" />
         <img src={book3} alt="Legends and Lattes" />
      </div>      
   );
}