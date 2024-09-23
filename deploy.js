const fs = require("fs");

const data = {
  message: "Server hosted successfully",
  subject: "Web application development",
  students: [
    { id: "22120181", name: "Nguyễn Duy Lâm" },
    { id: "22120183", name: "Nguyễn Đặng Minh Lân" },
    { id: "22120186", name: "Huỳnh Tấn Lộc" },
  ],
};

// Tạo file JSON
fs.writeFile("deploy.json", JSON.stringify(data, null, 2), (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File created successfully!");
  }
});
