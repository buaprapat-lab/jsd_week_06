/* Lab 02: 02-query-dynamic.js (ดึงข้อมูลแบบมีเงื่อนไข)
เป้าหมาย: ทบทวนเรื่องเครื่องหมาย Backtick (`) และตัวแปร ${} ใน URL (สิ่งที่เราเพิ่งแก้บั๊กกันไปเมื่อกี้!)
API แนะนำ: PokeAPI (ข้อมูลโปเกมอน)

โจทย์ของคุณ:
สร้างฟังก์ชัน getPokemon(name)
เอาตัวแปร name ไปเสียบใน URL 
ลองเรียกฟังก์ชันดึงข้อมูลปิกาจู (pikachu) และอีวุย (eevee) ดูว่าข้อมูลเปลี่ยนไปไหม
*/

// 1. สร้างฟังก์ชันที่รับพารามิเตอร์ชื่อ name
function getPokemon(name) {
  // 2. เอาตัวแปร name ไปเสียบใน URL (แทนที่คำว่า ditto)
  // ใช้ Backtick ( ` )
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

  // 3. ใช้ fetch ไปดึงข้อมูล
  fetch(url)
    .then((response) => {
      // คืนค่าเป็น json
      return response.json();
    })
    .then((data) => {
      console.log(`Fetch data pokemon: ${name} successful!`);
      // โชว์ข้อมูลที่ได้มา
      console.log(data);
    })
    .catch((error) => {
      console.error("Something is wrong!", error);
    });
}

// 4. ทดลองเรียกใช้งานฟังก์ชัน
getPokemon("pikachu"); // สั่งให้ไปดึงปิกาจู
getPokemon("eevee"); // สั่งให้ไปดึงอีวุย

//จ้อมูลรีเทิร์นงงมากกกกกกกกก ต้องฟิบเตอร์ด่วน เดี๋ยวมาทำต่อ
