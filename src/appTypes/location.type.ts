export interface ILocation {
  latitude?: number;
  longitude?: number;
  course?: number;
  speed?: number;
  accuracy?: number;
  altitude?: number;
  altitudeAccuracy?: number;
  timestamp?: number;
}
export interface ICoords {
  altitude?: number;
  altitudeAccuracy?: number;
  latitude?: number;
  accuracy?: number;
  longitude?: number;
  heading?: number;
  speed?: number;
}

export interface ILocationApp {
  mocked?: boolean;
  coords?: ICoords;
  timestamp?: number;
}

export interface ILocationApps {
  loading?: boolean;
  location?: ILocationApp;
}
