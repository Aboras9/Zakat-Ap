import { Routes } from '@angular/router';
import { HomeUserComponent } from './users/home-user/home-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeConstantComponent } from './constants/home-constant/home-constant.component';
import { AddConstantComponent } from './constants/add-constant/add-constant.component';
import { AddJobComponent } from './jobs/add-job/add-job.component';
import { HomeJobComponent } from './jobs/home-job/home-job.component';
import { AddSuspendedComponent } from './suspend-members/add-suspended/add-suspended.component';
import { HomeSuspendedComponent } from './suspend-members/home-suspended/home-suspended.component';

import { AddMemberdataComponent } from './members-data/add-memberdata/add-memberdata.component';
import { HomeMemberdataComponent } from './members-data/home-memberdata/home-memberdata.component';
import { AddCommitteeComponent } from './committee/add-committee/add-committee.component';
import { HomeCommitteeComponent } from './committee/home-committee/home-committee.component';

import { AddCommitteememberComponent } from './committee-members/add-committeemember/add-committeemember.component';
import { HomeCommitteememberComponent } from './committee-members/home-committeemember/home-committeemember.component';


export const routes: Routes =
[
  {path: '', component :HomePageComponent },
  {path: 'Home-users', component :HomeUserComponent },
  {path: 'add-users', component :AddUserComponent },

  {path: 'Home-constant', component :HomeConstantComponent },
  {path: 'addconstant', component :AddConstantComponent },

  {path: 'Home-job', component :HomeJobComponent },
  {path: 'addjob', component :AddJobComponent },

  {path: 'Home-suspendmember', component :HomeSuspendedComponent },
  {path: 'addsuspendmember', component :AddSuspendedComponent },


  {path: 'Home-memberdata', component :HomeMemberdataComponent },
  {path: 'addmemberdata', component :AddMemberdataComponent },

  {path: 'Home-committee', component :HomeCommitteeComponent },
  {path: 'addcommittee', component :AddCommitteeComponent },

  {path: 'Home-committeemember', component :HomeCommitteememberComponent },
  {path: 'addcommitteemember', component :AddCommitteememberComponent }

];
