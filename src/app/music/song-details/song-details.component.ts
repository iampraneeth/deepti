import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Song } from '../music';
import { User } from 'src/app/user/user';




@Component({
    selector: "song-details",
    templateUrl: "./song-details.component.html",
    styleUrls: ["./song-details.component.css"]
})
export class SongDetailsComponent implements OnInit {
    constructor(private musicService: MusicService,
        private route: ActivatedRoute,
        private router: Router) { }

    song: Song;
    user: User;
    ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        if (this.user != null) {
            this.route.paramMap.subscribe((map) => {
                let songId = Number(map.get("songId"));

                this.musicService.songDetails(songId).subscribe((data) => {
                    this.song = data;
                });
            });
        } else {
            this.router.navigate(["/signin"]);
            alert("please login to access");
        }
    }

    oNav() {
        document.getElementById("mySidenav").style.width = "200px";
    }

    cNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    logout() {
        sessionStorage.removeItem("user");
        this.router.navigate(["/signin"]);
    }
}