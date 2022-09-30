import { Controller, Get, Post, Patch, Delete, Body, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller()
export class NotesController {
  constructor(private readonly notesService: NotesService) {};

  @Get()
  getAll() {
    return this.notesService.getAllNotes();
  };

  @Get(':id')
  getOne(@Param('id') noteId: string ) {
    return this.notesService.getById(noteId)
  };

  @Post()
  @HttpCode(HttpStatus.CREATED)
  addNote(
    @Body('category') category: string,
    @Body('name') name: string,
    @Body('content') content: string,
    @Body('dates') dates: string[],
  ) {
    this.notesService.addNewNote(category, name, content, dates);
  };

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  updateNote(
    @Param('id') id: string,
    @Body('category') category: string,
    @Body('name') name: string,
    @Body('content') content: string,
    @Body('dates') dates: string[],
  ) {
    this.notesService.updateCurrentNote(id, category, name, content, dates);
  }

  @Delete(':id')
  removeNote(@Param('id') id: string) {
    this.notesService.removeNoteById(id);
  }
  
}
