export default function sitemap() {
  return [
    {
      url: 'https://dennisturco.github.io',  // URL del sito principale
      lastModified: new Date(),
      changeFrequency: 'monthly',        
      priority: 1.0,
    },
    {
      url: 'https://dennisturco.github.io/carriera', 
      lastModified: new Date(),
      changeFrequency: 'monthly', 
      priority: 0.8,
    },
    {
      url: 'https://dennisturco.github.io/progetti', 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://dennisturco.github.io/studi', 
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ]
}