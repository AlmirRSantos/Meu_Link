//Buscar os links salvos
export async function getLinksSave(key) {
  const myLinks = await localStorage.getItem(key)

  let linksSaves = JSON.parse(myLinks) || []

  return linksSaves
}

//Salvar um link no localStorage
export async function saveLink(key, newLink) {
  let linkStored = await getLinksSave(key)
  //Se já tiver algum link com algum id, não será duplicado
  const hasLink = linkStored.some(link => link.id === newLink.id)

  if (hasLink) {
    console.log('Esse link ja existe na sua lista!')
    return
  }
  //Adicionar esse novo link na lista
  linkStored.push(newLink)
  await localStorage.setItem(key, JSON.stringify(linkStored))
  console.log('Link salvo com sucesso!')
}

//Deletar algum link salvo
export function deleteLink(links, id) {
  let myLinks = links.filter(item => {
    return item.id !== id
  })

  localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
  console.log('Link deletado como sucesso!')

  return myLinks
}
