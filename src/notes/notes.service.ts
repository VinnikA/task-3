import { Injectable, NotFoundException } from '@nestjs/common';
import { NoteModel } from './notes.model';
import { mocNotes } from './mocNotes';

@Injectable()
export class NotesService {
  notes: NoteModel[] = [...mocNotes].map(item => {if(item) return {...item}});

  private findNote(id: string): [NoteModel, number] {
    const noteIndex = this.notes.findIndex(item => item.id === id);
    const note = this.notes[noteIndex];
    if(!note) {
      throw new NotFoundException();
    };
    return [note, noteIndex];
  }

  getAllNotes() {
    return this.notes;
  }

  getById(id: string) {
    const note = this.findNote(id)[0];
    return {...note};
  }

  addNewNote(
    category: string, 
    name: string, 
    content: string, 
    dates: string[]
  ) {
    const noteId = Date.now().toString();
    const getTimeMark = () => {
      const time = new Date().toString().split(' ');
      return `${time[1]} ${time[2]}, ${time[3]}`;
    }
    const newNote = new NoteModel(noteId, category, name, getTimeMark(), content, dates, false);
    this.notes.push(newNote);
  }

  updateCurrentNote(
    id: string, 
    category: string, 
    name: string, 
    content: string, 
    dates: string[]
  ) {
    const [note, index] = this.findNote(id);
    this.notes[index] = {...note, category, name, content, dates};
    return null;
  } 

  removeNoteById(id: string) {
    this.notes = this.notes.filter(item => item.id !== id);
  }

}
