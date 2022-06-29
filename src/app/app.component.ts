import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Management';

  constructor(private book: DataService) { }
  addbook = new FormGroup({
    name: new FormControl(''),
    authorname: new FormControl('')
  });

  SaveData() {
    // console.log(this.addbook.value);
    this.book.savebook(this.addbook.value).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }
  bookdata: any = [];
  ngOnInit(): void {
    this.book.getdata().subscribe((alldata) => {
      console.log(alldata);
      this.bookdata = alldata;

    })
  }
  delete(book_id: any) {

    this.book.deletebook(book_id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    })
  }


}
