function sortByRating(shops) {
  for(let i = 0; i < shops.length-1; i++){
    for(let j=0; j < shops.length-1;j++){
      if(shops[j].rating < shops[j+1].rating){
        const temp = shops[j];
        shops[j] = shops[j + 1];
        shops[j + 1] = temp;
      }
    }
  }
  return shops
}

/* 
  1. ควรใช้ Algorithm ใดในการแก้โจทย์นี้ 
  - bouble sort

  2. ให้เหตุผลประกอบว่าทำไมถึงเลือกใช้ Algorithm นี้
  - เป็นกาเช็คโดยใช้การเปลี่ยนตำแหน่งแบบลูปซ้อนลูป
  
  3. ให้ระบุว่า Big O Notation ของ Function นี้คือเท่าไร เพราะอะไร
  - O(n^2) ลูปซ้อนลูปทำให้ใช้เวลามากขึ้น
*/

const shops = [
  {
    shopTitle: "ร้านอาหารส้มตำแซ่บ",
    rating: 4.5,
  },
  {
    shopTitle: "ร้านขนมไทยแม่จันทร์",
    rating: 4.8,
  },
  {
    shopTitle: "ร้านกาแฟหอมกรุ่น",
    rating: 4.2,
  },
  {
    shopTitle: "ร้านเบเกอรี่บ้านอบอุ่น",
    rating: 4.9,
  },
  {
    shopTitle: "ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง",
    rating: 4.6,
  },
];

console.log(sortByRating(shops));
/*
[
  { shopTitle: 'ร้านเบเกอรี่บ้านอบอุ่น', rating: 4.9 },
  { shopTitle: 'ร้านขนมไทยแม่จันทร์', rating: 4.8 },
  { shopTitle: 'ร้านก๋วยเตี๋ยวลูกชิ้นปลาเจ้าดัง', rating: 4.6 },
  { shopTitle: 'ร้านอาหารส้มตำแซ่บ', rating: 4.5 },
  { shopTitle: 'ร้านกาแฟหอมกรุ่น', rating: 4.2 }
]
*/
