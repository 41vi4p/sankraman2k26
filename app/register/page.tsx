import RegisterPage from '@/components/register/RegisterPage';
import ClientEffects from '@/components/shared/ClientEffects';

export default function Page() {
  return (
    <>
      <ClientEffects page="register" />
      <RegisterPage />
    </>
  );
}
