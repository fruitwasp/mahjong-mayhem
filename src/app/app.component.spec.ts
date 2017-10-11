// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing'
// import { BrowserModule } from '@angular/platform-browser'
// import { RouterModule, Routes } from '@angular/router'
// import { RouterTestingModule } from '@angular/router/testing'

// import { AppComponent } from './app.component'
// import { NavigationComponent, LoadingComponent } from 'app/components'

// import { LoadingService, NotificationManager } from 'app/services'

// class MockLoadingService {
//     private yesIsLoadingCount = 0

//     push() {
//         this.yesIsLoadingCount++

//         return this.yesIsLoadingCount
//     }

//     pop() {
//         if (this.yesIsLoading()) {
//             this.yesIsLoadingCount--
//         }

//         return this.yesIsLoadingCount
//     }

//     yesIsLoading() {
//         return this.yesIsLoadingCount > 0
//     }
// }

// describe('AppComponent', () => {

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [
//                 AppComponent,
//                 NavigationComponent,
//                 LoadingComponent
//             ],
//             imports: [ RouterTestingModule, BrowserModule, RouterModule ],
//             providers: [
//                 { provide: LoadingService, useClass: MockLoadingService },
//                 NotificationManager
//             ]
//         }).compileComponents()
//     }))

//     it('should create the app', async(() => {
//         const fixture = TestBed.createComponent(AppComponent)
//         const app = fixture.debugElement.componentInstance
//         expect(app).toBeTruthy()
//     }))
// })
