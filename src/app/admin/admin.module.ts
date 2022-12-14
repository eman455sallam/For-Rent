import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './component/reports/reports.component';
import { ReportsDetailsComponent } from './component/reports-details/reports-details.component';
import { AdminhomeComponent } from './component/adminhome/adminhome.component';
import { ListcontactsComponent } from './component/listcontacts/listcontacts.component';
import { OwnersComponent } from './component/owners/owners.component';
import { RentersComponent } from './component/renters/renters.component';
import { AdminsComponent } from './component/admins/admins.component';
import { AddAdminComponent } from './component/add-admin/add-admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MaterialModule } from '../material/material.module';
import { MatSortModule } from '@angular/material/sort';
import { AdverRequestsComponent } from './component/adver-requests/adver-requests.component';
import { TokenInterceptorInterceptor } from './interceptor/token-interceptor.interceptor';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BlockListComponent } from './component/block-list/block-list.component';
// import { FollowUsComponent } from './component/follow-us/follow-us.component';
import { TeamMembersComponent } from './component/team-members/team-members.component';
import { FollowLinksComponent } from './component/follow-links/follow-links.component';
import { AboutPolictyComponent } from './component/about-policty/about-policty.component';
import { AboutPolictyUpdateComponent } from './component/about-policty-update/about-policty-update.component';
import { AcceptedAdsComponent } from './component/accepted-ads/accepted-ads.component';
import { RejecteddAdsComponent } from './component/rejectedd-ads/rejectedd-ads.component';
import { PayedAdsComponent } from './component/payed-ads/payed-ads.component';
import { AboutPolictyAddComponent } from './component/about-policty-add/about-policty-add.component';
import { TeamMemberUpdateComponent } from './component/team-member-update/team-member-update.component';
import { FollowLinksUpdateComponent } from './component/follow-links-update/follow-links-update.component';
import { GenderPipe } from './pipes/gender.pipe';
// import { TeamMemberUpdateComponent } from './component/team-member-update/team-member-update.component';
import { PendingDetailsComponent } from './component/pending-details/pending-details.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    ReportsComponent,
    ReportsDetailsComponent,
    AdminhomeComponent,
    ListcontactsComponent,
    OwnersComponent,
    RentersComponent,
    AdminsComponent,
    AddAdminComponent,
    AdverRequestsComponent,
    AdminsComponent,
    BlockListComponent,
    TeamMembersComponent,
    FollowLinksComponent,
    AboutPolictyComponent,
    AboutPolictyUpdateComponent,
    AcceptedAdsComponent,
    RejecteddAdsComponent,
    PayedAdsComponent,
    AboutPolictyAddComponent,
    TeamMemberUpdateComponent,
    FollowLinksUpdateComponent,
    GenderPipe,
    // TeamMemberUpdateComponent,
    PendingDetailsComponent,

  ],


  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MaterialModule,
    MatSortModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],

  exports:[
    ListcontactsComponent,
    OwnersComponent,
    RentersComponent,
    AdminsComponent,
    AddAdminComponent,
    AdverRequestsComponent,
    AdminsComponent,
    BlockListComponent,
    AcceptedAdsComponent,
    RejecteddAdsComponent,
    PayedAdsComponent, 
    ReportsComponent,
    ReportsDetailsComponent,
    // FollowUsComponent,
    TeamMembersComponent,
    FollowLinksComponent,
    AboutPolictyComponent,
    AboutPolictyUpdateComponent,
    // PayedAdsComponent,
   GenderPipe,
   TeamMemberUpdateComponent,
   PendingDetailsComponent

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorInterceptor, multi: true }]


})
export class AdminModule {

 }
