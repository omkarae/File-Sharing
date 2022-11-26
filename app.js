require("dotenv").config();
const multer = require("multer");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const File = require("./models/file");

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

const upload = multer({ dest: "uploads/" });

mongoose.connect(process.env.DATABASE_URL);

app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index");
});
app.post("/upload", upload.single("file"), async (req, res) => {
    const fileData = {
      path: req.file.path,
      originalName: req.file.originalname,
    }
    if (req.body.password != null && req.body.password !== "") {
      fileData.password = await bcrypt.hash(req.body.password, 10)
    }
  
    const file = await File.create(fileData)
  
    res.render("uploaded", { fileLink: `${req.headers.origin}/file/${file.id}` })
});

app.route("/file/:id").get(downloadHandler).post(downloadHandler)

async function downloadHandler(req, res) {
  const file = await File.findById(req.params.id)

  if (file.password != null) {
    if (req.body.password == null) {
      res.render("password")
      return
    }

    if (!(await bcrypt.compare(req.body.password, file.password))) {
      res.render("password", { error: true })
      return
    }
  }

  file.downloadCount++
  await file.save()
  // console.log(file.downloadCount)

  res.download(file.path, file.originalName);
}

// app.post("/find",async (req, res) => {
//     const file = await File.find({originalName: req.body.name});
//     File.find({ originalName: req.body.name}, function (err, docs) {
//         // if (err){
//         //     console.log(err);
//         // }
//         // else{
//         //     if(bcrypt.compare(req.body.password,docs.password)){
//         //         res.render("uploaded", { fileLink: `${req.headers.origin}/file/${docs.id}` })
//         //     }
//         // }
//         res.render("uploaded", { fileLink: `${req.headers.origin}/file/${docs.id}` });
//     });
//     // res.render("uploaded", { fileLink: `${req.headers.origin}/file/${file.id}` });
// });




app.listen(process.env.PORT||3000);