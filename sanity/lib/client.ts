import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skzN9sxpH96ggA8Ec10RSq5zPeQ2j0EJpURAYzJGsAQAY3l2X2Fct4k0cVg6VAhZ5kmMdx3z71Q4xJu1ZKY5YY288OoT7AdwLEo2SAgWRTFWiFfckVP4ZTGZkLV2vtkelLg0dP46MgRXcgOFs6A9Zxco0lPJv3gMQfmFmDMY2GXyxkKEy1ci"
    
})
