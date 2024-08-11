const Remainder = require('../models/remainderModel')
const Disaster = require('../models/disasterModel')


const addRemainder = ( async (req, res) => {
    try {

        let user = await Remainder.findOne({ userid : req.user.id });

        if (user) {
          
            const updateremainder = await Remainder.findOneAndUpdate({ userid: req.user.id }, 
                {
                    $push: {
                        remainder : req.body.remainder
                    }
                },
                { new: true }
            )
            res.status(200).json({ message: 'Remainder updated', updateremainder });
        } else {
           
            const newremainder = new Remainder({
                remainder: req.body.remainder,
                userid : req.user.id
            });

            await newremainder.save();
            res.status(201).json({ message: 'Remainder created', newremainder });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


const deleteRemainder = ( async (req, res) => {
    try {
        const { disasterid } = req.params;

        const remainder = await Remainder.findOne({ userid : req.user.id });

        if (!remainder) {
            return res.status(404).json({ message: 'No remainder found for this user' });
        }

        const updatedRemainder = remainder.remainder.filter(item => item.disasterid !== disasterid);

        if (updatedRemainder.length === remainder.remainder.length) {
            return res.status(404).json({ message: 'No disaster found with this ID for this user' });
        }

        remainder.remainder = updatedRemainder;

        await remainder.save();

        res.status(200).json({ message: 'Disaster removed successfully', remainder });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});



const getallremainder = ( async (req, res) => {
    try {
        const user = await Remainder.findOne({ userid : req.user.id });
        
        if (!user) {
            return res.status(404).json({ message: 'No remainder found for this user' });
        }

        const disasterid = user.remainder.map(item => item.disasterid);

        const disasters = await Disaster.find({ id: { $in: disasterid } });

        res.status(200).json(disasters);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});


module.exports = {addRemainder,deleteRemainder,getallremainder} 