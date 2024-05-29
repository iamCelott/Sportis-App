import express, { Request, Response } from "express";
import conn from "../database/config/Connection";
import { Cart } from "../database/Models/CartModel";
import { Product } from "../database/Models/ProductModel";
import { User } from "../database/Models/UserModel";
import multer from "multer";
import cors from "cors";
import Shop from "../../frontend/pages/Shop";

const app = express();
const port: number = 3000;

const storage = multer.diskStorage({
  destination: function (req: Request, file, cb) {
    cb(null, "../../../public/products/");
  },
  filename: function (req: Request, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

conn
  .authenticate()
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((err) => {
    console.log("Unable to Connect to Database!" + err);
  });

app.use(cors());
app.use(express.json());

app.post("/upload", upload.single("file"), (req: Request, res: Response) => {
  console.log(req.file, req.body);
});

app.post("/create", async (req: Request, res: Response) => {
  try {
    const record = await User.create(req.body);
    return res.json({ record, msg: "Successfully Create User" });
  } catch (e) {
    console.error(e);
    return res.json({ msg: "Fail to Create", status: 500, route: "/create" });
  }
});

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const record = await User.findOne({
      where: { email: email, password: password },
    });

    if (!record) {
      return res.json({ status: 401, msg: "Incorrect Gmail or Password" });
    }

    return res.json({ status: 200, userId: record.id });
  } catch (e) {
    console.error("Error during login:", e);
    return res.status(500).json({ msg: "An error occurred during login" });
  }
});

app.get("/products", async (req: Request, res: Response) => {
  try {
    const record = await Product.findAll();
    res.json(record);
  } catch (e) {
    console.error("Error Find Product:", e);
    return res
      .status(500)
      .json({ msg: "An error occurred during Find Product" });
  }
});

app.get("/product/:name/:id", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    const id = req.params.id;
    const record = await Product.findAll({ where: { name: name, id: id } });
    res.json(record);
  } catch (e) {
    console.error("Error Find Product:", e);
    return res
      .status(500)
      .json({ msg: "An error occurred during Find Product" });
  }
});

app.get("/category/:categoryname", async (req: Request, res: Response) => {
  try {
    const categoryname = req.params.categoryname;
    const record = await Product.findAll({ where: { category: categoryname } });
    res.json(record);
  } catch (e) {
    console.error("Error Find Product:", e);
    return res
      .status(500)
      .json({ msg: "An error occurred during Find Product" });
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const record = await User.findAll({ where: { id: id } });
    res.json(record);
  } catch (e) {
    console.error("Error Find Product:", e);
    return res
      .status(500)
      .json({ msg: "An error occurred during Find Product" });
  }
});

app.post("/add-to-cart", async (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body;
  try {
    const record = await Cart.create({
      user_id: userId,
      product_id: productId,
      quantity: quantity,
    });
  } catch (e) {
    console.error("Error Add to Cart:", e);
    return res
      .status(500)
      .json({ msg: "An error occurred during Add to Cart" });
  }
});

app.post("/shop-product", async (req: Request, res: Response) => {
  const { user_id } = req.body;
  try {
    const record = await Product.findAll({ where: { user_id: user_id } });
    res.json(record);
  } catch (e) {
    console.error("Error Find Shop Product:", e);
    return res
      .status(500)
      .json({ msg: "An error occurred during Find Shop Product" });
  }
});

// app.get('/shop', async (req: Request, res:Response) => {
//   const id =
// })

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
