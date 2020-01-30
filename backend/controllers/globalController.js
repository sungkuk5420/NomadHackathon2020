import dotenv from "dotenv";
import Card from "../models/Card";

dotenv.config();

export const addTeamCard = async (req, res) => {
  const {
    body: { params }
  } = req;
  try {
    const addTeamCard = params.addTeamCard;
    const insertTeamCard = await Card.create(addTeamCard);
    res.json(insertTeamCard);
    res.end();
  } catch (error) {
    console.log(error);
    res.end();
  }
};

export const getTeamCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
    res.end();
  } catch (error) {
    console.log(error);
    res.end();
  }
};
