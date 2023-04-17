import Lokasi from "../models/lokasi.js";

export const tambahLokasi = async (req, res) => {
  const { lat, long, tingker, token } = req.body;
  if (token !== "onichanbaka") return res.status(400).json("token salah ngab");

  let pesan;
  if (tingker < 500) {
    pesan = "tanah basah";
  } else if(tingker > 750) {
    pesan = "tanah kering";
  }else {
    pesan = "sedang (tidak kering tidak basah)"
  }

  try {
    const newLokasi = new Lokasi({
      lat,
      long,
      pesan,
      tingker,
    });

    await newLokasi.save();
    res.status(201).json({ msg: "berhasil menambahkan data lokasi" });
  } catch (error) {
    res.status(400).json({ msg: "gagal menambahkan data lokasi" });
  }
};

export const getAllLokasi = async (req, res) => {
  try {
    const response = await Lokasi.find();
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteLokasi = async (req, res) => {
  try {
    await Lokasi.findByIdAndDelete(req.params.id);
    res.status(201).json({ msg: "data lokasi berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ msg: "terjadi kesalahan saat menghapus data lokasi" });
  }
};
