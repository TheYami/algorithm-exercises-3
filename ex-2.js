function findBookIndex(books, searchBook) {
  let min = 0;
  let max = books.length - 1;

  while(min <= max){
    const mid = Math.floor((max+min)/2);

    if(books[mid].title === searchBook){
      return mid
    }else if(books[mid].title < searchBook){
      min = mid + 1
    }else{
      max = mid - 1
    }
  }
  return -1
}

/*
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้ 
  -binary search เพราะว่า ข้อมูลมีการจัดเรียง

  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  -เมื่อมีการจัดเรียงข้อมูล การแบ่งครึ่งข้อมูล จะทำให้การค้นหาเกิดขึ้นเร็วกว่า

  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  - O(log n) เพราะ ข้อมูลที่ต้องค้นหาลงครึ่งหนึ่งทุกครั้ง
*/

const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

console.log(findBookIndex(books, "Catch-22")); // 2
console.log(findBookIndex(books, "The Master Mind")); // -1
