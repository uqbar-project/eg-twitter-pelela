#  Twitter Pelela

[![CI](https://github.com/uqbar-project/eg-twitter-pelela/actions/workflows/ci.yml/badge.svg)](https://github.com/uqbar-project/eg-twitter-pelela/actions/workflows/ci.yml)

## 🚀 Cómo ejecutarlo

```bash
pnpm install
pnpm dev
```

Abrí tu navegador e ingresá a [http://localhost:5173](http://localhost:5173) para ver la aplicación funcionando en vivo.

## 🔎 Repaso del binding

Ya sabés que dentro de la carpeta `src` tenées una tríada

- `twitter.pelela`: Es la vista (HTML) donde definimos nuestros componentes visuales
- `twitter.ts`: Contiene la lógica, el estado y el comportamiento (View-Model).
- `twitter.css`: Los estilos dedicados para este componente.

---

## El ejemplo

- El usuario escribe dentro del textarea, y eso va actualizando la propiedad `tweet` de nuestro view-model
- Aquí no tenemos un botón, sino propiedades que escuchan cambios en esa propiedad `tweet`...
- ...por lo que la cantidad de caracteres restantes y el color de fondo del span cambian **inmediatamente**

