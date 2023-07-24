import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnDestroy, OnInit{


  public counter = signal(10);

  public user = signal<User>({
    id:1,
    email:'george.bluth@reqres.in',
    first_name:'George',
    last_name:'Bluth',
    avatar:'https://reqres.in/img/faces/1-image.jpg'
  });

  public fullName = computed(()=> `${this.user().first_name} ${this.user().last_name}`)

  public userChangeEffect = effect(()=>{


    console.log(`${this.user().first_name} - ${this.counter()}`);

  })

  ngOnInit(): void {
   setInterval(() => {
    this.counter.update(current=> current+1)

    if(this.counter() == 16){
      this.userChangeEffect.destroy();
    }
   },1000)
  }
  ngOnDestroy(): void {
    this.userChangeEffect.destroy();
  }

  increaseBy(value:number){
    this.counter.update(current =>  current+value)
  }

  onFieldUpdated(field:keyof User, value:string){
    // this.user.set({
    //   ...this.user(),
    //   [field]:value,
    // })
    // Con mutación

    this.user.mutate(current =>{
      switch(field){
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value
          break;
        case 'last_name':
          current.last_name = value
          break;
        case 'id':
          current.id = Number(value);
          break;
      }
    });

    // Con Update
    // this.user.update(current => {
    //   return{
    //     ...current,
    //     [field]:value
    //   }
    // })

  }
}
