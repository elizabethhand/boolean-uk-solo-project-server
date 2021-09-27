const { restaurant } = require("../../../utils/database");

const getOneRestaurant = async (req, res) => {
    let restaurantId = Number(req.params.id)

    console.log(restaurantId)

    try {
        const foundRestaurant = await restaurant.findUnique({
            where: {
                id: restaurantId,
            },
            include: {
                deal: true,
            },
        })
        res.json({ data: foundRestaurant });
    } catch (error) {
        res.json({ error: error.message });
    }
};

module.exports = { getOneRestaurant }