import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Albert Geoff S. Buison',
  description: 'Get in touch with Albert Geoff S. Buison. Contact me for collaborations, questions, or just to say hello.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}