import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { ShowimageComponent } from './showimage/showimage.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes=[
  { path:'', component:ImageuploadComponent },
  { path:'image', component:ShowimageComponent },
  { path:'adduser', component:AdduserComponent },
]
@NgModule({
  imports:[ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
