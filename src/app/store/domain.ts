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

export interface MimeType  extends BaseEntity {
  mediaType?: string;
  name: string;
  id?: number;
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

export interface YandexStream {
  id: number;
  name: string;
  status: string;
  mediaTypes: MimeType[] | undefined;
  date: Date;
}

export class RequestCreateYandexStream {
  id: string | null = null;
  mediaTypes: string[] = [];
}
