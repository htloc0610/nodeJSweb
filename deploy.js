const http = require("http");

// Dữ liệu JSON cần trả về
const data = {
  message: "Server hosted successfully",
  subject: "Web application development",
  students: [
    { id: "22120181", name: "Nguyễn Duy Lâm" },
    { id: "22120183", name: "Nguyễn Đặng Minh Lân" },
    { id: "22120186", name: "Huỳnh Tấn Lộc" },
  ],
};

// Tạo server
const server = http.createServer((req, res) => {
  // Thiết lập header
  res.writeHead(200, { "Content-Type": "application/json" });
  // Trả về dữ liệu JSON
  res.end(JSON.stringify(data));
});

// Server sẽ lắng nghe trên cổng 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
