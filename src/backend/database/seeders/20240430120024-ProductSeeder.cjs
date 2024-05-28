"use strict";
const fs = require("fs");
const path = require("path");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // const imageBuffer = fs.readFileSync(
    //   "C:\\Users\\Dcvir\\Downloads\\meme-faces-11-1.jpg",
    //   { encoding: "utf-8" }
    // );

    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Produk Coba",
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
          price: 600000,
          category: "basket",
          stock: 120,
          condition: false,
          image: "",
          sell: 123,
          ratings: 4.1,
          user_id: 12,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
