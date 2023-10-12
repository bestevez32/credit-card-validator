import express from "express";
var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ data: ["TEST DATA 1", "TEST DATA 2", "TEST DATA 3"] });
});

app.post("/validate-credit-card", (req, res) => {
  const { creditCardNumber } = req.body;

  if (!creditCardNumber) {
    res.status(400).send("Credit card number is required.");
    return;
  }

  const isValid = validateCreditCard(creditCardNumber);

  res.json({ isValid });
});

function validateCreditCard(creditCardNumber: string): boolean {
  const digits = creditCardNumber.replace(/\D/g, "").split("").map(Number);
  let sum = 0;
  let doubleDigit = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = digits[i];

    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    doubleDigit = !doubleDigit;
  }

  return sum % 10 === 0;
}

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
