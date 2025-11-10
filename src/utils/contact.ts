export const contactInfo = {
  email: 'chehem21@gmail.com',
  phone: {
    display: '+253 77 36 06 07',
    href: 'tel:+25377360607'
  },
  address: {
    city: 'Cité saoudie, Djibouti-Ville',
    country: 'Djibouti'
  },
  social: {
    // Ajouter les réseaux sociaux si nécessaire
  }
} as const

// Configuration des entreprises partenaires
export const businessInfo = {
  partnersCount: 1, // Nombre réel d'entreprises partenaires
  partnersDisplay: {
    // Si plus d'une entreprise, affiche le nombre, sinon un texte générique
    singular: 'notre entreprise partenaire',
    plural: 'entreprises partenaires',
    // Texte pour les statistiques
    statsLabel: 'Entreprise partenaire',
    statsNumber: '1',
    // Texte pour les descriptions
    trustText: 'notre partenaire qui nous fait confiance',
    trustTextPlural: 'entreprises qui nous font confiance'
  }
} as const

// Helper pour obtenir le texte approprié selon le nombre de partenaires
export const getPartnersText = (type: 'trust' | 'stats' | 'generic') => {
  const isPlural = businessInfo.partnersCount > 1
  
  switch (type) {
    case 'trust':
      return isPlural 
        ? `les ${businessInfo.partnersCount}+ ${businessInfo.partnersDisplay.trustTextPlural}`
        : businessInfo.partnersDisplay.trustText
    case 'stats':
      return {
        number: businessInfo.partnersDisplay.statsNumber,
        label: businessInfo.partnersDisplay.statsLabel
      }
    case 'generic':
      return isPlural 
        ? businessInfo.partnersDisplay.plural
        : businessInfo.partnersDisplay.singular
    default:
      return businessInfo.partnersDisplay.singular
  }
}

export type ContactInfo = typeof contactInfo 