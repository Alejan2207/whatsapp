import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {

  userProfile = {
    avatar: 'assets/images/avatar.jpg',
    username: 'cammskyy_',
    posts: 0,
    followers: 766,
    following: 512,
    bio: `!! ♡ !!\n ˚₊· ͟͟͞͞➳❥\n📚🍒📖 - ʕ·ᴥ·ʔ.. \n「 @harrystyles 」`,
    mutualFollowers: ['vanes_lagunes', 'santiagolaratrujillo', 'y 5 más'],
    isFollowing: true
  };

  stories = [
    { image: 'assets/images/teto.png', liked: false },
    { image: 'assets/images/teto.png', liked: false },
    { image: 'assets/images/teto.png', liked: false }
  ];

  toggleFollow() {
    this.userProfile.isFollowing = !this.userProfile.isFollowing;
  }

  constructor() { }

  ngOnInit() {
  }

}
