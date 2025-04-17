const Idea = require('../models/ideaModel');


exports.createIdea = async (req, res) => {
  try {
    const { title, description } = req.body;
    const idea = new Idea({ title, description });
    await idea.save();
    res.status(201).json(idea);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create idea', error: error.message });
  }
};


exports.getIdeas = async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.status(200).json(ideas);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get ideas', error: error.message });
  }
};

exports.deleteItem = async (req,res) =>{
  try {
    const {id} = req.params;
    const deletedItem = await Idea.findByIdAndDelete(id);
    res.status(200).json({
      message:"Item Deleted"
    })
  } catch (error) {
    res.status(500).json({
      message:"Error "
    })

  }
}