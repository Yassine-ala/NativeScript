import {CalendarMonthViewStyle, CellStyle, DayCellStyle} from "nativescript-ui-calendar";
import {Injectable} from "@angular/core";

@Injectable()
export class CalendarStylesService {

    getMonthViewStyle(): CalendarMonthViewStyle {
        const monthViewStyle = new CalendarMonthViewStyle();
        monthViewStyle.showTitle = false;
        monthViewStyle.showDayNames = true;
        /*monthViewStyle.selectionShape = "Round";
        monthViewStyle.selectionShapeSize = 25;
        monthViewStyle.selectionShapeColor = "lightskyblue";*/

        const todayCellStyle = new DayCellStyle();
        todayCellStyle.cellTextColor = "Red";
        todayCellStyle.cellBorderWidth = 1;
        todayCellStyle.cellBorderColor = "Gray";
        todayCellStyle.cellTextFontName = "Times New Roman";
        todayCellStyle.cellTextFontStyle = "Bold";
        todayCellStyle.cellTextSize = 16;
        monthViewStyle.todayCellStyle = todayCellStyle;

        const dayCellStyle = new DayCellStyle();
        dayCellStyle.cellTextColor = "Black";
        dayCellStyle.cellAlignment = "center";
        dayCellStyle.cellTextFontName = "Times New Roman";
        dayCellStyle.cellTextSize = 16;
        monthViewStyle.dayCellStyle = dayCellStyle;

        const selectedCellStyle = new DayCellStyle();
        selectedCellStyle.cellTextColor = "#1976D2";
        selectedCellStyle.cellBackgroundColor = "lightskyblue";
        selectedCellStyle.cellTextFontName = "Times New Roman";
        selectedCellStyle.cellTextFontStyle = "Bold";
        selectedCellStyle.cellTextSize = 16;
        monthViewStyle.selectedDayCellStyle = selectedCellStyle;

        const dayNameCellStyle = new CellStyle();
        dayNameCellStyle.cellTextColor = "Black";
        dayNameCellStyle.cellTextFontName = "Times New Roman";
        dayNameCellStyle.cellTextFontStyle = "Bold";
        dayNameCellStyle.cellTextSize = 20;
        monthViewStyle.dayNameCellStyle = dayNameCellStyle;

        const titleCellStyle = new DayCellStyle();
        titleCellStyle.cellTextColor = "#1976D2";
        titleCellStyle.cellTextFontName = "Times New Roman";
        titleCellStyle.cellTextFontStyle = "BoldItalic";
        titleCellStyle.cellTextSize = 30;
        monthViewStyle.titleCellStyle = titleCellStyle;

        return monthViewStyle;
    }

}