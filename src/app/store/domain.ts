export interface BaseEntity {
  id?: number;
}

export interface Authority {
  name: string;
}

export interface User {
  id: string;
  email: string;
  roles: Array<Authority>;
}

export interface GoogleMediaItem {
  mimeType: string;
  title: string;
  baseUrl: string;
}
