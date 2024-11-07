import '@/client/styles/globals.css';
import { Children } from '@/client/types/Children';

export default function layout({ children }: Readonly<Children>) {
  return children;
}
