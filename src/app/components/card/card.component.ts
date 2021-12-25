import { Card } from 'src/app/models/card';
import { CardService } from './../../services/card.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardAddForm: FormGroup
  cards:Card[];

  constructor(private cardService: CardService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createCardAddForm()
  }

  createCardAddForm() {
    this.cardAddForm = this.formBuilder.group({
      cardNumber: ["", Validators.required],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      ccv: ["", Validators.required]
    })
  }

  addCard() {

    if (this.cardAddForm.valid) {

      let cardModel = Object.assign({}, this.cardAddForm.value);
      this.cardService.addCard(cardModel).subscribe(response => {
        console.log(response)
        this.toastrService.success(response.message)
      }, responseError => {
        console.log(responseError.error)
        if (responseError.error.Errors.length>0) {
          for (let i = 0; i < responseError.error.Errors.length;i++) {
          this.toastrService.error(responseError.error.Errors[i].ErrorMessage)
        }
        } else{
          this.toastrService.error("Eksik/Hatalı Bilginiz Bulunmaktadır")
        }

      }
     
      )}
  }
  
}


