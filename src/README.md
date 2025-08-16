# Clínica Bella – Astro + Tailwind

Proyecto base completo para clínica de belleza (inspiración Juvly). Incluye:
- Astro + Tailwind
- Páginas: inicio, nosotros, servicios, precios, contacto
- Galería (10 imágenes), logos (5 en escala), mapa 3:1
- WhatsApp directo desde `.env`
- Lazyload en imágenes (`loading="lazy"`, `decoding="async"`)
- Footer con texto animado “By Team 3”

## Requisitos
- Node.js LTS
- `npm`

## Instalación
```bash
npm install
cp .env.example .env
# edita .env con tu teléfono (sin +)
npm run dev
```

## Despliegue en Vercel
- Conecta tu repo en GitHub a Vercel y despliega.
- Variables públicas a configurar en Vercel:
  - PUBLIC_WHATSAPP_PHONE
  - PUBLIC_WA_MESSAGE_DEFAULT
  - PUBLIC_CLINIC_LAT
  - PUBLIC_CLINIC_LNG
# Clinicabelleza
