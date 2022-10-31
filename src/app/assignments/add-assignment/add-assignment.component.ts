import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {

// Pour le formulaire
nomDevoir = "";
dateDeRendu!:Date;
  constructor(private assignmentsService:AssignmentsService,
              private router:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("onSubmit : " + this.nomDevoir +
                " date de rendu : " + this.dateDeRendu);

    // On ajoute un nouvel assignment
    let nouvelAssignment = new Assignment();
    nouvelAssignment.nom = this.nomDevoir;
    nouvelAssignment.dateDeRendu = this.dateDeRendu;
    nouvelAssignment.rendu = false;
    // le tableau est chez le papa comment faire ?
    //this.assignments.push(nouvelAssignment);

    //this.nouvelAssignment.emit(nouvelAssignment);
    this.assignmentsService.addAssignment(nouvelAssignment)
    .subscribe((message) => {
      console.log(message);
      // ON VA DEVOIR NAVIGUER AVEC LE ROUTER
      // VERS LE COMPOSANT QUI AFFICHE LA LISTE
      //this.router.navigate(['/home']);
    });

  }

}
