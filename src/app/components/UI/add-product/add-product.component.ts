import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  fileName: string = '';
  changed: boolean = false;
  constructor() { }

  ngOnInit() {
    
  }

  getFileName(event) {
    this.fileName = event.target.files[0].name
    this.changed = true;
    console.log(this.fileName)
  }


}
