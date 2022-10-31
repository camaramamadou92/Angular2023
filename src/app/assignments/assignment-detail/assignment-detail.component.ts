import { Component, Input, OnInit } from '@angular/core';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentDetailComponent implements OnInit {
  /*@Input() */ assignmentTransmis!: Assignment|undefined ;

  constructor(private assignmentsService: AssignmentsService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.getAssignment();
  }
  getAssignment(){
    //on recupere  l'id dans le snapshot passé par le routeur
    //le "+"  force la conversion  de l'id de type string en "number"
    const id = +this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(id)
       .subscribe(a => this.assignmentTransmis = a);
  }

  onAssignmentRendu() {
    if (!this.assignmentTransmis) return;
    this.assignmentTransmis.rendu = true;
    this.assignmentsService
      .updateAssignment(this.assignmentTransmis)
      .subscribe((message) => console.log(message));
  }

  onDeleteAssignment() {
    if (!this.assignmentTransmis) return;
    this.assignmentsService
      .deleteAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message);
        this.assignmentTransmis = undefined;
      });
  }
}
