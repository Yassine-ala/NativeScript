import {Component, OnInit} from '@angular/core';
import {RouterExtensions} from "nativescript-angular";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  moduleId: module.id,
})
export class Page1Component implements OnInit{

  constructor(private routerExtensions: RouterExtensions) { }

    basiclist: string[] = ['item1', 'item2', 'item3', 'item4','bob','maria'];
    favlist: boolean[] = [false, false, false, false, false, false];
    filteredlist: string[] = [];
    showFilters: boolean = false;

    shipName: string = "";
    shipRegistration: string = "";

    ngOnInit(): void {
        this.filteredlist = this.basiclist;
    }

    showAlert(args) {
        console.log(this.basiclist[args.index] + ' clicked');
    }

    search() {
      if(this.filteredlist != null) {
      this.filteredlist = this.basiclist.filter(item => item.toLowerCase() == this.shipName.toLowerCase());
      }
    }

    back() {
      this.routerExtensions.back();
    }

}
