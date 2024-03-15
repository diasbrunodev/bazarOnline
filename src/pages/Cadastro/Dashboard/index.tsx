import { useContext, useEffect, useState } from 'react'
import { FiTrash } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../contexts/authContext'

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore'
import { db, storage } from '../../../services/firebaseConnection'
import { deleteObject, ref } from 'firebase/storage'
import { Titulo } from '../styles'
import { ButtonTrash, CardImage, Form, SectionRegister } from './styles'

interface ItemProps {
  name: string
  price: string | number
  description: string
  images: ImageItemProps[]
  id: string
}

interface ImageItemProps {
  uid: string
  name: string
  url: string
}

export const Dashboard = () => {
  const { user } = useContext(AuthContext)

  const [items, setItems] = useState<ItemProps[]>([])

  const [input, setInput] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    loadItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function loadItems() {
    if (!user?.uid) {
      return
    }

    const itemsRef = collection(db, 'items')

    //pega pelo usuário que cadastrou
    //const queryRef = query(itemsRef, where('uid', '==', user.uid))

    //pega todos cadastrados em ordem
    const queryRef = query(itemsRef, orderBy('created', 'desc'))

    getDocs(queryRef).then((snapshot) => {
      const listItems = [] as ItemProps[]

      snapshot.forEach((doc) => {
        listItems.push({
          name: doc.data().name,
          price: doc.data().price,
          description: doc.data().description,
          images: doc.data().images,
          id: doc.id,
        })
      })
      setItems(listItems)
      // console.log('ITEMS:', listItems)
    })
  }

  async function handleDeleteItem(item: ItemProps) {
    const itemDeleted = item
    // console.log(itemDeleted.id)

    const docRef = doc(db, 'items', itemDeleted.id)
    await deleteDoc(docRef)

    itemDeleted.images.map(async (image) => {
      const imagePath = `images/${image.uid}/${image.name}`
      const imageRef = ref(storage, imagePath)

      try {
        await deleteObject(imageRef)
        setItems(items.filter((item) => item.id !== itemDeleted.id))
      } catch (error) {
        // console.log('ERRO AO EXCLUIR IMAGEM')
      }
    })

    // Após excluir o item e todas as imagens associadas, recarregue a página
    //window.location.reload()
  }

  async function handleSearchItem() {
    if (input === '') {
      loadItems()
      return
    }

    setItems([])

    //fazer busca pelo id da collection
    const q = query(collection(db, 'items'), where('__name__', '==', input))

    const querySnapshot = await getDocs(q)

    const listItems = [] as ItemProps[]

    querySnapshot.forEach((doc) => {
      listItems.push({
        name: doc.data().name.toUpperCase(),
        price: doc.data().price,
        description: doc.data().description,
        images: doc.data().images,
        id: doc.id,
      })
    })
    // console.log('QUERY-SNS', querySnapshot)
    // console.log('LIST-ITEMS', listItems)
    setItems(listItems)
    navigate('/dashboard')
  }

  return (
    <SectionRegister>
      <Titulo>Controle</Titulo>

      <Form>
        <input
          placeholder="Cole o código do produto..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearchItem}>Buscar</button>

        <Link to="/">
          <button className="button-home">Home</button>
        </Link>

        <Link to="/cadastro">
          <button className="button-home">Cadastro</button>
        </Link>
      </Form>

      <div className="div-cards">
        {items.map((item) => (
          <CardImage key={item.name}>
            <ButtonTrash>
              <button onClick={() => handleDeleteItem(item)}>
                <FiTrash size={28} />
              </button>
            </ButtonTrash>
            <img src={item.images[0].url} />
            <p>{item.name}</p>
            <p>Preço: R$ {item.price}</p>
            {/* <p>{item.description}</p> */}
            <p>Cód.: {item.id}</p>
          </CardImage>
        ))}
      </div>
    </SectionRegister>
  )
}
