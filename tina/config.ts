import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "hero",
        label: "Hero",
        path: "content/hero",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título Interno",
          },
          {
            type: "string",
            name: "backgroundImage",
            label: "Imagem de Fundo (URL)",
          },
          {
            type: "string",
            name: "headline",
            label: "Título Principal (H1)",
          },
          {
            type: "string",
            name: "description",
            label: "Descrição / Subtítulo",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "buttonLabel",
            label: "Texto do Botão",
          },
          {
            type: "string",
            name: "buttonAnchor",
            label: "Âncora do Botão (ex: #contato)",
          },
        ],
      },
    ],
  },
});
