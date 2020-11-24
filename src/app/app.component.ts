import {Component, OnInit} from '@angular/core';
import {ConfigServiceService} from './config/config-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'untitled';
  trackList: Track[] = [];
  currencyTrackPlayed: TrackCurrentlyPlayed[] = [];
  tag = 0;

  constructor(private configServiceService: ConfigServiceService) {
  }

  ngOnInit(): void {
    this.configServiceService.getTrackStats().subscribe(value => {
      value['items'].map(item =>
        this.trackList.push(
          new Track(
            item.artists[0].name,
            item.album.name,
            item.album.images[2].url,
            item.name
          )
        )
      );
    });

    this.configServiceService.getRecentlyPlayedSongs().subscribe( value => {
      value['items'].map(item =>
        this.currencyTrackPlayed.push(
          new TrackCurrentlyPlayed(
            item['played_at'],
            new Track(
              item.track.artists[0].name,
              item.track.album.name,
              item.track.album.images[2].url,
              item.track.name
            )
          )
        )
      );
    });
  }

  onTagClick(tagNumber: number): void {
    this.tag = tagNumber;
  }
}

class Track {
  artist: string;
  album: string;
  albumImg: string;
  name: string;

  constructor(
    artist: string,
    album: string,
    albumImg: string,
    name: string
  ) {
    this.artist = artist;
    this.album = album;
    this.albumImg = albumImg;
    this.name = name;
  }
}

class TrackCurrentlyPlayed {
  playedAt: string;
  track: Track;

  constructor(
    playedAt: string,
    track: Track
  ) {
    this.playedAt = playedAt;
    this.track = track;
  }
}
