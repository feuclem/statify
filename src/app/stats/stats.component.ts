import {Component, OnInit} from "@angular/core";
import {StatsService} from "./stats.service";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.css"]
})
export class StatsComponent implements OnInit {

  tag = 0;
  trackList: Track[] = [];
  currencyTrackPlayed: TrackCurrentlyPlayed[] = [];

  constructor(private statsService: StatsService) {
  }

  ngOnInit(): void {
    this.statsService.getTopTracks().then(value => {
      value.items.map(item =>
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

    this.statsService.getRecentlyPlayedSongs().then(value => {
      value.items.map(item =>
        this.currencyTrackPlayed.push(
          new TrackCurrentlyPlayed(
            item.played_at,
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
