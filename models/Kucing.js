// (4) Buat Schema Mahasiswa
const mongoose = require("mongoose");

const KucingSchema = mongoose.Schema({
  // Buat Schema data
  namaTempat: {
    type: String,
    required: true,
  },
  lokasi: {
    type: String,
    required: true,
  },
  deskripsi: {
    type: String,
    required: true,
  },
  nomorHP: {
    type: String,
    required: true,
  },
  urlLokasi: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Kucing", KucingSchema);
