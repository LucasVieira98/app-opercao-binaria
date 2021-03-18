import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { MaterialModule } from '../material.module';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('formulario', {static: false}) form: NgForm;
  resultadoDaOperacao: any;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  }

  operacaoBinaria(s, v1, v2) {
    const v1Number = parseInt(v1, 2);
    const v2Number = parseInt(v2, 2);
    let result = 0;
    switch (s) {
      case '+':
        result = v1Number + v2Number;
        break;
      case '-':
        result = v1Number - v2Number;
        break;
      case '*':
        result = v1Number * v2Number;
        break;
      case '/':
        result = v1Number / v2Number;
        break;
      case '%':
        result = v1Number % v2Number;
        break;
    }
    return this.converterNumeroBinario(result);
  }

  realizarOperacao() {
    const resultado = this.operacaoBinaria(
      this.form.value.operacao,
      this.form.value.primeiroNumero,
      this.form.value.segundoNumero
    );
    this.resultadoDaOperacao = resultado;
  }

  converterNumeroBinario(dec) {
    const binario = dec >= 0 ? dec.toString(2) : (~dec).toString(2);
    const tamanho = binario.length > 32 ? 64 : binario.length > 16 ? 32 : binario.length > 8 ? 16 : 8;
    return ('0'.repeat(tamanho) + binario).substr(-tamanho);
  }

}
