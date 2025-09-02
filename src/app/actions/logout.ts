'use server';

import { cookies } from 'next/headers';

export default async function logout() {
  (cookies() as any).delete('uc_session');
}
