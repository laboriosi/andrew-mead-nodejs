const fs = require("fs");
const chalk = require("chalk");

const notes = {
  save(notes) {
    const dataJSON = JSON.stringify(notes);

    fs.writeFileSync("notes.json", dataJSON);
  },
  add(title, body) {
    const notes = this.list();
    const alreadyHasThatTitle = notes.some((note) => note.title === title);

    if (alreadyHasThatTitle) {
      console.log("Note title taken!");
    } else {
      notes.push({
        title,
        body,
      });

      this.save(notes);
      console.log("New note added!");
    }
  },
  remove(title) {
    const notes = this.list();
    const filteredNotes = notes.filter((note) => note.title !== title);

    if (filteredNotes.length === notes.length) {
      console.log(chalk.bgRed("Note not found!"));
    } else {
      this.save(filteredNotes);
      console.log(chalk.bgGreen("Note removed!"));
    }
  },
  list() {
    try {
      const dataBuffer = fs.readFileSync("notes.json");
      const dataJSON = dataBuffer.toString();
      return JSON.parse(dataJSON);
    } catch {
      return [];
    }
  },
  logTitles() {
    const notes = this.list();

    console.log(chalk.bgBlack.bold("Your notes"));
    notes.forEach((note) => console.log(chalk.bgBlack(`• ${note.title}`)));
  },
  logNote(title) {
    const note = this.get(title);

    if (note) {
      console.log(chalk.bgBlack(note.title));
      console.log(note.body);
    } else {
      console.log(chalk.bgRed("Note not found!"));
    }
  },
  get(title) {
    const notes = this.list();
    return notes.find((note) => note.title === title);
  },
};

module.exports = notes;
