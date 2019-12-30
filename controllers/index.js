const { Works } = require('../models');

const addWorks = async (req, res) => {
    try {
        const work = await Works.create(req.body);
        return res.status(201).json({
            work,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllWorks = async (req, res) => {
    try {
        const works = await Works.findAll();

        return res.status(200).json({ works });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateWorks = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Works.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedWorks = await Works.findOne({ where: { id: id } });
            return res.status(200).json({ Works: updatedWorks });
        }
        throw new Error('Work not found');
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteWorks = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Works.destroy({
            where: { id: id }
        });
        if (deleted) {
            return res.status(200).send("Work deleted");
        }
        throw new Error("Work not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
module.exports = {
    addWorks,
    getAllWorks,
    updateWorks,
    deleteWorks

}