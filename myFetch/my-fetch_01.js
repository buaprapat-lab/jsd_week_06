// ฝึกลองดึง API หลาบๆอย่างเพื่อทดลองเยอะๆยิ่งดี ให้ commit หลายๆที
// ใช้เอไอช่วยให้เราอ่านโค้ดเป็นทุกไลน์
// เป้าหมายคือลอง fetch API หลายๆแบบมาเพื่อเอามาเเสดงผลใน terminal
// ควรฝึกทำ fetch มาแล้ว เพิ่มสกิล filter ข้อมูลให้เป็บแบบที่ต้องการ ทดลอง

/*
Lab 01: 01-basic-fetch.js (ดึงข้อมูลแบบเบสิคที่สุด)
เป้าหมาย: ทำความเข้าใจโฟลว์พื้นฐาน "ส่งไป -> รอรับ -> แกะกล่อง JSON -> โชว์ใน Terminal"
API แนะนำ: JSONPlaceholder (เป็น API จำลองสำหรับฝึกหัด ดึงรายชื่อ User ง่ายๆ)

โจทย์ของคุณ: * ใช้ fetch ไปดึงข้อมูล URL ด้านบน
ใช้ .then() เพื่อแกะเป็น .json()
พิมพ์ console.log เพื่อดูว่าข้อมูลหน้าตาเป็นยังไง
จุดสังเกต: ข้อมูลเป็น Array หรือ Object?
*/

//ประกาศตัวแปรเก็บ URL
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  // 1. รับการตอบกลับมา แล้วสั่งแกะกล่องเป็นรูปแบบ JSON
  .then((response) => response.json())

  // 2. พอแกะเสร็จ ข้อมูลจะถูกส่งมาที่ตัวแปร data
  .then((data) => {
    console.log("Succesful fetch!");
    console.log(data);
  })

  // 3. ดักจับ Error เผื่อเน็ตหลุดหรือเว็บพัง
  .catch((error) => {
    console.error("Something went wrong!", error);
  });
