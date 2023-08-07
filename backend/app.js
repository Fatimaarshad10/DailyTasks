const app = require('express')();
const routes = require("./config/routes");
const path = require("path");
const fs = require('fs')
// const filePath = path.join(__dirname, "student.json");
require("./middlewares/main").Main(app);
routes(app)

// fs.readFile("image.jpg", (err, data) => {
//     if (err) {
//       console.error("Error reading the image file:", err);
//     } else {
//       const base64Data = data.toString("base64");
//     console.log("Base64-encoded Image data:", base64Data);
//     }
//   });




  var http = require('http')
  
//   fs.readFile('image.jpg', function(err, data) {
//     if (err) throw err // Fail if the file can't be read.
//     http.createServer(function(req, res) {
//       res.writeHead(200, {'Content-Type': 'image/jpeg'})
//       res.end(data) // Send the file data to the browser.
//     }).listen(8124)
//     console.log('Server running at http://localhost:8124/')
//   })



// first binary data set readable file utf-8 encoding 
console.log('first file')
const newFile = fs.readFileSync('./file.txt' , "utf-8") 
console.log(newFile)
// console.log('second file')

// fs.readFile('./file.txt', 'utf-8',  (error , data)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log(data)
//     }
// })
// console.log('third file')


// fs.writeFileSync("./greet.txt", "hello node")

// fs.writeFile('./greet.txt', ' change file syntax' , {flag :'a'},(error)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log('file is written')
//     }
// })

const filePath = "file.txt";

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     const updatedContent = data.replace("file system ", "Updated file system");

//     fs.writeFile(filePath, updatedContent, "utf-8", (err) => {
//       if (err) {
//         console.error( err);
//       } else {
//         console.log("Data has been updated.");
//       }
//     });
//   }
// });



// fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) {
//       console.error("Error reading the file:", err);
//     } else {
//       const lines = data.split("\n");
//       const updatedLines = lines.filter((line) => !line.toLowerCase().includes("line 3"));
  
//       const updatedContent = updatedLines.join("\n");
  
//       fs.writeFile(filePath, updatedContent, "utf-8", (err) => {
//         if (err) {
//           console.error("Error writing the file:", err);
//         } else {
//           console.log("Data has been updated after deletion.");
//         }
//       });
//     }
//   });


// fs.readFile("student.json", "utf-8", (err, data) => {
//     if (err) {
//       console.error("Error reading the JSON file:", err);
//     } else {
//       const jsonData = JSON.parse(data);
//       console.log("JSON data:", jsonData);
//     }
// })

// fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) {
//       console.error( err);
//     } else {
//       const jsonData = JSON.parse(data);
//       const indexToDelete = jsonData.findIndex((entry) => entry.name === "fatima");
  
//       if (indexToDelete !== -1) {
//         jsonData.splice(indexToDelete, 1);
//         fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), "utf-8", (err) => {
//           if (err) {
//             console.error(err);
//           } else {
//             console.log("Data has been updated after deletion.");
//           }
//         });
//       } else {
//         console.log("Entry not found. Nothing to delete.");
//       }
//     }
//   });
//   fs.readFile(filePath, "utf-8", (err, data) => {
//     if (err) {
//       console.error("Error reading the JSON file:", err);
//     } else {
//       const jsonData = JSON.parse(data);
  
//       // Find the index of the entry you want to update
//       const indexToUpdate = jsonData.findIndex((entry) => entry.name === "noor");
  
//       if (indexToUpdate !== -1) {
//         // Update the entry at the specified index
//         jsonData[indexToUpdate].age = 26; // Update the "age" field to 26
  
//         // Write the updated data back to "class.json"
//         fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), "utf-8", (err) => {
//           if (err) {
//             console.error("Error writing the JSON file:", err);
//           } else {
//             console.log("Data has been updated.");
//           }
//         });
//       } else {
//         console.log("Entry not found. Nothing to update.");
//       }
//     }
//   });


// const dataToWrite = {
//     name: "John Doe",
//     age: 30,
//     email: "john.doe@example.com",
//   };
  
//   const jsonData = JSON.stringify(dataToWrite, null, 2); 
  
//   fs.writeFileSync("class.json", jsonData, "utf-8", (err) => {
//     if (err) {
//       console.error("Error writing the JSON file:", err);
//     } else {
//       console.log(jsonData);
//     }
//   });


module.exports = app;
