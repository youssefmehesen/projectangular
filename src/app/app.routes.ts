import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AccountComponent } from './pages/account/account.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
// import { CartComponent } from './components/cart/cart.component';
import { CartComponent } from './pages/cart/cart.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent, title: 'About' },
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'signup', component: SignUpComponent, title: 'Sign Up' },
    { path: 'login', component: LoginComponent, title: 'Sign Up' },
    { path: 'contact', component: ContactComponent, title: 'Contact' },
    { path: 'account', component: AccountComponent, title: 'Account' },
    { path: 'wishlist', component: WishlistComponent, title: 'Account' },
    { path: 'cart', component: CartComponent, title: 'Account' },
    { path: 'search', component: SearchResultComponent, title: 'Account' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent, title: 'Not Found Page' },
];
