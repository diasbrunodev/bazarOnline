import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from '../../services/firebaseConnection'
import { CardSection, HomeSection, Informations } from './styles'

interface ItemsProps {
  id: string
  name: string
  uid: string
  price: string | number
  description: string
  images: ItemImageProps[]
}

interface ItemImageProps {
  name: string
  uid: string
  url: string
}

export const Home = () => {
  const [items, setItems] = useState<ItemsProps[]>([])
  const [loadImages, setLoadImages] = useState<string[]>([])

  useEffect(() => {
    loadItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function loadItems() {
    const itemsRef = collection(db, 'items')
    const queryRef = query(itemsRef, orderBy('created', 'desc'))

    getDocs(queryRef).then((snapshot) => {
      //console.log('SNAPSHOT_DOCS:', snapshot.docs)
      const listItems = [] as ItemsProps[]

      snapshot.forEach((item) => {
        listItems.push({
          id: item.id,
          name: item.data().name,
          uid: item.data().uid,
          price: item.data().price,
          images: item.data().images,
          description: item.data().description,
        })
      })
      console.log('LISTITEMS:', listItems)
      setItems(listItems)
      console.log('ITEMS:', items)
    })
  }

  function handleImageLoad(id: string) {
    console.log('IMAGEM CARREGADA')
    console.log('ID DA IMAGE:', id)
    setLoadImages((prevImageLoaded) => [...prevImageLoaded, id])
  }

  return (
    <>
      <HomeSection>
        {items.map((item) => (
          <Link key={item.id} to={`/item/${item.id}`}>
            <CardSection>
              <div
                style={{
                  display: loadImages.includes(item.id) ? 'none' : 'block',
                }}
              ></div>

              <img
                src={item.images[0].url}
                alt="imagem do item"
                onLoad={() => handleImageLoad(item.id)}
                style={{
                  display: loadImages.includes(item.id) ? 'block' : 'none',
                }}
              />

              <Informations>
                <p className="titulo">{item.name}</p>
                <p>R$: {item.price}</p>
                <p>{item.description}</p>
              </Informations>
            </CardSection>
          </Link>
        ))}
      </HomeSection>
    </>
  )
}
