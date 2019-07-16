import data from '../data/data';

class Controller {
    static Allweather(req, res) {
        return res.status(200).send(data);
    }

    static weather(req, res) {
        const cityName = req.query.city.toLowerCase(); //

        for (let i = 0; i < data.length; i++) {

            if (!cityName) {
                return res.status(400).send({
                    status: 'error',
                    message: 'Please enter a city name'
                });
            } else if (cityName == data[i].city.toLowerCase()) {
                return res.status(200).send(data[i])
            }
        }
        res.status(400).send({
            status: 'error',
            message: 'This city does not exit in our database'
        });
    }



}

export default Controller;