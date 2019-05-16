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
        
   /* this.papa.parse(csvData,{
        complete: (result) => {
            console.log('Parsed: ', result);
        }
    });*/

  }

  //Call the Convert Function When The File was selected
 convertFile(input) {

  this.papa.parse(input.files[0], {
    complete: function(results) {
      console.log(results);
      var data = this.papa.parse(results);
      console.log(data);
    }
  });
  /*const reader = new FileReader();
  reader.readAsText(input.files[0]);
  reader.onload = () => {
    let text = reader.result;
    console.log( text );
    
    let csvData = text;
    let options = {
        complete: (results, file) => {
            console.log('Parsed: ', results, file);
        }
        // Add your options here
    };

    this.papa.parse(csvData,options);
}


  };*/
}
 

}
