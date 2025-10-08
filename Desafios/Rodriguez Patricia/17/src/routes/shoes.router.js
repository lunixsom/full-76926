import { Router } from "express";
import { deleteImageFile, existsImageFile } from "../utils/imageFileHandler.js";
import { readJsonFile, writeJsonFile } from "../utils/jsonFileHandler.js";
import uploader from "../utils/uploader.js";

const router = Router();
const SHOES_FILE_NAME = "shoes.json";

router.get("/", async (req, res) => {
    try {
        const { brand, model } = req.query;
        const shoes = await readJsonFile(SHOES_FILE_NAME);

        let filteredShoes = [...shoes];

        if (brand) {
            filteredShoes = filteredShoes.filter((shoe) => String(shoe.brand).toLowerCase() === String(brand).toLowerCase());
        }

        if (model) {
            filteredShoes = filteredShoes.filter((shoe) => String(shoe.model) === String(model));
        }

        res.status(200).json({ status: "success", payload: filteredShoes });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const shoes = await readJsonFile(SHOES_FILE_NAME);
        const shoe = shoes.find((shoe) => shoe.id === Number(id));

        if (!shoe) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a los zapatos en stock" });
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
                await deleteImageFile(req.file.filename);
            }
            return res.status(400).json({ status: "error", message: "Faltan datos de relevancia" });
        }

        const shoes = await readJsonFile(SHOES_FILE_NAME);
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
        await writeJsonFile(SHOES_FILE_NAME, shoes);

        res.status(201).json({ status: "success", payload: newShoe });
    } catch (error) {
        if (req.file && req.file.filename) {
            await deleteImageFile(req.file.filename);
        }
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

router.put("/:id", uploader.single("thumbnail"), async (req, res) => {
    try {
        const { id } = req.params;
        const shoes = await readJsonFile(SHOES_FILE_NAME);

        const index = shoes.findIndex((shoe) => shoe.id === Number(id));
        if (index < 0) {
            if (req.file?.filename) {

                await deleteImageFile(req.file.filename);
            }
            return res.status(404).json({ status: "error", message: "El id no corresponde a zapatos registrados" });
        }

        const shoe = shoes[index];
        if (req.body.brand) shoe.brand = req.body.brand;
        if (req.body.model) shoe.model = req.body.model;
        if (req.body.size) shoe.size = req.body.size;
        if (req.body.price) shoe.price = req.body.price;

        if (req.file && req.file?.filename !== shoe.thumbnail) {
            if (shoe.thumbnail && shoe.thumbnail !== "default.jpg" && await existsImageFile(shoe.thumbnail)) {
                await deleteImageFile(shoe.thumbnail);
            }
            shoe.thumbnail = req.file.filename;
        }

        shoes[index] = shoe;
        await writeJsonFile(SHOES_FILE_NAME, shoes);

        res.status(200).json({ status: "success", payload: shoe });
    } catch (error) {
        if (req.file?.filename) {
            await deleteImageFile(req.file.filename);
        }
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const shoes = await readJsonFile(SHOES_FILE_NAME);
        const index = shoes.findIndex((shoe) => shoe.id === Number(id));

        if (index < 0) {
            return res.status(404).json({ status: "error", message: "El id no corresponde a zapatos de nuestro stock" });
        }

        const shoe = shoes[index];
        shoes.splice(index, 1);
        await writeJsonFile(SHOES_FILE_NAME, shoes);

        if (shoe.thumbnail && shoe.thumbnail !== "default.jpg") {
            await deleteImageFile(shoe.thumbnail);
        }

        res.status(204).json({ status: "success" });
    } catch (error) {
        res.status(error.code || 500).json({ status: "error", message: error.message });
    }
});

export default router;