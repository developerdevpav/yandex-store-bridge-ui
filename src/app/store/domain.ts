export interface BaseEntity {
  id?: number;
}

export interface Authority {
  name: string;
}

export interface YandexUser {
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
