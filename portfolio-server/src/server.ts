import { configDotenv } from "./configs/dotenv.config";
import { connectPostgres } from "./configs/sequelize.config";
configDotenv();

const runServer = async () => {
  const app = (await import("./configs/express.config")).default;

  // Start Server
  const PORT = process.env.PORT;
  app.listen(PORT, async () => {
    await connectPostgres();
    console.log("Connected to PostgreSQL!");

    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

runServer();
