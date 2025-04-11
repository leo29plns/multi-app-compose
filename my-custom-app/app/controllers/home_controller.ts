// Exemple d'implémentation simple de prettyPrint
function prettyPrint(data: any): string {
  return JSON.stringify(data, null, 2)
}

// Utilisation dans votre contrôleur
import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class HomeController {
  async show({}: HttpContext) {
    const dbData = await db.rawQuery('SELECT version();')
    const formattedData = prettyPrint(dbData) // Utilisez prettyPrint pour formater les données
    return formattedData
  }
}
