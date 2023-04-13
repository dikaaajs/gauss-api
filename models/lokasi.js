import mongoose from "mongoose";

const { Schema } = mongoose;

const LokasiSchema = new Schema({
  long: String,
  lat: String,
  pesan: String,
  tingker: Number,
});

const Lokasi = mongoose.model("Lokasi", LokasiSchema);

export default Lokasi;
