import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({

  projectId: "0uw0uedu",

  dataset: "production",
   
  title : " My Personal Website",

  apiVersion : "2023-05-19",

  basePath : "/admin",
  
  plugins : [deskTool()],

  schema : { types : schemas}
});

export default config;
