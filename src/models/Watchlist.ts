import mongoose, { Schema, Document } from "mongoose";

interface ImovieTvShow extends Document {
  title: string;
}

const MovieTvShowSchema: Schema = new Schema({
  title: { type: String, required: true },
});

export interface IWatchlist extends Document {
  user: mongoose.Schema.Types.ObjectId;
  moviesTvShows: ImovieTvShow[];
}

const WatchlistSchema: Schema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    moviesTvShows: [MovieTvShowSchema], // array of movieTvShow objects
  },
  { timestamps: true }
); // adds createdAt and updatedAt fields

export default mongoose.model<IWatchlist>("Watchlist", WatchlistSchema);
