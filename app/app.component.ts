import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import {DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition} from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

const sideDrawer = <RadSideDrawer>app.getRootView();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    private _sideDrawerTransition: DrawerTransitionBase;

    constructor(private routerExtensions: RouterExtensions) {}

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    redirectHome() {
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
        sideDrawer.closeDrawer();
    }
    redirectPage1() {
        this.routerExtensions.navigate(["/page1"], { clearHistory: true });
        sideDrawer.closeDrawer();
    }
    redirectPage2() {
        this.routerExtensions.navigate(["/page2"], { clearHistory: true });
        sideDrawer.closeDrawer();
    }
    redirectPage3() {
        this.routerExtensions.navigate(["/page3"], { clearHistory: true });
        sideDrawer.closeDrawer();
    }

}
