import { Injectable } from '@nestjs/common';
import { NoteModel } from '../notes.model';
import { mocNotes } from '../mocNotes';

@Injectable()
export class StatsService {
  notes: NoteModel[] = [...mocNotes].map(item => {if(item) return {...item}});

  private getFiltredByCategory(notes: NoteModel[], key: string, keyValue: string) {
    return notes.filter(el => {
      (key as (keyof typeof el))
      return el[(key as (keyof typeof el))] === keyValue
    });
  };
  
  private getActive(notes: NoteModel[], key: string, keyValue: boolean) {
    return notes.filter(el => {
      (key as (keyof typeof el))
      return el[(key as (keyof typeof el))] === keyValue
    });
  };

  private getCategories() {
    const categories = [];
    new Set(this.notes.map(item => item.category)).forEach(item => categories.push(item));
    return new Set(this.notes.map(item => item.category));
  }
  
  getStats() {
    const result = [];
    const categories = this.getCategories()
    for (const keyValue of categories) {
      const allByCategory = this.getFiltredByCategory(this.notes, 'category', keyValue);
      const activeItems = this.getActive(allByCategory, 'archived', false);
      result.push({
        name: keyValue, 
        active: activeItems.length,
        archived: allByCategory.length - activeItems.length
      })
    }
    return [...result];
  };
}
