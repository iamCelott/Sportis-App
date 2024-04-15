import User from "./Models/UserModel"; // Sesuaikan dengan lokasi file model Anda

interface userCreationAttributes {
  name: string;
  email: string;
  username: string;
  password: string;
}

async function createUser(userData: userCreationAttributes) {
  try {
    const newUser = await User.create(userData);
    console.log("User created:", newUser.toJSON());
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

// Contoh penggunaan
createUser({
  name: "John Doe",
  email: "john@example.com",
  username: "john_doe",
  password: "secret123",
});
