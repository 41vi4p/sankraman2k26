import HomePage from '@/components/home/HomePage';
import BodyClass from '@/components/shared/BodyClass';
import ClientEffects from '@/components/shared/ClientEffects';

export default function Page() {
  return (
    <>
      <BodyClass className="home-page" />
      <ClientEffects page="home" />
      <HomePage />
    </>
  );
}
