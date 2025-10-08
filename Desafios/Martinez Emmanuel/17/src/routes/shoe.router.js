import { Router } from "express";
import { deleteImageFile, existsImageFile } from "../utils/imageFileHandler.js";
import { readJsonFile, writeJsonFile } from "../utils/jsonFileHandler.js";
import uploader from "../utils/uploader.js";

const router = Router();
const SHOE_FILE_NAME = "shoes.json";

router.get("/", async (req, res) => {

    try {
        const { brand, size } = req.query;
        const shoes = await readJsonFile(SHOE_FILE_NAME);
        console.log(shoes);

        let filteredShoes = [...shoes];

        if (brand) {
            filteredShoes = filteredShoes.filter((shoe) => String(shoe.brand).toLowerCase() === String(brand).toLowerCase());
        }

        if (size) {
            filteredShoes = filteredShoes.filter((shoe) => Number(shoe.size) === Number(size));
        }

        res.status(200).json({ status: "success", payload: filteredShoes });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const shoes = await readJsonFile(SHOE_FILE_NAME);
        const shoe = shoes.find((shoe) => shoe.id === Number(id));

        if (!shoe) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a un zapato registrado" });
        }

        res.status(200).json({ status: "success", payload: shoe });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

router.post("/", uploader.single("image"), async (req, res) => {
    try {
        const { brand, model, size, price } = req.body;

        if (!brand || !model || !size || !price) {
            if (req.file && req.file.filename) {
                // Se elimina la imagen cuando hay una imagen subida pero faltan datos de relevancia
                await deleteImageFile(req.file.filename);
            }
            return res.status(400).json({ status: "error", message: "Faltan datos de relevancia" });
        }

        const shoes = await readJsonFile(SHOE_FILE_NAME);
        const newId = shoes.length > 0 ? Math.max(...shoes.map((shoe) => shoe.id)) + 1 : 1;

        const newShoe = {
            id: newId,
            brand,
            model,
            size,
            price,
            thumbnail: req.file ? req.file.filename : "default.jpg",
        };

        shoes.push(newShoe);
        await writeJsonFile(SHOE_FILE_NAME, shoes);

        res.status(201).json({ status: "success", payload: newShoe });
    } catch (error) {
        if (req.file && req.file.filename) {
            // Se elimina la imagen cuando hay un error
            await deleteImageFile(req.file.filename);
        }
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

router.put("/:id", uploader.single("thumbnail"), async (req, res) => {
    try {
        const { id } = req.params;
        const shoes = await readJsonFile(SHOE_FILE_NAME);

        const index = shoes.findIndex((shoe) => shoe.id === Number(id));
        if (index < 0) {
            if (req.file?.filename) {
                // Se elimina la nueva imagen cuando hay un error
                await deleteImageFile(req.file.filename);
            }
            return res.status(404).json({ status: "error", message: "El id no corresponde a un zapato registrado" });
        }

        const shoe = shoes[index];
        if (req.body.brand) shoe.brand = req.body.brand;
        if (req.body.model) shoe.model = req.body.model;
        if (req.body.size) shoe.size = req.body.size;
        if (req.body.price) shoe.price = req.body.price;

        if (req.file && req.file?.filename !== shoe.thumbnail) {
            if (shoe.thumbnail && shoe.thumbnail !== "default.jpg" && await existsImageFile(shoe.thumbnail)) {
                // Se elimina la imagen del zapato si no es la imagen por defecto
                await deleteImageFile(shoe.thumbnail);
            }
            shoe.thumbnail = req.file.filename;
        }

        shoes[index] = shoe;
        await writeJsonFile(SHOE_FILE_NAME, shoes);

        res.status(200).json({ status: "success", payload: shoe });
    } catch (error) {
        if (req.file?.filename) {
            // Se elimina la nueva imagen cuando hay un error
            await deleteImageFile(req.file.filename);
        }
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

router.patch("/:id/size", async (req, res) => {
    try {
        const { id } = req.params;
        const { size } = req.body;
        const shoes = await readJsonFile(SHOE_FILE_NAME);

        const index = shoes.findIndex((shoe) => shoe.id === Number(id));
        if (index < 0) return res.status(404).json({ message: "El id no corresponde" });

        if (!size || isNaN(size)) return res.status(400).json({ message: "El tamaño debe ser numérico" });
        if (size < 20 || size > 50) return res.status(400).json({ message: "El tamaño debe estar entre 20 y 50" });

        shoes[index].size = Number(size);
        await writeJsonFile(SHOE_FILE_NAME, shoes);

        res.status(200).json({ status: "success", payload: shoes[index] });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const shoes = await readJsonFile(SHOE_FILE_NAME);
        const index = shoes.findIndex((shoe) => shoe.id === Number(id));

        if (index < 0) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a un zapato registrado" });
        }

        const shoe = shoes[index];
        shoes.splice(index, 1);
        await writeJsonFile(SHOE_FILE_NAME, shoes);

        if (shoe.thumbnail && shoe.thumbnail !== "default.jpg") {
            // Se elimina la imagen del zapato si no es la imagen por defecto
            await deleteImageFile(shoe.thumbnail);
        }

        res.status(204).json({ status: "success" });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

export default router;