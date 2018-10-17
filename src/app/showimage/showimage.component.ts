import { Component, OnInit } from '@angular/core';
import { ShowimageService } from '../showimage.service';

@Component({
  selector: 'app-showimage',
  templateUrl: './showimage.component.html',
  styleUrls: ['./showimage.component.css']
})
export class ShowimageComponent implements OnInit {
  images: any;

  constructor(private showimageservice: ShowimageService) { }

  ngOnInit() {
    this.showimageservice.showImage()
    .subscribe((result_imagename)=>{
      this.images=result_imagename.imagename;
      console.log(result_imagename.imagename);
    },
    (err)=>{
      console.log(err);
    })
  }

}
