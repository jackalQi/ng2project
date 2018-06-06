import { Routes } from '@angular/router'
import { BaseComponent } from './base/base.component'
import { ApiCompComponent } from './api-comp/api-comp.component'
import { QiMainComponent } from './qi-main/qi-main.component'

export const appRoutes : Routes =[
  { path : 'api', component : ApiCompComponent},
  { path : 'qi', component : QiMainComponent},
  { path : '', component : BaseComponent},
  // { path : 'base', component : someComponent
  //  children : [{ path: '' , component: childrencomponet}]
  // Don't forget to add <router-outlet> in basehtml
  // {path : '', redirectTo:'/redirect', pathMatch:'full'}
]
