import { Injectable, ɵɵNgOnChangesFeature } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../assignments/assignment.model';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      id: 1,
      nom: 'Devoir Angular de Mr Buffa',
      dateDeRendu: new Date('2022-11-30'),
      rendu:false
    },
    {
      id: 2,
      nom: 'Devoir WebComponents de Mr Buffa',
      dateDeRendu: new Date('2022-09-30'),
      rendu:false
    },
    {
      id:3,
      nom: 'Devoir BD de Mr Mopolo',
      dateDeRendu: new Date('2022-09-30'),
      rendu:true
    }
  ]
  constructor(private loggingService:LoggingService) { }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }
  getAssignment(id:number):Observable<Assignment|undefined>{
    const a:Assignment|undefined =  this.assignments.find(a => a.id === id);
    return of(a);
  }

  addAssignment(assignment:Assignment):Observable<string> {
    this.assignments.push(assignment);
    // ex utilisation du service de log
    this.loggingService.log(assignment.nom, "ajouté");

    return of("Assignment ajouté");
  }

  deleteAssignment(assignment:Assignment):Observable<string> {
    const position = this.assignments.indexOf(assignment);
    this.assignments.splice(position,1);

      // ex utilisation du service de log
      this.loggingService.log(assignment.nom, "supprimé");

    return of("Assignment supprimé");

  }

  updateAssignment(assignment:Assignment):Observable<string> {
    // Rien à faire pour le moment, plus tard
    // il faudra faire une requête HTTP PUT
    // sur un web service distant etc.

      // ex utilisation du service de log
      this.loggingService.log(assignment.nom, "modifié");

    return of("Assignment modifié");
  }
}
