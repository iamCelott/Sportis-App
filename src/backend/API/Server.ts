import express, { Request, Response } from "express";
import path from "path";
import { promises as fs } from "fs";

const app = express();
const port: number = 3000;
const productFilePath = path.join(__dirname, "../products.json");

app.use((req: Request, res: Response, next: any) => {
  res.header("Access-Control-Allow-Origin", "*"); // Izinkan semua asal
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", async (req: Request, res: Response) => {
  try {
    const productData = await fs.readFile(productFilePath, "utf-8");
    const products = JSON.parse(productData);
    res.json(products);
  } catch (error) {
    console.error("Error reading data:", error);
    res.status(500).send("Error reading data");
  }
});

app.get("/api/products/:category", async (req: Request, res: Response) => {
  try {
    const category = req.params.category;
    const productData = await fs.readFile(productFilePath, "utf-8");
    const products = JSON.parse(productData);
    const filteredProducts = products.filter(
      (product: any) => product.kategori === category
    );
    res.json(filteredProducts);
  } catch (error) {
    console.error("Error filtering products:", error);
    res.status(500).send("Error filtering products");
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
