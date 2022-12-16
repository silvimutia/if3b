// (5) Buat router store
const express = require("express");
const router = express.Router();
const Kucing = require("../models/Kucing");

// Create
router.post("/", async (req, res) => {
  // tampung input
  const kucingPost = new Kucing({
    namaTempat: req.body.namaBarang,
    lokasi: req.body.harga,
    deskripsi: req.body.deskripsi,
    nomorHP: req.body.nomorHP,
    urlLokasi: req.body.urlLokasi,
  });

  try {
    // simpan data
    const kucing = await kucingPost.save();
    // response
    res.json(kucing);
  } catch (error) {
    res.json({ message: error });
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const kucing = await Kucing.find();
    res.json(kucing);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update
router.put("/:kucingId", async (req, res) => {
  // tampung input kontent
  const data = {
    namaTempat: req.body.namaBarang,
    lokasi: req.body.harga,
    deskripsi: req.body.deskripsi,
    nomorHP: req.body.nomorHP,
    urlLokasi: req.body.urlLokasi,
  };

  try {
    // update data
    const kucing = await Kucing.updateOne({ _id: req.params.kucingId }, data);
    // response
    res.json(kucing);
  } catch (error) {
    res.json({ message: error });
  }
});

// Delete
router.delete("/:kucingId", async (req, res) => {
  try {
    // delete data
    const kucing = await Kucing.deleteOne({ _id: req.params.kucingId });
    // response
    res.json(store);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports=router;
