// ถ้าอยากดึงข้อมูล ตำแหน่ง 0 ถึง 20 ครับ ดึงมาแค่ 20 obj

function getAllAnimalsByLetter(letter) {
  let allResults = [];

  function fetchNextPage() {
    const url = `https://api.api-ninjas.com/v1/animals?name=${letter}`;

    return fetch(url, {
      headers: { "X-Api-Key": "YOUR-API-KEY" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          console.log(
            `Found ${allResults.length} animals containing the letter ${letter}`,
          );
          console.log(allResults);
          return allResults;
        }

        allResults.push(...data);
      });
  }

  return fetchNextPage();
}

getAllAnimalsByLetter("a")
  .then((animals) => {
    console.log("Finished fetching all pages.");
    console.log(animals.map((animal) => animal.name));
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });

/*

function getAllAnimalsByLetter(letter) {
  // API Ninjas ดึงข้อมูลมาให้ 20 ตัวแรกเป็นค่าเริ่มต้นอยู่แล้วครับ
  const url = `https://api.api-ninjas.com/v1/animals?name=${letter}&offset=0`;

  return fetch(url, {
    headers: { "X-Api-Key": "YOUR-API-KEY" }, // อย่าลืมใส่ Key
  })
    .then((response) => response.json()); 
    // แค่นี้พอเลยครับ! ไม่ต้องเช็ค if ไม่ต้อง push เข้า array ใหม่
}

// วิธีเรียกใช้
getAllAnimalsByLetter("a")
  .then((animals) => {
    // animals จะเป็น Array ที่มี 20 ตัว
    console.log("Finished fetching.");
    console.log(`ได้มาทั้งหมด: ${animals.length} ตัว`);
    
    // โชว์แค่ชื่อ
    console.log(animals.map((animal) => animal.name)); 
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });

  */
