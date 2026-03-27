import { app } from "./app.js";
import { ENV } from "./configs/env-variables.js";

// -------------------------------------------------------------

app.listen(ENV.PORT, () =>
  console.log(`Running at https://localhost:${ENV.PORT}`),
);
