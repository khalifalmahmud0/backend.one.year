let nidController = (req, res) => {
  res.json([
    {
      name: "John Doe",
      nid: "1234567890123456",
      dob: "1990-01-01",
    },
    {
      name: "Jane Smith",
      nid: "2345678901234567",
      dob: "1985-05-15",
    },
    {
      name: "Michael Johnson",
      nid: "3456789012345678",
      dob: "1982-11-30",
    },
    {
      name: "Emily Brown",
      nid: "4567890123456789",
      dob: "1995-07-20",
    },
    {
      name: "David Lee",
      nid: "5678901234567890",
      dob: "1988-03-10",
    },
  ]);
};

module.exports = nidController;
