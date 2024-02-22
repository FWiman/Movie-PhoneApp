import mongoose, { Schema, Document } from "mongoose";

export interface IWatchlist extends Document {
  user: string;
  moviesTvShows: string[];
}

const WatchlistSchema: Schema = new Schema({
  user: { type: String, required: true },
  moviesTvShows: [{ type: String }],
});

export default mongoose.model<IWatchlist>("Watchlist", WatchlistSchema);
