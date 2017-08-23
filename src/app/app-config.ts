export interface AppConfig {
  apiEndpoint: string;
}


export const CONTACT_DI_CONFIG: AppConfig = {
  apiEndpoint:  "http://localhost:4201/api/contacts"
  ,
  
};

import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');