import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() { }

  users: any[] = [
    { id: 1, name: 'User 1', avatar: 'assets/images/teto.png' },
    { id: 2, name: 'User 2', avatar: 'assets/images/teto.png' },
    { id: 3, name: 'User 3', avatar: 'assets/images/teto.png' },
    { id: 4, name: 'User 4', avatar: 'assets/images/teto.png' },
    { id: 5, name: 'User 5', avatar: 'assets/images/teto.png' },
    { id: 6, name: 'User 6', avatar: 'assets/images/teto.png' },
    { id: 7, name: 'User 7', avatar: 'assets/images/teto.png' },
    { id: 8, name: 'User 8', avatar: 'assets/images/teto.png' },
    { id: 9, name: 'User 9', avatar: 'assets/images/teto.png' },
    { id: 10, name: 'User 10', avatar: 'assets/images/teto.png' },
  ];

  post: any[] = [
    { id: 2, name: 'Post 1', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 1, name: 'Post 2', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 3, name: 'Post 3', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 4, name: 'Post 4', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 5, name: 'Post 5', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 6, name: 'Post 6', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 7, name: 'Post 7', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 8, name: 'Post 8', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 9, name: 'Post 9', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 10, name: 'Post 10', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 11, name: 'Post 11', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 12, name: 'Post 12', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 13, name: 'Post 13', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 14, name: 'Post 14', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 15, name: 'Post 15', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 16, name: 'Post 16', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 17, name: 'Post 17', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 18, name: 'Post 18', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 19, name: 'Post 19', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 10,description: 'Kasane Teto',date: 'Hace 2 dias'},
    { id: 20, name: 'Post 20', avatar: 'assets/images/teto.png', img: 'assets/images/teto.png',heart: 1000, comment: 10, share: 30,description: 'Kasane Teto',date: 'Hace 2 dias'},
  ];

}
