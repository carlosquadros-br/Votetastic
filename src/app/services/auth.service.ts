import { environmnet } from './../../env/environment';
import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environmnet.supabaseUrl,
      environmnet.supabaseKey
    );

    this.supabase.auth.onAuthStateChange((event, session) => {
        console.log('auth changed: ', event );
        console.log(`auth cjanged session: ${session}`);

    });
   }

   createAccount({email, password} : {email: string, password: string}) {
      return this.supabase.auth.signUp({email, password});
   }

   login({email, password} : {email: string, password: string}) {
    return this.supabase.auth.signUp({email, password});
 }
}

