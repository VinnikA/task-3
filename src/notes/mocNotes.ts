import { NoteModel } from "./notes.model";

export const mocNotes = [
  new NoteModel('1', 'Task', 'Shopping list', '20/3/2021', 'Tomatoes, bread', ['',''], false),
  new NoteModel('2', 'Random Thought', 'The theory of evolution', '27/2/2021', 'The evolution theory', ['',''], false),
  new NoteModel('3', 'Idea', 'New Feature', '5/5/2021', 'Implement new feature', ['2021-05-03', '2021-05-05'], false),
  new NoteModel('4', 'Quote', 'William Gaddis', '7/5/2021', 'Power doesn\'t corrupt people, people corrupt power.', ['',''], false),
  new NoteModel('5', 'Task', 'Books', '15/5/2021', 'The Learn Startup',  ['',''], false),
  new NoteModel('6', 'Task', 'Cat', '22/9/2022', 'Buy cat\'s food', ['',''], false),
  new NoteModel('7', 'Quote', 'Gandhi', '23/9/2022', 'Be the change that you wish to see in the world', ['',''], false),
];