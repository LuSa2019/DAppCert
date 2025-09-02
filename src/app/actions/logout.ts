'use server';

import { cookies } from 'next/headers';

export default async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('uc_session');
}
