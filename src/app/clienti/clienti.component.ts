import { ClientiService } from './../clienti.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  constructor(private clientiService: ClientiService) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(response => console.log(response));
  }

}
