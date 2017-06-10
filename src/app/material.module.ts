import { NgModule } from '@angular/core'
import {
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdIconModule,
    MdListModule,
    MdMenuModule,
    MdToolbarModule,
    MdRippleModule
} from '@angular/material'

@NgModule({
    imports: [
        MdButtonModule,
        MdCardModule,
        MdCheckboxModule,
        MdIconModule,
        MdListModule,
        MdMenuModule,
        MdToolbarModule,
        MdRippleModule,
    ],
    exports: [
        MdButtonModule,
        MdCardModule,
        MdCheckboxModule,
        MdIconModule,
        MdListModule,
        MdMenuModule,
        MdToolbarModule,
        MdRippleModule
    ],
})
export class MaterialModule { }
