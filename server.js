const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
// const AdminBro = require("admin-bro");
// const AdminBroMongoose = require("admin-bro-mongoose");
// const AdminBroExpressjs = require("admin-bro-expressjs");

const cors = require("cors");
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "/images")));

const PORT = process.env.PORT || 8080;
//connecting to database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// //AdminBro configuration
// AdminBro.registerAdapter(AdminBroMongoose);

// const authentionParent = {
//   name: "Authentication",
//   icon: "fa fa-file-text",
// };

// const ADMIN = {
//   email: "test@example.com",
//   password: "password",
// };
// //Admin Bro and Models
// const Post = require("./models/Post");
// const User = require("./models/User");
// const Admin = require("./models/Admin");

// const adminBro = new AdminBro({
//   resources: [{ resource: User }, { resource: Post }],
//   rootPath: "/admin",
// });
// // Build and use a router which will handle all AdminBro routes

// const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
//   authenticate: async (email, password) => {
//     if (ADMIN.password === password && ADMIN.email === email) {
//       return ADMIN;
//     }
//     return null;
//   },
//   cookieName: "adminbro",
//   cookiePassword: "somepassword",
// });
// //routes
// app.use(adminBro.options.rootPath, router);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

// setup for deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api running");
  });
}

app.listen(PORT, () => {
  console.log(`listen to the port ${PORT}`);
});
// module.exports = router;
