import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre="Liste des devoirs";
  assignmentSelectionne!:Assignment;

  formVisible=false;


  assignments:Assignment[] = [
    {
      nom: 'Devoir Angular de Mr Buffa',
      dateDeRendu: new Date('2022-11-30'),
      rendu:false
    },
    {
      nom: 'Devoir WebComponents de Mr Buffa',
      dateDeRendu: new Date('2022-09-30'),
      rendu:false
    },
    {
      nom: 'Devoir BD de Mr Mopolo',
      dateDeRendu: new Date('2022-09-30'),
      rendu:true
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log("appelé à l'initialisation du composant");
  }

  assignmentClique(assignment:Assignment){
    console.log("assignmentClique : " + assignment.nom);
    this.assignmentSelectionne = assignment;
  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  onNouvelAssignment(nouvelAssignment:Assignment) {
    this.assignments.push(nouvelAssignment);
    this.formVisible = false;
  }
}
