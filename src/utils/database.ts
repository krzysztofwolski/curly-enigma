import { getConnection, createConnection } from "typeorm";
import { Registration } from "../saleorApp/entities/Registration.entity";

export async function getOrCreateConnection() {
  try {
    const conn = getConnection();
    return conn;
  } catch (e) {
    return createConnection({
        name: "default",
      type: "sqlite",
      database: "dev.db",
      entities: [Registration],
      synchronize: true,
      logging: false
    });
  }
}