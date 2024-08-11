import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmploieService } from '../../services/emploi.service';
import { Console } from 'console';
import { HttpClientModule, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-create-post',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    NavbarComponent,
    SidebarComponent,
    ReactiveFormsModule,
    HttpClientModule
  ],
  templateUrl: './admin-create-post.component.html',
  styleUrl: './admin-create-post.component.scss'
})
export class AdminCreatePostComponent  implements OnInit{
  darkTheme: boolean = false;
  form : FormGroup
  formData : FormData;
  fileName : any[] = [];

  constructor(private emploieService : EmploieService){}


  ngOnInit(): void {

    this.formData = new FormData();

    this.form = new FormGroup ({

        title : new FormControl('',{validators : [Validators.required]})


    })
    


  }

  onSubmit(){

    const newEmploie = {title : this.form.get('title')?.value}

    this.formData.append('title',this.form.get('title')?.value);


    this.emploieService.createEmploie(this.formData).subscribe(

      (data : any )=> {

        console.log(data.body)
        this.formData =  new FormData();
        this.fileName =  [];
        this.form.reset();

      }

     ) 

    
  }

  triggerFileUpload(){}

  onFileSelected(event : any){

    const file:FileList= event.target.files;

    if (file.item(0)?.type !== 'application/pdf') {

      return false

    }

    this.formData.append('file',file[0])
    this.fileName.push(file[0].name)
/*     console.log(this.formData.get('file')) */

  }




}
