export async function createUser(req, res) {}

// -------------------------------------------------------------

export async function getUsers(req, res) {
  return res
    .json([
      { name: "Vikash", id: 1 },
      { name: "Suraj", id: 2 },
      { name: "Rohit", id: 6 },
    ])
    .status(200);
}

// -------------------------------------------------------------

export async function getUser(req, res) {}

// -------------------------------------------------------------

export async function deleteUser(req, res) {}

// -------------------------------------------------------------

export async function updateUser(req, res) {}
