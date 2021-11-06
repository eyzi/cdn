require("dotenv").config();
import cdn from "./v1";
const { PORT, DIRECTORY } = process.env;
cdn(+(PORT ?? 80), DIRECTORY ?? "/cdn");
