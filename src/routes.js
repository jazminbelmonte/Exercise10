import Home from './components/Home.vue';
import Movies from './components/movies/Movies.vue';
import Favorites from './components/movies/Favorites.vue';
import FavoritesDetail from './components/movies/FavoritesDetail.vue';
import Quotes from './components/Quotes.vue';

export const routes = [
  {path: '/', component: Home, name: 'home'},
  {path: '/movies', component: Movies, children: [
      {path: '/', component: Favorites},
      {path: ':id', component: FavoritesDetail}
    ]},
  {path: '/quotes', component: Quotes, name: 'quotes'}
];
