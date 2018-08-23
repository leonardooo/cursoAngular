import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,
   ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-mdform',
  templateUrl: './mdform.component.html',
  styleUrls: ['./mdform.component.css']
})
export class MDFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    // this.form = new FormGroup({
    //   codigo: new FormControl(),
    //   dados: new FormGroup({
    //     titulo: new FormControl(null, Validators.required),
    //     descricao: new FormControl(null, Validators.required)
    //   })
    // });
    this.form = this.formBuilder.group({
      codigo: [null, validarCodigoFactory(100)],
      dados: this.formBuilder.group({
        titulo: [null, Validators.required],
        descricao: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]]
      })
    });
  }

  onSubmit(value: any) {
    console.log(value);
  }

  onReset() {
    this.buildForm();
  }

}

function validarCodigoFactory(max: number) {
  return (c: AbstractControl): ValidationErrors|null => {
    return (+c.value < max) ? null : { vlInvalido : 'Campo obrigatório' };
  };
}
