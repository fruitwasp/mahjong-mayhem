import { NgModule } from '@angular/core'
import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdRippleModule, MdListModule, MdMenuModule } from '@angular/material'

@NgModule({
  imports: [
      MdButtonModule,
      MdCheckboxModule,
      MdToolbarModule,
      MdCardModule,
      MdRippleModule,
      MdListModule,
      MdMenuModule
  ],
  exports: [
      MdButtonModule,
      MdCheckboxModule,
      MdToolbarModule,
      MdCardModule,
      MdRippleModule,
      MdListModule,
      MdMenuModule
  ],
})
export class MaterialModule { }
