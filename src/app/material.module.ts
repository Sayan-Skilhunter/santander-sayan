import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
    imports: [MatCardModule, MatExpansionModule, MatCheckboxModule, MatToolbarModule, MatButtonToggleModule, MatSidenavModule, MatTableModule, MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule],
    exports: [MatCardModule, MatExpansionModule, MatCheckboxModule, MatToolbarModule, MatButtonToggleModule , MatSidenavModule, MatTableModule, MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule]
})
export class MaterialModule {}