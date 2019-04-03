import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClientesService) { }

  clientes: Cliente[] = [];

  criterio: String;

  ngOnInit() {
    this.clienteService.getAll()
      .subscribe(data => this.clientes = data, err => {
        alert('Aconteceu um erro!');
      });

    this.clienteService.clientesChanged.subscribe(
      (observable: any) => observable.subscribe(
        data => this.clientes = data
      )
    );
  }



}
