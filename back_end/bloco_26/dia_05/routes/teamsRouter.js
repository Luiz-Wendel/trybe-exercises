const express = require('express');
const fs = require('fs');

const newTeamValidator = require('../middlewares/teams/newTeamValidator');

const teamsRouter = express.Router();

teamsRouter.post('/', newTeamValidator, (req, res) => {
  const { body } = req;

  try {
    const path = './teams.js';

    const teams = fs.existsSync(path) ? JSON.parse(fs.readFileSync(path, 'utf-8')) : [];

    const updatedTeams = [...teams, body];

    fs.writeFileSync(path, JSON.stringify(updatedTeams));

    return res.status(200).json(body);
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = teamsRouter;
