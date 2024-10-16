import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {'path':'', 'title':'Home', component: HomeComponent},
    {'path': 'service', 'title':'Services', component: ServicesComponent},
    {'path':'contact', 'title':'Contact', component: ContactComponent},
    {'path':'about', 'title':'About', component: AboutComponent},
    {'path':'blog', 'title':'Blog', component: BlogComponent},
    {'path':'blog', children:[
        {'path':'blog-graphics', 'title':'Blog Details', component: BlogComponent},

    ]},
    {'path':'**', 'title':'404', component: PagenotfoundComponent}
];
