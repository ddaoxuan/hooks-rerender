import Link from 'next/link';

export default function Menu() {
  return (
    <div>
      Menu: <Link href="/">Home</Link>
      {' | '}
      <Link href={`/appliances`}>Appliances</Link>{' '}
      <Link href={`/audio`}>Audio</Link>{' '}
      <Link href={`/cell%20phones`}>Cell Phones</Link>{' '}
      <Link href={`/housewares`}>Housewares</Link>{' '}
      <Link href={`/musical%20instruments`}>Musical Instruments</Link> <br />
      <br />
    </div>
  );
}
