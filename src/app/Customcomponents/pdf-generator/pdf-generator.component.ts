import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.scss']
})
export class PdfGeneratorComponent implements OnInit {


jsPDF: any; // Important
columns = [
    {title: "ID", dataKey: "id"},
    {title: "Name", dataKey: "name"}, 
    {title: "Country", dataKey: "country"}
];

rows = [
    {"id": 1, "name": "Shaw", "country": "Tanzania"},
    {"id": 2, "name": "Nelson", "country": "Kazakhstan"},
    {"id": 3, "name": "Garcia", "country": "Madagascar"}
];
  constructor() { }

  ngOnInit() {
  }



// Only pt supported (not mm or in)




g(){
	
alert('eux');


let doc = new this.jsPDF('p', 'pt');


doc.autoTable(this.columns, this.rows, {
    theme: 'plain', // 'striped', 'grid' or 'plain'
    styles: {fillColor: [100, 255, 255]},
    columnStyles: {
    	id: {fillColor: 255}
    },
    margin: {top: 60},
    addPageContent: function(data) {
    	doc.text("Header", 40, 30);
    }
});
doc.save('table.pdf');
}

}

