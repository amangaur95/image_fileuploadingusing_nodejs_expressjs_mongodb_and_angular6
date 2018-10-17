import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { AppRoutingModule } from './/app-routing.module';
import { NgxUploaderModule } from 'ngx-uploader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowimageComponent } from './showimage/showimage.component';
// import { from } from 'rxjs';
import { AdduserComponent } from './adduser/adduser.component';
// import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    AppComponent,
    ImageuploadComponent,
    ShowimageComponent,
    AdduserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
