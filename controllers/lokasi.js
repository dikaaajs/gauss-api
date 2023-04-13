import Lokasi from "../models/lokasi.js";

export const tambahLokasi = async (req, res) => {
  const { lat, long, tingker, token } = req.body;
  if (token !== "onichanbaka") return res.status(400).json("token salah ngab");

  let pesan;
  if (tingker < 50) {
    pesan = "bawah kkm";
  } else {
    pesan = "atas kkm";
  }

  try {
    await Lokasi.create({ lat, long, pesan, tingker });
    res.status(201).json({ msg: "berhasil menambahkan data lokasi" });
  } catch (error) {
    res.status(400).json({ msg: "gagal menambahkan data lokasi" });
  }
};

export const getAllLokasi = async (req, res) => {
  try {
    const response = await Lokasi.findAll();
    console.log(response);
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteLokasi = async (req, res) => {
  try {
    await Lokasi.destroy({ where: { id: req.params.id } });
    res.status(201).json({ msg: "data lokasi berhasil dihapus" });
  } catch (e) {
    console.log(e.message);
  }
};
