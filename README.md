# Welcome to this repo!

## Secure File Sharing System


## This is a web app was created to felicitate quick and secure file sharing.
- This web application provides secure storage options to users.
- While uploading the file, if a user sets password, then while donwloading the file again user is asked for the password.
- The file is downloaded only if the password matches to that of the original one.
- If the password doesn't match app prompts **Incorrect Password**.
- The password is not stored directly as plain text it is hashed and then stored into the database.
- This project uses a hosted MongoDB Atlas Database Server.
- In the near future I plan to host this project using AWS S3 buckets fir the storage purpose.



## Screenshots
<p align="center>
  <img src="https://github.com/omkarae/File-Sharing/blob/main/1.png" alt="UI" height=200px></img>
  <img src="https://github.com/omkarae/File-Sharing/blob/main/2.png" alt="Response" height=200px></img>
</p>

<p align="center>
  <img src="https://github.com/omkarae/File-Sharingh/blob/main/3.png" alt="UI" height=200px></img>
  <img src="https://github.com/omkarae/File-Sharing/blob/main/4.png" alt="Response" height=200px></img>
</p>
<p align="center>
  <img src="https://github.com/omkarae/File-Sharing/blob/main/5.png" alt="UI" height=200px></img>
</p>



## Technologies/Packages used - 
- NodeJS
- ExpressJS
- Bcrypt
- Mongoose
- multer
- ejs
- dotenv
