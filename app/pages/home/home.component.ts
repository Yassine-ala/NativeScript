import {Component, OnInit} from '@angular/core';
import * as app from "application";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  moduleId: module.id,
})
export class HomeComponent implements OnInit {

  showMsg : boolean = false;
  helpMsg = "No help for you";

  public showHelp() {
    this.showMsg = true;
  }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
