import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';

import { NotFoundComponent } from './component/not-found/not-found.component';
import { CartComponent } from './component/cart/cart.component';
import { CartDetailsComponent } from './component/cart-details/cart-details.component';
import { FooterComponent } from './component/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';

import {MatMenuModule} from '@angular/material/menu';
import { SearchComponent } from './component/search/search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


import { FormsModule , ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
  
    NotFoundComponent,
    CartComponent,
    CartDetailsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SearchComponent,

 
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule 
  ],
  exports :[
    FooterComponent,
    NavbarComponent,
    CartComponent,
    CartDetailsComponent,
     HeaderComponent,
     SidebarComponent,
     SearchComponent

    
  ]
})
export class SharedModule { }
