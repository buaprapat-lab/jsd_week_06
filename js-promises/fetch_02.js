const url = "https://api.api-ninjas.com/v1/animals?name=bear";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": "4ns5O645oiYVNfiNtjPUNzhzoqrYEprARAhJPb80",
    "Content-Type": "application/json",
  },
};

fetch(url, options)
  .then((response) => {
    // ในรูปโค้ดส่วนนี้ถูกพับไว้ (collapsed)
    // โดยปกติจะเป็นการ return response.json() เพื่อเอาไปใช้ต่อใน .then() ถัดไป
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
