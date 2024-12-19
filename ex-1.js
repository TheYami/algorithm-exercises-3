function findStudentIndex(students, searchStudent) {
  const result = students.indexOf(searchStudent)
  if(result){
    return result
  }else{
    return -1
  }
}

/* 
  1. ควรใช้ Search Algorithm ใดในการแก้โจทย์นี้
  - Linear search เพราะเป็นการหาตำแหน่ง ทีละตำแหน่ง โดยใช้การวนลูปไปเรื่อยๆจนกว่าจะเจอ

  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Search Algorithm นี้
  - อาร์เรย์ที่ให้มาไม่มีการจัดเรียงลำดับ และจำนวนสมาชิกน้อย

  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  - O(n) เพราะเป็นการหาทีละตำแหน่ง 
*/

const students = [
  "George",
  "Bobby",
  "Diana",
  "Hannah",
  "Andrew",
  "Jasmine",
  "Isaac",
  "John",
];

console.log(findStudentIndex(students, "John")); // 7
console.log(findStudentIndex(students, "Anna")); // -1
