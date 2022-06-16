export interface BaseEntity {
  id?: number;
}

export interface Authority extends BaseEntity {
  name: string;
}

export interface YandexUser extends BaseEntity {
  username?: string;
  email?: string;
  realName?: string;
  authGoogle?: boolean;
}

export interface GoogleMediaItem {
  mimeType: string;
  title: string;
  baseUrl: string;
  isPhoto: string;
}

export interface GooglePageMediaItem {
  next: string;
  mediaItems: Array<GoogleMediaItem>;
}
