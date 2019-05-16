import { Component } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'papademo';

  constructor(private papa: Papa){

    const csvData = '"Hello","World!"';
        
    this.papa.parse(csvData,{
        complete: (result) => {
            console.log('Parsed: ', result);
        }
    });

  }

}
