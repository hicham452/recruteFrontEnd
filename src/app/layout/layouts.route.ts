import { Routes } from "@angular/router";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { AdminCreatePostComponent } from "../pages/admin-create-post/admin-create-post.component";
import { AdminManageCandidateComponent } from "../pages/admin-manage-candidate/admin-manage-candidate.component";
import { AdminManageJobsComponent } from "../pages/admin-manage-jobs/admin-manage-jobs.component";
import { AdminProfileComponent } from "../pages/admin-profile/admin-profile.component";
import { MaindemoComponent } from "../pages/maindemo/maindemo.component";

export const ADMIN_ROUTES: Routes = [
  { path: '', component: MaindemoComponent },
  { path: 'admin-create-post', component: AdminCreatePostComponent },
  { path: 'admin-manage-candidate', component: AdminManageCandidateComponent },
  { path: 'admin-manage-jobs', component: AdminManageJobsComponent },
  { path: 'profile', component: AdminProfileComponent },
  { path: 'admin-dashboard', component: DashboardComponent },
]
