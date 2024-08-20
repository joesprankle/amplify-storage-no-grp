import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'tech-summit-2024-bucket',
    access: (allow) => ({
        'profile-pictures/{entity_id}/*': [
          allow.guest.to(['read']),
          allow.entity('identity').to(['read', 'write', 'delete'])
        ],
        'public/picture-submissions/*': [
          allow.authenticated.to(['read','write']),
          allow.guest.to(['read', 'write'])
        ],
      })
    });