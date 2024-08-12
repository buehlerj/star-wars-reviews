// Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './utils/table/table.component';

// Components
import { BookReviewComponent } from './components/books/book-review/books.component'
import { CloneWarsReviewComponent } from './components/clone-wars-review/clone-wars-review.component';
import { CloneWarsChronologicalComponent } from './components/clone-wars-chronological/clone-wars-chronological.component';
import { BookSectionComponent } from './components/books/book-section/book-section.component';
import { CharactersComponent } from './components/books/characters/characters.component';
import { BookLandingComponent } from './components/books/book-landing/book-landing.component';
import { LandingComponent } from './components/landing/landing.component';
import { RebelsReviewComponent } from './components/rebels-review/rebels-review.component';
import { AdminComponent } from './components/admin/admin.component';

// Pipes
import { TableDataClassPipe } from './pipes/table-data-class.pipe';

// Prime
import { TableModule } from 'primeng/table';
import { OrderListModule } from 'primeng/orderlist';
import { DragDropModule } from 'primeng/dragdrop';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'book/:code', component: BookLandingComponent },
  { path: 'admin', component: AdminComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    BookReviewComponent,
    CloneWarsReviewComponent,
    CloneWarsChronologicalComponent,
    TableComponent,
    TableDataClassPipe,
    BookSectionComponent,
    CharactersComponent,
    BookLandingComponent,
    LandingComponent,
    RebelsReviewComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TableModule,
    RouterModule.forRoot(routes, {}),
    FormsModule,
    OrderListModule,
    DialogModule,
    ButtonModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
