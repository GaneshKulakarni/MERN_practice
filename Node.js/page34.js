import express from "express";
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.listen(5000, () => console.log("Server Started"));

app.use(express.urlencoded({ extended: true }));

const users = [
  { name: "Gaensh", email: "ganesh123@gmail.com", password: "1234" },
  { name: "Ajay", email: "ajay@gmail.com", password: "1234" },
  { name: "Komal", email: "komal@gmail.com", password: "1234" },
];

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (user) {
    if (user.password === password) {
      res.redirect("/");
    } else {
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
  res.redirect("/");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post('/register', (req, res) => {
  const { email,password,name } = req.body;
  const user= users.find((user) => user.email === email);
  if(user){
    res.redirect("/login");
    
    return
  }
  else{
    users.push({
      name: name,password:password,email:email});
    res.redirect("/login");

  }

})
app.get("/", (req, res) => {
  res.render("dashboard", { users });
});