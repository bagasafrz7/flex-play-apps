export interface IAppResult {
  isGameCenterEnabled: boolean;
  appletvScreenshotUrls: string[];
  supportedDevices: string[];
  features: string[];
  ipadScreenshotUrls: string[];
  artworkUrl512: string;
  screenshotUrls: string[];
  advisories: string[];
  kind: string;
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  trackContentRating: string;
  averageUserRatingForCurrentVersion: number;
  userRatingCountForCurrentVersion: number;
  artistId: number;
  artistName: string;
  genres: string[];
  price: number;
  fileSizeBytes: string;
  bundleId: string;
  releaseDate: string;
  sellerName: string;
  languageCodesISO2A: string[];
  genreIds: string[];
  trackId: number;
  trackName: string;
  formattedPrice: string;
  primaryGenreName: string;
  primaryGenreId: number;
  currentVersionReleaseDate: string;
  isVppDeviceBasedLicensingEnabled: boolean;
  releaseNotes: string;
  version: string;
  wrapperType: string;
  currency: string;
  description: string;
  minimumOsVersion: string;
  averageUserRating: number;
  trackCensoredName: string;
  trackViewUrl: string;
  contentAdvisoryRating: string;
  sellerUrl: string;
  userRatingCount: number;
}

export interface IAppResponse {
  resultCount: number;
  results: IAppResult[];
}
