import { Component,OnInit } from '@angular/core';
 

import { UserService} from "./service/user.service"
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'api-methods';
  user:any;
  constructor(private service:UserService,
    private Toast:ToastrService){}



  ngOnInit(){
    this.service.getUser().subscribe(
      (user:any)=>{
        
        
        this.user=user.results[0];
      },
      (err)=>
      {
        this.Toast.error(err.status,"OOPS")
      }
    )
  }
}
