let contactController = (req, res) => {
  let { name, email, password } = req.body;
  // Email Regex
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Password Regex ( ^ Charactar + | Capital and Small Must | Must Number)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{6,}$/;
  if (!name) {
    res.send(`Name is Required!`);
  } else if (!email) {
    res.send(`Email is Required!`);
  } else if (!emailRegex.test(email)) {
    res.send(`Enter Valid Email`);
  } else if (!password) {
    res.send(`Password is Required!`);
  } else if (!passwordRegex.test(password)) {
    res.send(`Enter Valid Password`);
  } else {
    res.send(req.body);
  }
};

module.exports = contactController;
