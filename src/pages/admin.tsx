// src/pages/admin.tsx
import { TinaEditProvider } from 'tinacms/dist/edit-state';
import { TinaCMS } from 'tinacms';
import { TinaEditProvider } from 'tinacms/dist/edit-state/edit-state-provider';

export default function AdminPage() {
  return (
    <TinaEditProvider showEditButton={true}>
      <TinaCMSProvider cms={new TinaCMS({ enabled: true })}>
        <div>
          <h1>Painel TinaCMS</h1>
          <p>Você está na rota de administração.</p>
        </div>
      </TinaCMSProvider>
    </TinaEditProvider>
  );
}
