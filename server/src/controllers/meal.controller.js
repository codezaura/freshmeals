export async function createMeal(req, res) {}

// -------------------------------------------------------------

export async function getMeals(req, res) {
  return res
    .json([
      { name: "Rice", price: 10 },
      { name: "Pulse", price: 5 },
      { name: "Mix-Veg", price: 6 },
    ])
    .status(200);
}

// -------------------------------------------------------------

export async function getMeal(req, res) {
  const { name } = req.params;

  if (!name) return res.error({ message: "Provide a valid meal name" });

  return res.json({ name, price: 8 }).status(200);
}

// -------------------------------------------------------------

export async function deleteMeal(req, res) {}

// -------------------------------------------------------------

export async function updateMeal(req, res) {}
