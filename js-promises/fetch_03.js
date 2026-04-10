function getAllAnimalsByLetter(letter) {
  // let offset = 0;
  let allResults = [];

  const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`; // ลบ&offset=${offset} ออกไป
  return fetch(url, {
    headers: { "X-Api-Key": "4ns5O645oiYVNfiNtjPUNzhzoqrYEprARAhJPb80" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.length > 0) {
        allResults.push(...data);
        // offset += 20; // Move to the next "page"
        // ตรงนี้บวกไปก็ไม่มีผล เพราะฟังก์ชันจบแล้ว
        // แต่ถ้าจะทำต่อ ต้องสร้างฟังก์ชันดึงซ้ำ (Recursive)
      }

      console.log(
        `Found ${allResults.length} animals containing the letter ${letter}`,
      );
      console.log(allResults);
    });
}

getAllAnimalsByLetter("d");

/*
ส่วนที่เราสามารถเปลี่ยนแปลงได้เพื่อให้ task specific
Query Parameters: ส่วนที่อยู่หลังเครื่องหมาย ? คือสิ่งที่เราใส่เพิ่มเข้าไปตามที่คู่มือระบุ เช่น
name=a : คือการบอกว่า "ขอรายชื่อสัตว์ที่มีตัวอักษร a"
offset=0 : คือการบอกว่า "ขอเริ่มดูตั้งแต่ลำดับที่ 0"

 const url = `...${letter}&offset=${offset}`;
*/
